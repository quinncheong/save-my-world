<template>
  <div class="container-fluid visualisation">
    <!-- header -->
    <h1>Start saving the environment now</h1>
    <!-- Container to hold  the map -->
    <div id='map'></div>


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
      access_token: "pk.eyJ1IjoianB3b25nIiwiYSI6ImNrdXlzdXV3ajc1aWEybnFqYWN3dzdsbnAifQ.wwNeMGN_vVk_NIYxlZyr-g",
      center: [0, 0],
      map: {},
    }
},

  mounted() {
    // Create map  after mounted
    // Need to access the token first
    mapboxgl.accessToken = this.access_token;
    // Creation of map when the page first load 

    this.map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/mapbox/streets-v11",
      center: this.center,
      zoom: 11,  
  })

    let geocoder =  new MapboxGeocoder({
            accessToken: this.access_token,
            mapboxgl: mapboxgl,
            marker: false,
      });   

    // Adding Search to the map

    this.map.addControl(geocoder);


  },


  
  created() {},
};
</script>

<style lang="scss" scoped>
  #map {
    height: 100vh;
  }


</style>



