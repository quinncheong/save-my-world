<template>
  <div class="container-fluid visualisation">
    <!-- header -->
    <h1>Start saving the environment now</h1>
    <!-- Container to hold  the map -->
    <!-- <button
            type="button"
            :disabled="loading"
            :class="{ disabled: loading}"
            class="location-btn"
            @click="getLocation"
          >test</button> -->
    <div id="map"></div>
  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

var url =
  "https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake";
export default {
  name: "Visualise",
  components: {},
  data() {
    return {
      loading: false,
      location: "",
      access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
      center: [0, 0],
      map: {},
      geoCodeList: [],
      geoJson: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-77.032, 38.913],
            },
            properties: {
              title: "Mapbox",
              description: "Washington, D.C.",
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-122.414, 37.776],
            },
            properties: {
              title: "Mapbox",
              description: "San Francisco, California",
            },
          },
        ],
      },
    };
  },

  // methods:{

  //   async getLocation() {
  //       try {
  //         let url = 'https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake'

  //         this.loading = true;
  //         const response = await axios.get(url);
  //         console.log(response);
  //         this.loading = false;
  //         this.location = response.data.features[0].place_name;
  //       } catch (err) {
  //         this.loading = false;
  //         console.log(err);
  //       }

  //   }
  // },

  mounted() {
    this.createMap();

    //   // Create map  after mounted
    //   // Need to access the token first
    //   mapboxgl.accessToken = this.access_token;
    //   // Creation of map when the page first load

    //   this.map = new mapboxgl.Map({
    //     container: 'map',
    //     style: "mapbox://styles/mapbox/streets-v11",
    //     center: this.center,
    //     zoom: 11,
    // })

    //   let geocoder =  new MapboxGeocoder({
    //           accessToken: this.access_token,
    //           mapboxgl: mapboxgl,
    //           marker: true,
    //     });

    //   // Adding Search to the map

    //   this.map.addControl(geocoder);

    //   // loading map

    //   this.map.on('load', async () => {
    //   // Get the initial location of the International Space Station (ISS).
    //   const geojson = await getLocation();
    //   // Add the ISS location as a source.

    //   })

    // Load the markers here when loading
    this.map.on("load", async () => {
      let result = await this.getLocation(); // After getting location then we add the markers
      this.addMarkers();
    });
  },

  methods: {
    // create map on mount
    async createMap() {
      try {
        mapboxgl.accessToken = this.access_token;
        this.map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: this.center,
          zoom: 11,
        });
        let geocoder = new MapboxGeocoder({
          accessToken: this.access_token,
          mapboxgl: mapboxgl,
          marker: false,
        });

        // forward geo coding (Not really relevant for now . . . . .. . this just searches for the location. )
        this.map.addControl(geocoder);
        geocoder.on("result", (e) => { //Events
          const marker = new mapboxgl.Marker({
            draggable: true,
            color: "#D80739",
          })
            .setLngLat(e.result.center)
            .addTo(this.map);
          this.center = e.result.center;
          marker.on("dragend", (e) => {
            this.center = Object.values(e.target.getLngLat());
          });
        });
      } catch (err) {
        console.log("map error", err);
      }
    },

    // trying to get location of prepopulated data.
    async getLocation() {
      this.loading = true;
      try {
        const response = await axios.get(url);
        if (!response) {
          throw Error("Failed to get data");
        }
        // Score and desc needed for pop up
        let score = [];
        let desc = [];
        let links = [];

        let countries = response.data.data;
        //  countries is an array
        for (let indivCountry of countries) {
          console.log(indivCountry);

          // Taking out the necessary components such as desc and score.
          score.push(indivCountry.score);
          desc.push(indivCountry.fields.title);
          links.push(indivCountry.href);
        }

        let geoList = await this.pushGeo(links);
        this.geoCodeList = geoList;

        return;
      } catch (err) {
        console.log(err);
        return;
      }
    },

    // Function to return a list of lat and long
    async pushGeo(links) {
      let geoList = [];

      // Un optimised version
      for (let url of links) {
        let res = await axios.get(url);
        // console.log(res.data.data[0].fields.primary_country.location);
        let geoCode = res.data.data[0].fields.primary_country.location;
        geoList.push(geoCode);
      }

      return geoList;

      // fast version using promises but its buggy so dont use this for now
      // Buggy because the api gets cut off
      // const responses = await Promise.allSettled(
      //   links.map((link) => {
      //     return axios.get(url);
      //   })
      // );

      // for (let res of responses) {
      //   console.log(res);
      //   let geoCode = res.data.data[0].fields.primary_country.location;
      //   geoList.push(geoCode)
      // }
    },

    async addMarkers() {
      for (let coordinates of this.geoCodeList) {
        console.log(coordinates);
        // create a HTML element for each feature
        const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(this.map);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  height: 100vh;
}

.marker {
  background-image: url("../assets/img/globe.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
