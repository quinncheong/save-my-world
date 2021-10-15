<template>
  <div class="container-fluid ">
<!-- This would be where the globe would be  -->
    <div class="row mt-3" id='login'>
      <div class="col">
        <img src="@/assets/img/globe.png" alt="searchicon" >
      </div>
      <!-- Login section -->

      <!-- Tile of login  -->
      <div class="col text-star">
        <div class="row">
          <div class="col">
            <h1 class='mt-3 text-center'>You have to power to <span id='savemyworld'>#SaveOurWorld</span></h1>
          </div>
        
        <!-- Row 2 username -->
        <div class="row  my-4">
          <div class="col">
            <div class="centered">
                <input type="password" class="centered form-control w-50"  placeholder="Username">  
            </div>
          </div>
        </div>

        <!-- Row 3 password -->

        <div class="row justify-content-center">
          <div class="centered col ">
              <input type="password" class="form-control w-50 "  placeholder="Password">
          </div>  
        </div>


        <!-- Row 4 button -->

        <div class="row">

          <div class="centered my-4">
            <button class='btn btn-primary w-50'>Login</button>
          </div>

        </div>

      </div>
        
        
        
        
      </div>
    </div>
  </div>


<!-- Guides -->



    




  

   




    
</template>

<script>
// @ is an alias to /src
import Globe from "@/assets/img/globe.png";

export default {
  name: "Home",
  data() {
    return {
      Globe
    }
  }
  
};
</script>

<style lang="scss">


.gg {
  color: $testing-variable;
}

#savemyworld{
  color: yellow;
}


.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}





</style>
