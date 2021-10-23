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
      access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
      center: [0,0],
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

  // Load the markers here when loading
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

          // forward geo coding (Not really relevant for now . . . . .. . this just searches for the location. )
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
        .then(response =>{
          // For loop to loop through the countries

          var countries = response.data.data;
          // Score and desc needed for pop up 
          var score = [];
          var desc = []; 
          var links = []; 

          //  countries is an array 
          for (let indivCountry of countries){

            console.log(indivCountry);
            
            // Taking out the necessary components such as desc and score.
            score.push(indivCountry.score);
            desc.push(indivCountry.fields.title);
            links.push(indivCountry.href);


           


        
            
          }
           return [score,desc,links]
          // console.log(score);
          // console.log(desc)
          // console.log(links)


        })
        // If the response is true 
        const responseTwo = await response; 

          
        // If it works 
          if (responseTwo){
          console.log(responseTwo);
          var score = responseTwo[0];
          var desc = responseTwo[1];
          var links = responseTwo[2];

          // do another axios call here so that we can get the lat and lon

          for (let url of links){
            //  Do an axios get 

            axios.get(url)
            .then(response=>{
              console.log(response.data.data[0].fields.primary_country.location);

              this.mapboxgl.Marker()
              .setLngLat([-65.017, -16.457])
              .addTo(this.map);
              
            })

          }


    

          } else{
            console.log('Fail to retrieve data');
          }
        // const responseTwo = await response; 
      } catch(err){
        console.log(err);

      }

  //       for (url of response.data.data){
  //         const response1 = await axios.get(url.href)
  //         console.log(response1)


  //       }
  //       this.loading = false;
  //       this.location = response1.links.data;
  //       console.log(url);
  //     } catch (err) {
  //       this.loading = false;
  //       console.log(err);
  //     }
    
    }
    }
  
}
</script>

<style lang="scss" scoped>
  #map {
    height: 100vh;
  }


</style>





