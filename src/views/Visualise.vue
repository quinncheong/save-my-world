<template>
  <div class="visualisation-wrapper">
    <!-- header -->
    <!-- Overall wrapper for fade in animation -->
    <div class="add-fade-in">
      <h3 class="disaster-header-title">Disaster Frequency</h3>
      <p class="disaster-header-text">
        The map below shows the frequency of disasters in the world.
      </p>
      <i class="disaster-header-select">
        Select a filter to understand how disasters have been increasing rapidly
        throughout the years
      </i>

      <div class="disaster-filter">
        <h4>Filters:</h4>

        <!-- Bootstrap radio  -->
        <div class="d-flex justify-content-around">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="everyyear"
              v-model="selected"
              @change="handleChange()"
              checked
            />
            <label class="form-check-label" for="inlineRadio1"
              >Every Year</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="indivyear"
              v-model="selected"
              @change="handleChange()"
            />
            <label class="form-check-label" for="inlineRadio2"
              >Individual Year</label
            >
          </div>
        </div>
      </div>

      <!-- Container to hold  the slider -->
      <div class="console justify-self-center" v-if="!loading">
        <h5 class="sliderValue">{{ yearVal }}</h5>
        <div class="row" v-if="selected == 'indivyear'">
          <div class="col-1 col-sm-1 p-0">1981</div>
          <div class="col-9 col-sm-10">
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
          <div class="col-1 col-sm-1 p-0">2021</div>
        </div>
      </div>

      <div id="console-alt" v-else>Loading please wait!!!!!!</div>
    </div>

    <!--  Supposed map row -->
    <div class="map-container">
      <!-- Col to hold the map -->
      <!-- <div class="col" id="mapcontainer"> -->

      <!-- Button to go back to original center -->

      <button v-if="mapCenter == false" id="flydisplay" @click="returnCenter()">
        Go back to original
      </button>
      <div class="map" id="map">
        <!-- Result individual modal to be placed here  -->

        <div class="container">
          <div v-if="flying == false && display == true" id="desc" class="my-2">
            <button
              id="close"
              type="button"
              @click="stopDisplay()"
              class="btn-close"
            ></button>

            <div class="descriptiontext">
              <h5 class="text-start">{{ title }}</h5>
              <hr />
              <div
                v-for="(indivDesc, index) in descriptionModal"
                :key="index"
                class="mt-2"
              >
                <h6>
                  <b>Occurence {{ index + 1 }}</b>
                </h6>
                <!-- <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="`#modal${index}`" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
              </button> -->

                <!-- 
              <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->

                <div class="scrollbox">
                  <!-- Create a a href here to read more  -->

                  <div class="modalResult">
                    <a
                      data-bs-toggle="collapse"
                      :href="`#modal${index}`"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Give me more details
                    </a>

                    <!-- This doesn't work why ?? -->
                    <p class="collapse mt-2" :id="`modal${index}`">
                      {{ indivDesc }}
                    </p>
                  </div>
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- Outer division to hold information -->
    <div class="disaster-info" v-if="!loading">
      <p class="disaster-info-text">
        Search results:
        <span>{{ resultArray.length ?? "No Results Found" }}</span>
      </p>

      <!-- Iterate through the results  -->
      <div v-for="result in resultArray" :key="result" class="row">
        <div class="col">
          <p class="text-dark text-start">{{ result }}</p>
        </div>

        <hr class="lead" />
      </div>
    </div>
    <div v-else>
      <div class="loader"></div>
    </div>

    <!-- Disaster infographic -->
    <Disasterinfo />
  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Disasterinfo from "@/components/Visualise/Disasterinfo.vue";

const regexExpression = /(https?:\/\/[^ ]*)/;
export default {
  name: "Visualise",
  components: { Disasterinfo },
  data() {
    return {
      loading: true,
      location: "",
      access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
      center: [0, 20],
      map: {},
      // Disaster list
      selectedQuery: "Cold Wave",
      desc: [],
      markerList: [],
      features: [],
      featuresMain: [],
      yearVal: null,
      year: "",
      flying: true,
      // For result modal
      title: "Click on any of the pointers!",
      descriptionModal: "",
      status: "",
      resultArray: [],
      display: true,
      mapCenter: true,
      offset: 0,
      offsetCount: 0,
      queryInterval: true,

      //  For the filter for the different years
      yearAll: true,
      selected: "",
    };
  },
  async mounted() {
    this.createMap();
    // Load the markers here when loading

    this.map.on("load", async () => {
      // Call get location 4 times
      // for (let index = 0; index < 4; index++) {
      //   await this.getLocation(); // After getting location then we add the markers
      // }

      // let x = await this.useInterval();

      await this.getLocation();

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
              features: this.featuresMain,
            },
          });

          console.log(this.featuresMain);

          console.log(this.featuresMain);

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

      // Display == true
      this.display = true;

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
        this.mapCenter = false;
        //  Once ended, we add it into the modal.

        this.title = name;

        console.log(description);

        // Split into paragraphs
        let tempList = description.split("\n\n");

        this.descriptionModal = tempList;

        console.log(tempList);

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
    // async useInterval() {
    //   if (this.offsetCount === 3) {
    //     clearInterval(this.queryInterval)
    //     console.log('cleared the interval')
    //   } else {
    //     this.queryInterval = setInterval(async () => {
    //       await this.getLocation();
    //     }, 10000);
    //   }
    // },

    // trying to get location of prepopulated data.
    async getLocation() {
      // Reset
      this.features = [];
      this.loading = true;
      // "https://api.reliefweb.int/v1/disasters?appname=apidoc&query[value]=" + this.selectedQuery + "&query[fields][]=type&fields[include][]=type.name&limit=100"
      //           "https://api.reliefweb.int/v1/disasters?type&fields[include][]=type.name&limit=20&sort[]=date:desc"
      // Changed to 100 first for faster loading time.

      //           `https://api.reliefweb.int/v1/disasters?type&fields[include][]=type.name&limit=800&offset=${this.offset}&sort[]=date:desc`

      try {
        const response = await axios.get(
          `https://api.reliefweb.int/v1/disasters?type&fields[include][]=type.name&limit=800&offset=${this.offset}&sort[]=date:desc`
        );

        this.offset += 800;
        this.offsetCount += 1;
        if (!response) {
          throw Error("Failed to get data");
        }
        // Score and desc needed for pop up
        this.desc = []; // Set the desc to an empty array?
        let results = response.data.data ?? [];
        let x = await this.createFeaturesArray(results);
        let yu = await this.pushGeo();

        this.featuresMain = this.featuresMain.concat(this.features);
        // Reset the features array since gonna loop
        this.features = [];

        console.log("starting the timer");

        this.loading = false;

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

      // console.log(dataArray);

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
      // console.log(geoIdDictionary);
      // Loop through features and do the lookup in the geo dictionary
      // and add it to the array
      this.features.forEach((feature, index) => {
        let { geoCode, desc } = geoIdDictionary[feature.properties.id];
        feature.geometry.coordinates = [geoCode.lon, geoCode.lat];
        feature.properties.description = desc;
      });
      console.log(this.features);
    },

    async handleClick() {},

    async listenEvent() {
      // const year = parseInt(event.target.value);
      // console.log(event.target.value);
      // this.year = year;
      // console.log(year)
      // update the map
      this.loading = true;

      console.log("hittin listen event");
      this.map.setFilter("result", [
        "==",
        ["number", ["get", "year"]],
        parseInt(this.yearVal),
      ]);

      this.loading = false;
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

    stopDisplay() {
      this.display = false;
    },

    async returnCenter() {
      await this.map.flyTo({
        center: [0, 20],
        zoom: 1,
        pitch: 0,
        bearing: 0,
      });

      // Conditionals to remove the button
      this.mapCenter = true;

      // Conditionals to remove the modal
      this.display = false;
    },

    // Function to deal with the filters
    handleChange() {
      // From v-model we will determine the relevant filters here.
      if (this.selected == "indivyear") {
        this.yearVal = "2021";

        this.map.setFilter("result", [
          "==",
          ["number", ["get", "year"]],
          parseInt(this.yearVal),
        ]);
      }

      if (this.selected == "everyyear") {
        this.yearVal = null;

        this.map.setFilter("result", null);
      }

      // if (this.selected == "everyyear"){

      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.visualisation-wrapper {
  @extend %page-wrapper;
  font-size: $variable-font;

  .disaster-header-title {
    margin-bottom: 1rem;
  }

  .disaster-header-text {
  }

  .disaster-header-select {
    margin-bottom: 0.5rem;
    font-size: $font-size-small;
  }

  .disaster-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    h4 {
      margin-right: 1rem;
    }
  }

  .map-container {
    .map {
      color: black;
      border-radius: 10px;
      margin-bottom: 20px;
      // height: 100%;
      height: 450px;
      width: 100%;
    }
  }

  .disaster-info {
    @extend %bg-card-rounded;
    padding: 1rem;
    height: 300px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      @extend %scrollbar-thumb;
      width: 4px;
    }

    .disaster-info-text {
      span {
        font-weight: bold;
      }
    }
  }

  .result-col {
  }

  #flydisplay {
    animation: appear 0.5s;
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
      width: 100%;
      height: 7px;
      outline: none;

      --progress-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2) inset;
      --progress-flll-shadow: var(--progress-shadow);
      --fill-color: linear-gradient(to right, LightCyan, var(--primary-color));
      --thumb-shadow: 0 0 4px rgba(0, 0, 0, 0.3),
        -3px 9px 9px rgba(255, 255, 255, 0.33) inset,
        -1px 3px 2px rgba(255, 255, 255, 0.33) inset,
        0 0 0 99px var(--primary-color) inset;
    }
  }

  #console-alt {
    animation: appear 5s ease;
  }

  // How to fit the text inside ????

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
    border-radius: 10px;
    text-align: left;
    overflow-wrap: break-word;

    #close {
      position: sticky;
    }

    // overflow-x: hidden;
  }

  .result-col {
    border-radius: 25px;
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .result-col:hover {
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
    margin: 0 auto;
  }

  #descriptionparagraph {
    font-size: $variable-font-small;
  }

  .modalResult {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    a:active {
      background-color: yellow;
    }
    p {
      line-height: 120%;
    }
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
    width: 60%;
  }
}
</style>
