<template>
  <div class="container-fluid visualisation">
    <!-- header -->
    <h1>Start saving the environment now</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <!-- Dropdownlist  -->
        <form @submit="handleClick()">
          <select
            class="form-select text-center"
            v-model="selectedQuery"
            @change="help"
          >
            <option
              v-for="indivDisaster of disaster"
              :key="indivDisaster"
              :value="indivDisaster"
              selected
            >
              {{ indivDisaster }}
            </option>
          </select>
          <button>Confirm</button>
        </form>
      </div>
      <div class="col"></div>
    </div>

    <!-- Container to hold  the map -->

    <div id="map">
      <!-- Slider Filter on the top left portion of the map -->
      <div id="console">
        <h1>Last 10 years</h1>
        <div class="text-center">
          <h5>{{ yearVal }}</h5>
          <input
            id="slider"
            class="row ms-4"
            type="range"
            min="1960"
            max="2021"
            step="1"
            v-model="yearVal"
            @change="listenEvent"
          />
        </div>
      </div>
      <!-- Result modal to be placed here  -->

      <div v-if="flying == false" id="desc">
        <h3>{{title}}</h3>
        <h6>{{status}}</h6>
        <p>
         {{descriptionModal}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
export default {
  name: "Visualise",
  components: {},
  data() {
    return {
      loading: false,
      location: "",
      access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
      center: [0, 20],
      map: {},
      geoCodeList: [],
      // Disaster list
      disaster: [
        "Cold Wave",
        "Complex Emergency",
        "Drought",
        "Earthquake",
        "Extratropical Cyclone",
        "Fire",
        "Flash Flood",
        "Flood",
        "Heat",
        "Insect Infestation",
        "Land Slide",
        "Mud Slide",
        "Severe Local Storm",
        "Snow Avalanche",
        "Storm Surge",
        "Tropical Cyclone",
        "Tsunami",
        "Volcano",
        "Wild Fire",
      ],
      selectedQuery: "Cold Wave",
      desc: [],
      markerList: [],
      features: [],
      yearVal: 2020,
      year: "",
      flying: true,
      // For result modal
      title: "Click on any of the pointers!",
      descriptionModal: "",
      status: "",
    };
  },

  mounted() {
    this.createMap();

    // Load the markers here when loading
    this.map.on("load", async () => {
      let result = await this.getLocation(); // After getting location then we add the markers

      // Loading marker image
      await this.map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        async (error, image) => {
          if (error) throw error;

          // Add the image to the map style.
          this.map.addImage("custom-marker", image);
          // Adding data source to map
          this.map.addSource("disasters", {
            type: "geojson",
            data: { type: "FeatureCollection", features: this.features },
          });

          // Adding layer to the map
          this.map.addLayer({
            id: "result",
            type: "symbol",
            source: "disasters",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "Name" property
              "text-field": ["get", "name"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
            filter: ["==", ["number", ["get", "year"]], parseInt(this.yearVal)],
          });
        }
      );

      // this.addMarkers();
    });

    // Add interactive popup here

    // We are interacting with the layers here.
    this.map.on("click", "result", async (e) => {
      // Can use e to access properties and key in the description

      // To-dos : Push description into Modal.

      console.log(e.features[0]);
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      const name = e.features[0].properties.name;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      console.log(e.lngLat.lng);
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      this.flyToLocation(coordinates);

      console.log(coordinates);

      // Adding the interactive elements for the markers

      // Add popup after the screen arrives at the marker

      this.map.on("flystart", () => {
        this.flying = true;
        console.log("start fly here")

      });
      this.map.on("flyend", () => {
        this.flying = false;
        //  Once ended, we add it into the modal.

        this.title = name;
        this.descriptionModal = description;

        console.log(description);

        console.log("end fly here")
        

      });

      this.map.on("moveend", (e) => {
        if (this.flying) {
          console.log("hi")
            
          this.map.fire("flyend");
          
        }
      });

      // new mapboxgl.Popup()
      //   .setLngLat(coordinates)
      //   .setHTML(description)
      //   .addTo(this.map);

      this.map.setFilter("result", [
        "==",
        ["number", ["get", "year"]],
        parseInt(this.yearVal),
      ]);
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
          zoom: 1,
          continuousWorld: false,
        });
        let geocoder = new MapboxGeocoder({
          accessToken: this.access_token,
          mapboxgl: mapboxgl,
          marker: false,
        });
      } catch (err) {
        console.log("map error", err);
      }
    },

    // trying to get location of prepopulated data.
    async getLocation() {
      // Reset

      this.features = [];
      this.loading = true;
      // "https://api.reliefweb.int/v1/disasters?appname=apidoc&query[value]=" + this.selectedQuery + "&query[fields][]=type&fields[include][]=type.name&limit=100"
      //           "https://api.reliefweb.int/v1/disasters?type&fields[include][]=type.name&limit=20&sort[]=date:desc"
      // Changed to 100 first for faster loading time. 
      try {
        const response = await axios.get(
          "https://api.reliefweb.int/v1/disasters?type&fields[include][]=type.name&limit=100&sort[]=date:desc"
        );
        if (!response) {
          throw Error("Failed to get data");
        }
        // Score and desc needed for pop up
        let name = [];
        let links = [];

        let results;

        try {
          results = response.data.data;
        } catch (error) {
          console.log("there is a damn error here");
        }

        //  countries is an array
        for (let indivResult of results) {
          // Generating obj array to put in to .addSource

          let obj = {};
          obj.type = "Feature";
          obj.properties = {};
          obj.geometry = {};
          obj.properties.name = indivResult.fields.name;
          obj.properties.id = indivResult.id;
          obj.properties.link = indivResult.href;
          obj.geometry.type = "Point";
          obj.properties.disastertype = indivResult.fields.type[0].name;
          // Split year from name since that is the only way , just to get the year
          let year = indivResult.fields.name.split(" ");
          let yearNum = parseInt(year[year.length - 1]);
          obj.properties.year = yearNum;
          links.push(indivResult.href);

          // Push into this.features, this will be put into .addsource

          this.features.push(obj);
          console.log(this.features);

          // console.log(this.features)
        }
        // Set desc to name array
        this.desc = name;

        let geoList = await this.pushGeo();
        this.geoCodeList = geoList;

        return this.geoCodeList;
      } catch (err) {
        console.log("I am hitting an error");
        console.log(err);
        return;
      }
    },

    // Function to push lat and long into the large fking object that will be added to .addSource
    async pushGeo() {
      let geoList = [];

      // Changed to features
      for (let array of this.features) {
        //  getting the link
        let url = array.properties.link;

        // Getting the relavant lat and long from the link provided
        let res = await axios.get(url);
        let geoCode = res.data.data[0].fields.primary_country.location;

        // Check if id tallies up
        if (res.data.data[0].id == array.properties.id) {
          // Set new property to lon and lat , array form
          array.geometry.coordinates = [geoCode.lon, geoCode.lat];

          // Get description and check if description is not undefined
          if (res.data.data[0].fields.description == undefined) {
            array.properties.description = `<p>Sorry there is no description for this marker :(</p>`;
            console.log(array.properties.description);
          } else {
            array.properties.description = res.data.data[0].fields.description;
          }
        }
      }
    },

    async handleClick() {},

    async listenEvent() {
      // const year = parseInt(event.target.value);
      // console.log(event.target.value);
      // this.year = year;
      // console.log(year)
      // update the map
      console.log("hittin listen event");
      this.map.setFilter("result", [
        "==",
        ["number", ["get", "year"]],
        parseInt(this.yearVal),
      ]);
      console.log("End filter event");
    },

    // Interactive popup functions

    // Fly to popup when clicked
    flyToLocation(currentFeature) {
      this.map.flyTo({
        center: currentFeature,
        zoom: 11,
      });
      this.map.fire("flystart");
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

#map {
  color: black;
  position: relative;
}

#console {
  position: absolute;
  width: 240px;
  margin: 10px;
  padding: 10px 20px;
  background-color: white;
  z-index: 1;
}

#desc {
  position: absolute;
  width: 25%;
  height: 200px;
  margin-left: 10px;
  bottom: 30px;
  padding: 10px 20px;
  background-color: white;
  z-index: 1;
  overflow-y: auto
  
}

</style>
