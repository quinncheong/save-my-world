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

            <h5>{{yearVal}}</h5>
          <input   id='slider' class='row ms-4' type='range' min='1960' max='2021' step='1' v-model='yearVal' @change='listenEvent($event)'/>
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
      features: [] ,
      yearVal: 2020
      
    };
  },


  mounted() {
    this.createMap();

    // Load the markers here when loading
    this.map.on("load", async () => {
      let result = await this.getLocation(); // After getting location then we add the markers
    // Loading marker image 
        this.map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
        if (error) throw error;
 
    // Add the image to the map style.
    this.map.addImage('custom-marker', image);
          // this.map.addImage('marker-red', image)

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
        'type': 'symbol',
        'source': 'disasters',
        'layout': {
      'icon-image': 'custom-marker',
    // get the title name from the source's "Name" property
      'text-field': ['get', 'name'],
      'text-font': [
      'Open Sans Semibold',
      'Arial Unicode MS Bold'
      ],
      'text-offset': [0, 1.25],
      'text-anchor': 'top'
        } ,

        // Filter only year 2020, this works
        "filter": ['==', ['number', ['get', 'year']], 2020 ]
        
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

      console.log(this.yearVal) 
      this.map.setFilter('result', ['==', ['number', ['get', 'year']], parseInt(this.yearVal)]);



      });

      
     
})    
      
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
        const response = await axios.get("https://api.reliefweb.int/v1/disasters?appname=apidoc&query[value]=" + this.selectedQuery + "&query[fields][]=type&fields[include][]=type.name&limit=100");
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
          // Taking out the necessary components such as desc and score, and storing it in properties .
          obj.properties.name = indivResult.fields.name
          obj.properties.id = indivResult.id;
          obj.properties.link = indivResult.href
          obj.geometry.type = "Point";
          // Split year from name since that is the only way , just to get the year 
          let year = indivResult.fields.name.split(" ");
          let yearNum = parseInt(year[year.length -1]); 
          obj.properties.year = yearNum;
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

    // Function to push lat and long into the large fking object that will be added to .addSource
    async pushGeo() {  
      let geoList = [];
      console.log(this.features);
      
      // Changed to features
      for (let array of this.features) {

        //  getting the link 
        let url = array.properties.link;

        // Getting the relavant lat and long from the link provided 
        let res = await axios.get(url);
        let geoCode = res.data.data[0].fields.primary_country.location;

        // Check if id tallies up
        if (res.data.data[0].id == array.properties.id){

            // Set new property to lon and lat , array form 
            array.geometry.coordinates = [geoCode.lon,geoCode.lat];

            // Get description and check if description is not undefined
            if (res.data.data[0].fields.description == undefined){
               array.properties.description = `<p>Sorry there is no description for this marker :(</p>`
               console.log(array.properties.description)

            } else {
              array.properties.description = `<p>${res.data.data[0].fields.description}</p>`
                          console.log(array); 

            }
           

            
         
          
          
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

    


        


  

    // }

    // },

// Added function to remove markers
    // async removeMarkers(){
    //   for(let indivMarker of this.markerList){
    //     indivMarker.remove()
    //   }
    // },

   

// Event clicker then would toggle everytime a new value is selected
    async handleClick(){
      
      // remove source first from  and then add again from map object


      this.map.removeSource('disaster')


      await this.getLocation(); 

        this.map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
        if (error) throw error;
 
    // Add the image to the map style.
    this.map.addImage('custom-marker', image);
          // this.map.addImage('marker-red', image)

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
        'type': 'symbol',
        'source': 'disasters',
        'layout': {
      'icon-image': 'custom-marker',
    // get the title name from the source's "Name" property
      'text-field': ['get', 'name'],
      'text-font': [
      'Open Sans Semibold',
      'Arial Unicode MS Bold'
      ],
      'text-offset': [0, 1.25],
      'text-anchor': 'top'
        } ,

        // Filter only year 2020, this works
        "filter": ['==', ['number', ['get', 'year']], 2020 ]
        
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

      console.log(this.yearVal) 
      this.map.setFilter('result', ['==', ['number', ['get', 'year']], parseInt(this.yearVal)]);



      });

      
     
}) 
      console.log("huhiihi")

      

      // Do the same process and await for the geoLocation again

      



     

      


      // After getting location then we add the markers
      // let result = await this.getLocation(); 
      // this.addMarkers();

      //   console.log("hi")
    //   this.createMap();

    //    this.map.on("load", async () => {
    //   this.map.zoomOut({offset: [80, 60]});
    //   this.addMarkers();
    // });
    },

    listenEvent(event){

      const year = parseInt(event.target.value);
  // update the map
      this.map.setFilter('result', ['==', ['number', ['get', 'year']], year]);

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
