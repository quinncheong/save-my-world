<template>
  <div class="container-fluid">
    <!-- This would be where the globe would be  -->
    <div class="row mt-3" id="login">
      <div class="col">
        <!-- <img src="@/assets/img/globe.png" alt="searchicon" /> -->
        <!-- <div class="row-4">
        </div> -->
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


      </div>
      <!-- Login section -->

      <!-- Tile of login  -->
      <div class="col"> <!--removed class text-star idk what's star-->
        <div class="row">
          <div class="col">
            <h1 class="mt-3 text-center">
              You have the power to <span id="savemyworld">#SaveOurWorld</span>
            </h1>
            <br>
            <hr>
            <br>

            <div class="col text-start">
              <h4>Towards a Net-Zero Future: </h4>
              <br>
              <h6>
                According to United Nations, to preserve a livable climate, greenhouse-gas emissions must be reduced to net zero by 2050. 
                Bold, fast, and wide-ranging action needs to be taken by governments and businesses. 
                But the transition to a low-carbon world also <span id="savemyworld" >requires</span> the <span id="savemyworld">participation of citizens</span> – especially in advanced economies.
                
                <br>
                <br>
                Hence, play your part in limiting the effects of global warming and take care of our planet. <span id="savemyworld">Make the right choices today.</span> You can be part of the solution and influence change. 
              </h6>
              <br>
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

      <div class="guide-wrapper">
        <h1 class="guide-header">How You Can Play Your Part</h1>
      </div>

      <br>
      <br>
      <br>
      <p>Climate change will affect all of us, whether directly or indirectly. Everyone—as individuals, as employees, as members of a family and as a wider community—has a stake in helping to reduce our emissions and in preparing for the effects of climate change.</p>
    </div> 


    <div class='row bg-light' style='color:black'> <!--Use mx-auto d-block for centering--> 
      <!-- <section class="reduce bg-light"> -->
      <!-- <div class="container text-center"> -->

        <!--for the image--> 
        <div class='col-6'>
            <img class="imgsize " src="@/assets/img/planetearth.png" />
        </div>

      <!--for the text-->
      <div class='col-6 fullwidth'>
        <div class="grid-2">
          <div class="center">
          </div>
          <div>
            <br>
            <h3>REDUCE</h3>
            <p>
              The best way to manage waste is to not produce it. This can be done by shopping carefully and being aware of a few guidelines: 
            </p>
            <ul class="mt-4 wrap">
              <li><i class="fa fa-rocket" aria-hidden="true">
                
                </i>Flyby spacecraft</li>
              <li><i class="fa fa-rocket" aria-hidden="true"></i>Orbiter spacecraft</li>
              <li><i class="fa fa-rocket" aria-hidden="true"></i>Atmospheric spacecraft</li>
              <li><i class="fa fa-rocket" aria-hidden="true"></i>Lander spacecraft</li>
              <li><i class="fa fa-rocket" aria-hidden="true"></i>Rover spacecraft</li>
              <li><i class="fa fa-rocket" aria-hidden="true"></i>Penetrator spacecraft</li>
              <li><i class="fa fa-rocket" aria-hidden="true"></i>Observatory spacecraft</li>
              <li><i class="fa fa-rocket" aria-hidden="true"></i>Communications spacecraft</li>
            </ul>
          </div>
        </div>
        </div>

        
      <!-- </div> -->
    <!-- </section> -->
    </div>


    
    <div class='row '>
      <!-- <section class="reduce bg-light"> -->
      <!-- <div class="container text-center"> -->
        <img class="imgsize" src="@/assets/img/clothes.png" />
        <div class="grid-2">
          <div class="center">
          </div>
          <div>
            <br>
            <h3>REUSE</h3>
            <p>
              It makes economic and environmental sense to reuse products. Sometimes it takes creativity: 
            </p>
          </div>
        </div>
      <!-- </div> -->
    <!-- </section> -->
    </div>


    <div class='row bg-light ' style='color:black'>
      <!-- <section class="reduce bg-light"> -->
      <!-- <div class="container text-center"> -->
        <img class="imgsize" src="@/assets/img/recyclingbin.png" />
        <div class="grid-2">
          <!-- <div class="center"> 
          </div> -->
          <div>
            <br>
            <h3>RECYCLE</h3>
            <br>
            <p>
              Recycling is a series of steps that takes a used material and processes, remanufactures, and sells it as a new product. Begin recycling at home and at work:
            </p>
          </div>
        </div>
      <!-- </div> -->
    <!-- </section> -->
    </div>



    </div>
  <!-- </div> -->
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
// .fullwidth {
//   // width: 100vw !important;
// }

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


//for the guide section 
.guide-wrapper {
  position: relative;
  width: 100%;

  .guide-header{
    text-align: center;
    font-size: $variable-font;

    @media screen and (min-width: 768px ) {
      font-size: $variable-font-large;
    }

    &:before,
    &:after {
      background-color: white;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 20%;
    }

    &:before {
      margin-right: 20px;
      // right: 0.5em;
      // margin-left: -50%;
    }

    &:after {
      margin-left: 20px;
      // left: 0.5em;
      // margin-right: -50%;
    }
  }
  
}


// #guideMe:before,
// #guideMe:after {
//   background-color: white;
//   content: "";
//   display: inline-block;
//   height: 1px;
//   position: relative;
//   vertical-align: middle;
//   width: 50%;
// }

// #guideMe:before {
//   right: 0.5em;
//   margin-left: -50%;
// }

// #guideMe:after {
//   left: 0.5em;
//   margin-right: -50%;
// }


//for the rows below 

.container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 4rem 1rem;
}

// .grid-3 {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr; 
//   grid-gap: 20px;
// }

// .grid-2 {
//   display: grid;
//   grid-gap: 20px;
//   grid-template-columns: repeat(2, 1fr);
// }

.text-center {
  text-align: center;
  margin: auto;
}

.bg-light {
  background: #fff;
  color: #333;
}

</style>
