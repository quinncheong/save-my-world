<template>
  <div class="container-fluid visualisation">
    <!-- header -->
    <h1>Start saving the environment now</h1>
    <!-- Container to hold  the map -->
      <button
            type="button"
            :disabled="loading"
            :class="{ disabled: loading}"
            class="location-btn"
            @click="getLocation"
          >test</button>
    <div id='map'></div>


  </div>
</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

var url = 'https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=earthquake';
export default {
  name: "Visualise",
  components: {},
 data() {
    return {
      loading: false,
      location: "",
      access_token: "pk.eyJ1IjoianB3b25nIiwiYSI6ImNrdXlzdXV3ajc1aWEybnFqYWN3dzdsbnAifQ.wwNeMGN_vVk_NIYxlZyr-g",
      center: [0, 0],
      map: {},
    }
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

  this.map.on("load", this.getLocation())





  },

  methods:{
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
        let geocoder =  new MapboxGeocoder({
            accessToken: this.access_token,
            mapboxgl: mapboxgl,
            marker: false,
          }); 

          // forward geo coding
        this.map.addControl(geocoder);
        geocoder.on("result", (e) => {
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
      try {
        
        this.loading = true;
        const response = await axios.get(url)
        console.log(response);

        for (url of response.data.data){
          const response1 = await axios.get(url.href)
          console.log(response1)


        }
        this.loading = false;
        this.location = response1.links.data;
        console.log(url);
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
  }
  
}
</script>

<style lang="scss" scoped>
  #map {
    height: 100vh;
  }


</style>





