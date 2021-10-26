<template>
  <div class="container-fluid visualisation">
    <!-- header -->
    <h1>Start saving the environment now</h1>
    <!-- Drop down list that would be used for queries -->

    <div class='row'>
      <div class='col'></div>
      <div class="col">
        <form @submit="handleClick()">
           <select class="form-select text-center" v-model="selectedQuery" @change="help">
          <option v-for="indivDisaster of disaster" :key="indivDisaster" :value="indivDisaster" selected>{{indivDisaster}}</option>
        </select>

        <button>Confirm</button>

        </form>
       
      </div>
      <div class='col'></div>

      

    </div>

 
      
    <!-- Container to hold  the map -->

    <div id="map"></div>
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
      disaster: ["Cold Wave","Complex Emergency","Drought", "Earthquake","Extratropical Cyclone", "Fire","Flash Flood","Flood", "Heat","Insect Infestation","Land Slide","Mud Slide", "Severe Local Storm","Snow Avalanche","Storm Surge","Tropical Cyclone","Tsunami","Volcano","Wild Fire"],
      selectedQuery : 'Cold Wave',
      desc: [],
      markerList: []

// test
      
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
          zoom: 1,
          continuousWorld: false

        });
        let geocoder = new MapboxGeocoder({
          accessToken: this.access_token,
          mapboxgl: mapboxgl,
          marker: false,
        });

        // forward geo coding (Not really relevant for now this just searches for the location. )
        this.map.addControl(geocoder);
        // geocoder.on("result", (e) => { //Events
        //   console.log(e);
        //   const marker = new mapboxgl.Marker({
        //     draggable: true,
        //     color: "#D80739",
        //   })
        //     .setLngLat(e.result.center)
        //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
        //     .addTo(this.map)
        //   this.center = e.result.center;
        //   marker.on("dragend", (e) => {
        //     this.center = Object.values(e.target.getLngLat());
        //     console.log(e);
        //     console.log(e.target);
        //   });
        // });
      } catch (err) {
        console.log("map error", err);
      }
    },

    // trying to get location of prepopulated data.
    async getLocation() {
      this.loading = true;
      try {
        const response = await axios.get("https://api.reliefweb.int/v1/disasters?appname=apidoc&query[value]=" + this.selectedQuery + "&query[fields][]=type&fields[include][]=type.name&limit=30");
        if (!response) {
          throw Error("Failed to get data");
        }
        // Score and desc needed for pop up
        let name = [];
        let links = [];
        

        let results = response.data.data;
        //  countries is an array
        for (let indivResult of results) {
          // Taking out the necessary components such as desc and score.
          name.push(indivResult.fields.name);
          links.push(indivResult.href);
        }
        // Set desc to name array
        this.desc = name; 
     



        let geoList = await this.pushGeo(links);
        this.geoCodeList = geoList;

        return;
      } catch (err) {
        // console.log(err);
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
      
      console.log(geoList);
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
      console.log('I am being rendered in add markers')
      console.log(this.selectedQuery)
     
      for (let i=0; i< this.geoCodeList.length; i++) {
        // console.log(coordinates);
        // create a HTML element for each feature
        const marker = new mapboxgl.Marker()
        .setLngLat(this.geoCodeList[i])
        .setPopup(new mapboxgl.Popup()
        .setHTML(`<h6>${this.desc[i]}</h6>`))    // Added desc inside 
        .addTo(this.map)

        this.markerList.push(marker) 

        console.log(this.markerList)

        


  

    }

    },

// Added function to remove markers
    async removeMarkers(){
      for(let indivMarker of this.markerList){
        indivMarker.remove()
      }
    },

   

// Event clicker then would toggle everytime a new value is selected
    async handleClick(){
      
      // remove previous markets first
      this.removeMarkers();

      // After getting location then we add the markers
      let result = await this.getLocation(); 
      this.addMarkers();

      //   console.log("hi")
    //   this.createMap();

    //    this.map.on("load", async () => {
    //   this.map.zoomOut({offset: [80, 60]});
    //   this.addMarkers();
    // });
    }

  
      
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

#map{
  color: black;
}


</style>
