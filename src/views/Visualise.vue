<template>
  <div class="visualisation-wrapper">
    <!-- header -->
    <h2 class="chart-title mb-1">Disaster Frequency since 1981</h2>
    <p class="chart-details mb-1">
      The map below shows the frequency of disasters in the world since 1981.
    </p>
    <i style="font-size: 15px" class="chart-select mb-2"
      >Select the filter to understand how disasters have been increasing
      rapidly throughout the years</i
    >
    <!--
    <div class="d-flex justify-content-center">
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
      </form>
      <button class="btn btn-outline-success">Confirm</button>
    </div> 
    -->

    <!-- Container to hold  the map -->
    <div class="console justify-self-center" >
      <h1>Last 10 years</h1>
      <div class="text-center">
        <h5>{{ yearVal }}</h5>
        <input
          id="slider"
          class=""
          type="range"
          min="1981"
          max="2021"
          step="1"
          v-model="yearVal"
          @change="listenEvent"
        />
      </div>
    </div>

    <div class="map" id="map">
      <!-- Slider Filter on the top left portion of the map -->
      <!-- Result modal to be placed here  -->
      <div v-if="flying == false" id="desc">
        <h3>{{ title }}</h3>
        <h6>{{ status }}</h6>
        <p>
          {{ descriptionModal }}
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
  async mounted() {
    this.createMap();
    // Load the markers here when loading
    this.map.on("load", async () => {
      await this.getLocation(); // After getting location then we add the markers

      // Loading marker image
      this.map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        async (error, image) => {
          if (error) throw error;

          // Add the image to the map style.
          this.map.addImage("custom-marker", image);
          // Adding data source to map
          this.map.addSource("disasters", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: this.features,
            },
          });

          console.log(this.features);

          console.log("added source");

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
            // filter: ["==", ["number", ["get", "year"]], parseInt(this.yearVal)],
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
        console.log("start fly here");
      });
      this.map.on("flyend", () => {
        this.flying = false;
        //  Once ended, we add it into the modal.

        this.title = name;
        this.descriptionModal = description;

        console.log(description);

        console.log("end fly here");
      });

      this.map.on("moveend", (e) => {
        if (this.flying) {
          console.log("hi");

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

        this.map.scrollZoom.disable();

        const nav = new mapboxgl.NavigationControl({
          visualizePitch: true,
        });
        this.map.addControl(nav, "bottom-right");

        // This variable is unused?
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
          "https://api.reliefweb.int/v1/disasters?type&fields[include][]=type.name&limit=500&sort[]=date:desc"
        );
        if (!response) {
          throw Error("Failed to get data");
        }
        // Score and desc needed for pop up
        this.desc = []; // Set the desc to an empty array?
        let results = response.data.data ?? [];
        await this.createFeaturesArray(results);
        await this.pushGeo();

        // Catching the erorr
      } catch (err) {
        console.log("I am hitting an error inside getLocation: ", err);
      }
    },
    // Function to create the features array from results
    async createFeaturesArray(results) {
      //  countries is an array
      for (let indivResult of results) {
        // Generating obj array to put in to .addSource
        let obj = {
          type: "Feature",
          properties: {
            id: indivResult.id,
            link: indivResult.href,
            name: indivResult.fields.name,
            disastertype: indivResult.fields.type[0].name,
          },
          geometry: {
            type: "Point",
          },
        };
        // Split year from name since that is the only way , just to get the year
        let year = indivResult.fields.name.split(" ");
        let yearNum = parseInt(year[year.length - 1]);
        obj.properties.year = yearNum;

        // Push into this.features, this will be put into .addsource
        this.features.push(obj);
      }
    },
    // Function to push lat and long into the large fking object that will be added to .addSource
    async pushGeo() {
      // Changed to features
      let geoListPromises = [];
      for (let array of this.features) {
        //  getting the link
        let url = array.properties.link;
        geoListPromises.push(axios.get(url));
      }
      let geoListFulfilled = await Promise.all(geoListPromises);
      let dataArray = geoListFulfilled.map((res) => res.data.data[0]);

      console.log(dataArray);

      // have to initialise a dictionary to store id as key
      let geoIdDictionary = {};
      // Loop through data array and get data and add into geoIdDictionary
      for (let disaster of dataArray) {
        let id = disaster.id;
        let geoCode = disaster.fields.primary_country.location;
        let desc =
          disaster.fields.description ??
          "No description for the current disaster.";

        geoIdDictionary[id] = {
          geoCode: geoCode,
          desc: desc,
        };
      }

      await this.addCoordToFeatures(geoIdDictionary);
    },

    // Function to add the coordinates to the features array
    async addCoordToFeatures(geoIdDictionary) {
      console.log(geoIdDictionary);
      // Loop through features and do the lookup in the geo dictionary
      // and add it to the array
      this.features.forEach((feature, index) => {
        let { geoCode, desc } = geoIdDictionary[feature.properties.id];
        feature.geometry.coordinates = [geoCode.lon, geoCode.lat];
        feature.properties.description = desc;
      });
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
.visualisation-wrapper {
  @extend %page-wrapper;

  .map {
    height: 500px;
    color: black;
    position: relative;
  }
  
  .console {
    display: flex;
    flex-direction: column;
    margin: 0 1rem 1rem 1rem;
    padding: 10px 20px;
    background-color: white;
    color: black;
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
    overflow-y: auto;
}

// .marker {
//   background-image: url("../assets/img/globe.png");
//   background-size: cover;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   cursor: pointer;
// }

}


@media screen and (min-width: 768px) {
  .visualisation-wrapper {
    width: 90%;
  }
}

@media screen and (min-width: 968px) {
  .visualisation-wrapper {
    width: 80%;
  }
}

@media screen and (min-width: 1268px) {
  .visualisation-wrapper {
    width: 70%;
  }
}
</style>
