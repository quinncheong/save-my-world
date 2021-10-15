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


<!-- Guide section -->

<div class="container-fluid mt-5 guide">

  <!-- Individual steps for the guide -->

  <div class="row px-2 pb-5 ">
    <div class="col mt-5 border-end border-secondary background-transparent">

        <img class='imgsize' src="@/assets/img/planetearth.png">
      <h6>Lorem.</h6> 


      <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod saepe necessitatibus molestias libero optio fuga sapiente atque, fugiat, velit deleniti similique quasi cumque laborum ipsum tempora eaque consequatur? Laudantium provident soluta non quis cumque. Est quae unde recusandae sapiente nostrum!
        </h6>



      

    </div>

   <div class="col mt-5 border-end border-secondary background-transparent">


      <img class='imgsize' src="@/assets/img/clothes.png">
      <h6>Lorem</h6> 


      <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod saepe necessitatibus molestias libero optio fuga sapiente atque, fugiat, velit deleniti similique quasi cumque laborum ipsum tempora eaque consequatur? Laudantium provident soluta non quis cumque. Est quae unde recusandae sapiente nostrum!
        </h6>

    </div>


  <div class="col mt-5  background-transparent">


      <img class='imgsize' src="@/assets/img/recyclingbin.png">
      <h6>Lorem</h6> 


      <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod saepe necessitatibus molestias libero optio fuga sapiente atque, fugiat, velit deleniti similique quasi cumque laborum ipsum tempora eaque consequatur? Laudantium provident soluta non quis cumque. Est quae unde recusandae sapiente nostrum!
        </h6>

    </div>

  </div>
</div>



    




  

   




    
</template>

<script>
// @ is an alias to /src
import Globe from "@/assets/img/globe.png";
import Guide from "@/assets/img/guidebackgroundimg.jpg";
import Recycle from "@/assets/img/recyclingbin.png";
import GlobeGuide from "@/assets/img/planetearth.png";
import Clothes from "@/assets/img/clothes.png";




export default {
  name: "Home",
  data() {
    return {
      Globe,
      Guide,
      Recycle,
      GlobeGuide,
      Clothes
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

.guide{
  background-image: url('~@/assets/img/guidebackgroundimg.jpg');
  background-size: contain,cover;

}

.imgsize{
  width: 200px;
  height:200px;
  margin-top: 20px;
}

.background-transparent{
  background:rgba(160, 154, 154, 0.445);
  margin-left: 10px;
  border-radius: 25px;
}





</style>
