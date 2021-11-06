<template>
  <div class="visualisation-wrapper">
    <!-- header -->
    <div id="tile-2">
      <h2 class="chart-title mb-1">Disaster Frequency</h2>
    </div>

    <div id="tile-1">
      <p class="chart-details mb-1">
        The map below shows the frequency of disasters in the world.
      </p>
      <i class="chart-select mb-2">
        Select the filter to understand how disasters have been increasing
        rapidly throughout the years
      </i>
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

      <!-- Container to hold  the slider -->
      <div class="console justify-self-center">
        <h5 class="sliderValue">{{ yearVal }}</h5>
        <div class="row">
          <div class="col-1">
            <div class="value-left">1981</div>
          </div>
          <div class="col-10">
            <input
              id="slider"
              class="w-100"
              type="range"
              min="1981"
              max="2021"
              step="1"
              v-model="yearVal"
              @change="listenEvent"
            />
          </div>
          <div class="col-1">
            <div class="value-right">2021</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Result outer modal to hold all results (WIP) , same row as map-->
    <div class="row">
      <div class="col-3 bg-white result-col">
        <div class="row">
          <div class="col">
            <p class="text-dark text-start mt-2 fs-6">Search results: <span v-if="resultArray.length>0" ><b>{{resultArray.length}}</b></span></p>
            <hr/>
          </div>
        </div>
        <div v-if="resultArray != []">
         
        <div v-for="result in resultArray" :key="result" class="row">
          <div class="col">
            <p class="text-dark text-start ">{{result}}</p>
          </div>

          <hr class='lead'>
        </div>
          
        </div>

        <div v-else class="loader"></div>
      </div>
      <!-- Col to hold the map -->
      <div class="col-9">
        <div class="map" id="map">
          <!-- Slider Filter on the top left portion of the map -->
          <!-- Result individual modal to be placed here  -->
          <div class="container">
            <div v-if="flying == false" id="desc" class="my-2">
              <h5 class="text-center">{{ title }}</h5>
              <div>
                <p class="p-3">{{ descriptionModal }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Disaster infographic -->
    <Disasterinfo/>

   
  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Disasterinfo from "@/components/Visualise/Disasterinfo.vue";

export default {
  name: "Visualise",
  components: {Disasterinfo},
  data() {
    return {
      loading: false,
      location: "",
      access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
      center: [0, 20],
      map: {},
      // Disaster list
      selectedQuery: "Cold Wave",
      desc: [],
      markerList: [],
      features: [],
      yearVal: null,
      year: "",
      flying: true,
      // For result modal
      title: "Click on any of the pointers!",
      descriptionModal: "",
      status: "",
      resultArray: [],
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
            sourceLayer: "disasters",
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

      if (this.yearVal != null) {
        this.map.setFilter("result", [
          "==",
          ["number", ["get", "year"]],
          parseInt(this.yearVal),
        ]);

        console.log("hi");
      }
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
        // Push into result array, to be popoulated into the result modal
        this.resultArray.push(indivResult.fields.name);

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

      // const test = this.map.querySourceFeatures('disaster', {'sourceLayer': 'result'})
      // console.log(test);

      // Get queried layer data here
      const test = this.map.querySourceFeatures("disasters", {
        sourceLayer: "disasters",
        filter: ["==", ["number", ["get", "year"]], parseInt(this.yearVal)],
      });
      console.log(test);

      // Change result list everytime
      this.resultArray = [];

      for (let indivResult of test) {
        console.log(indivResult.properties.name);

        this.resultArray.push(indivResult.properties.name);
      }
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
    font-size: $variable-font;
  

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background: hsl(100 75% 40% / 1);
    border-radius: 100vw;
    margin-block: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background: hsl(120 100% 20% / 1);
    border: 0.25em solid black;
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: hsl(120 100% 5% /1);
  }

  .scrollable-element {
    scrollbar-width: thin;
  }

  #tile-2 {
    .chart-title {
      animation: appear 1s ease;
    }
  }

  #tile-1 {
    .chart-details {
      animation: appear 4s ease;
    }

    i {
      font-size: 13px;
      animation: appear 6s ease;
      overflow: hidden;
    }

  
  }

  .map {
    height: 500px;
    color: black;
    position: relative;
    border-radius: 25px;
  }

  .console {
    display: flex;
    flex-direction: column;
    margin: 0 1rem 1rem 1rem;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.412);
    color: white;
    animation: appear 8s ease;

    z-index: 1;

    #slider {
      -webkit-appearance: none;
      width: 100%;
      height: 7px;
      outline: none;
      -slider-filled-track-color: red;
      -slider-track-color: -slider-filled-track-color;
      border-radius: 3px;
    }

    #slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      background: greenyellow;
      border-radius: 50%;
      cursor: pointer;
      z-index: 3;
      position: relative;
    }
  }

  #desc {
    position: absolute;
    width: 40%;
    height: 200px;
    margin-left: 10px;
    padding: 10px 20px;
    bottom: 30px;
    background-color: white;
    z-index: 1;
    overflow-y: auto;
    animation: appear 0.5s;
    border-radius: 25px;
    text-align: left;
  }

  .result-col {
    border-radius: 25px;
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .result-list {
    margin-top: -50px;
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes appear {
    // 0%{}
    // 100%{transform: translateY(-30px)}
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
