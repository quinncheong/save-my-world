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

    <div id="map">
       <div id='console'>
        <h1>Filter</h1>
        <div class="text-center">
          <input id='slider' class='row' type='range' min='0' max='23' step='1' value='12' />
        </div>
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
      disaster: ["Cold Wave","Complex Emergency","Drought", "Earthquake","Extratropical Cyclone", "Fire","Flash Flood","Flood", "Heat","Insect Infestation","Land Slide","Mud Slide", "Severe Local Storm","Snow Avalanche","Storm Surge","Tropical Cyclone","Tsunami","Volcano","Wild Fire"],
      selectedQuery : 'Cold Wave',
      desc: [],
      markerList: [],
      features: []


      
    };
  },


  mounted() {
    this.createMap();

    // Load the markers here when loading
    this.map.on("load", async () => {
      let result = await this.getLocation(); // After getting location then we add the markers

      

      console.log(this.features);

  // Adding data source to map
      this.map.addSource('disasters', {
        'type': 'geojson',
        'data': {'type': 'FeatureCollection',
        'features': this.features



        }
        });

        this.map.addLayer(
    {
      'id': 'result',
      'type': 'circle',
      'source': 'disasters',
      'layouts' :{
        'marker-color': '#3bb2d0',
        'marker-size': 'large',
        'marker-symbol': 'rocket'
      }
      
    })

    // Add interactive popup here 
      this.map.on('click', 'result', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

      
        console.log(coordinates);
        console.log(description);

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

      
      new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(this.map);

      
      
      // filter: ['==', ['number', ['get', 'Year']], 2000]

      });

      
     
          
      
      // this.addMarkers();
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


      } catch (err) {
        console.log("map error", err);
      }
    },

    // trying to get location of prepopulated data.
    async getLocation() {
      // Reset 
      this.features = [];
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

        console.log(results);
        //  countries is an array
        for (let indivResult of results) {

          // Generating obj array to put in to .addSource 

          let obj = {};
          obj.type = "Feature"; 
          obj.properties = {};
          obj.geometry = {}
          console.log(obj);
          console.log(indivResult.id);
          // Taking out the necessary components such as desc and score.
          obj.properties.name = indivResult.fields.name
          obj.properties.id = indivResult.id;
          obj.properties.link = indivResult.href
          obj.geometry.type = "Point";
          // Split year from name since that is the only way , just to get the year 
          let year = indivResult.fields.name.split(" ");
          let yearString = year[year.length -1]; 
          obj.properties.year = yearString;
          links.push(indivResult.href);

          // Push into this.features, this will be put into .addsource

          this.features.push(obj);

        }
        // Set desc to name array
        this.desc = name; 
     



        let geoList = await this.pushGeo();
        this.geoCodeList = geoList;

        return this.geoCodeList
      } catch (err) {
        // console.log(err);
        return;
      }
    },

    // Function to return a list of lat and long
    async pushGeo() {  
      let geoList = [];
      console.log(this.features);
      // Un optimised version
      // Changed to features
      for (let array of this.features) {

        //  array of object
        let url = array.properties.link;
        console.log(array.properties.description); 
        console.log(url);

        console.log(array);
        let res = await axios.get(url);
        // console.log(res.data.data[0].fields.primary_country.location);
          console.log(res)
          console.log(res.data.data[0].fields.description);
        let geoCode = res.data.data[0].fields.primary_country.location;
// Check if id tallies up 

        if (res.data.data[0].id == array.properties.id){

            // Get coordinate 
            array.geometry.coordinates = [geoCode.lon,geoCode.lat];

            // Get description and check if description is not undefined

            if (res.data.data[0].fields.description == undefined){
              console.log("hey")
               array.properties.description = `<p>Sorry there is no description for this marker :(</p>`
               console.log(array.properties.description)
            } else {
              array.properties.description = `<p>${res.data.data[0].fields.description}</p>`
                          console.log(array); 

            }
           

            
            console.log(array.geometry.coordinates)
         
          
          
        }
        
        
      }
      

      console.log(this.features[0].geometry.coordinates); 

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


      // 
     
      for (let i=0; i< this.geoCodeList.length; i++) {
        // console.log(coordinates);
        // create a HTML element for each feature
        const marker = new mapboxgl.Marker()
        .setLngLat(this.geoCodeList[i])
        .setPopup(new mapboxgl.Popup()
        .setHTML(`<h6>${this.desc[i]}</h6>`))    // Added desc inside 
        .addTo(this.map)

        this.markerList.push(marker) 


        


  

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


#console {
  position: absolute;
  width: 240px;
  margin: 10px;
  padding: 10px 20px;
  background-color: white;
  z-index: 1;
}


</style>
