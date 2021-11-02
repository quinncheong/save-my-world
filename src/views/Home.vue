<template>
  <div class="container-fluid">
    <!-- This would be where the globe would be  -->
    <div class="row mt-3" id="login">
      <div class="col">
        <!-- <img src="@/assets/img/globe.png" alt="searchicon" /> -->
        <div class="row-4">
        </div>
        <div class="row-4 position">  <!--to include breakpoint later on-->
            <div class="earth "></div>
            <div class="circle ">
              <!--This is for a rotating text-->
              <span  style='--i:1;'>#</span>
              <span  style='--i:2;'>S</span>
              <span  style='--i:3;'>A</span>
              <span  style='--i:4;'>V</span>
              <span  style='--i:5;'>E</span>
              <span  style='--i:6;'>O</span>
              <span  style='--i:7;'>U</span>
              <span  style='--i:8;'>R</span>
              <span  style='--i:9;'>W</span>
              <span  style='--i:10;'>O</span>
              <span  style='--i:11;'>R</span>
              <span  style='--i:12;'>L</span>
              <span  style='--i:13;'>D</span>
              <span  style='--i:14;'>#</span>
              <span  style='--i:15;'>S</span>
              <span  style='--i:16;'>A</span>
              <span  style='--i:17;'>V</span>
              <span  style='--i:18;'>E</span>
              <span  style='--i:19;'>O</span>
              <span  style='--i:20;'>U</span>
              <span  style='--i:21;'>R</span>
              <span  style='--i:22;'>W</span>
              <span  style='--i:23;'>O</span>
              <span  style='--i:24;'>R</span>
              <span  style='--i:25;'>L</span>
              <span  style='--i:26;'>D</span>
            </div>


        </div>
        <div class="row-4"></div>

      </div>
      <!-- Login section -->

      <!-- Tile of login  -->
      <div class="col text-star">
        <div class="row">
          <div class="col">
            <h1 class="mt-3 text-center">
              You have the power to <span id="savemyworld">#SaveOurWorld</span>
            </h1>
          </div>

          <!-- Row 2 username -->
          <div class="row my-4">
            <div class="col">
              <div class="centered">
                <input
                  type="password"
                  class="centered form-control w-50"
                  placeholder="Username"
                />
              </div>
            </div>
          </div>

          <!-- Row 3 password -->

          <div class="row justify-content-center">
            <div class="centered col">
              <input
                type="password"
                class="form-control w-50"
                placeholder="Password"
              />
            </div>
          </div>

          <!-- Row 4 button -->

          <div class="row">
            <div class="centered my-4">
              <button class="btn btn-primary w-50">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Guide section -->

  <div class="container-fluid mt-5 guide">
    <!-- Individual steps for the guide -->

    <div class="row px-2 pb-5">
      <div class="col mt-5 border-end border-secondary background-transparent">
        <img class="imgsize" src="@/assets/img/planetearth.png" />
        <h6>Lorem.</h6>

        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod saepe
          necessitatibus molestias libero optio fuga sapiente atque, fugiat,
          velit deleniti similique quasi cumque laborum ipsum tempora eaque
          consequatur? Laudantium provident soluta non quis cumque. Est quae
          unde recusandae sapiente nostrum!
        </h6>
      </div>

      <div class="col mt-5 border-end border-secondary background-transparent">
        <img class="imgsize" src="@/assets/img/clothes.png" />
        <h6>Lorem</h6>

        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod saepe
          necessitatibus molestias libero optio fuga sapiente atque, fugiat,
          velit deleniti similique quasi cumque laborum ipsum tempora eaque
          consequatur? Laudantium provident soluta non quis cumque. Est quae
          unde recusandae sapiente nostrum!
        </h6>
      </div>

      <div class="col mt-5 background-transparent">
        <img class="imgsize" src="@/assets/img/recyclingbin.png" />
        <h6>Lorem</h6>

        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod saepe
          necessitatibus molestias libero optio fuga sapiente atque, fugiat,
          velit deleniti similique quasi cumque laborum ipsum tempora eaque
          consequatur? Laudantium provident soluta non quis cumque. Est quae
          unde recusandae sapiente nostrum!
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
      Clothes,
    };
  },
};
</script>

<style lang="scss">
.gg {
  color: $testing-variable;
}

#savemyworld {
  color: yellow;
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.guide {
  // background-image: url("~@/assets/img/guidebackgroundimg.jpg");
  background-size: contain, cover;
}

.imgsize {
  width: 200px;
  height: 200px;
  margin-top: 20px;
}

.background-transparent {
  background: rgba(160, 154, 154, 0.445);
  margin-left: 10px;
  border-radius: 25px;
}


//the following css is for the globe - quinn pls help transfer to scss
.position{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh; /*can change this height of height relative to the page later on */
  transform-style: preserve-3d;
}

.earth{
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); /*to adjust the position of the globe */
  width: 300px;  /*adjust the size of the globe here but in acordance to the the width and height of the image*/
  height: 300px;
  background: url('~@/assets/img/flatglobe.jpg');
  background-size:cover;
  background-repeat: repeat-x;
  border-radius: 50%;
  box-shadow: inset 0 0 20px rgba(0,0,0,1), 0 0 50px; //edit the shodow colour of the globe here
  animation: animateEarth 30s linear infinite; //rotation timing 
}

@keyframes animateEarth {
  0%{
    background-position: 0 0; 
  }
  100%{
    background-position: -750px 0; /*follow picture dimensions */
  }
  
}

.circle{
  transform-style: preserve-3d;
  animation: animateText 30s linear infinite;

}

.circle span{
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  // background: #fff;
  color: black; 
  font-size: 30px; 
  transform-origin: center;
  transform-style: preserve-3d;
  padding: 5px 11px;
  transform: rotateY(calc(var(--i) * calc(360deg/ 27 ))) translateZ(200px);
  border: 0px;
  // border-top: 2px solid grey;
  // border-bottom: 2px solid grey;
}

.transparent{
  opacity: 0.5;
}


@keyframes animateText {
  0%{
    transform: perspective(1000px) rotateY(360deg) rotateX(15deg) translateY(-30px);
  }
  100%{
    transform: perspective(1000px) rotateY(0deg) rotateX(15deg) translateY(-30px);
  }
}

</style>
