<template>
  <div class="container-fluid">
    <!-- This would be where the globe would be  -->
    <div class="row mt-3" id="login">
      <div class="col">
        <!-- <img src="@/assets/img/globe.png" alt="searchicon" /> -->
        <!-- <div class="row-4">
        </div> -->
        <div class="row-4 position">
          <!--to include breakpoint later on-->
          <div class="earth"></div>
          <div class="circle">
            <!--This is for a rotating text-->
            <span style="--i: 1">#</span>
            <span style="--i: 2">S</span>
            <span style="--i: 3">A</span>
            <span style="--i: 4">V</span>
            <span style="--i: 5">E</span>
            <span style="--i: 6">O</span>
            <span style="--i: 7">U</span>
            <span style="--i: 8">R</span>
            <span style="--i: 9">W</span>
            <span style="--i: 10">O</span>
            <span style="--i: 11">R</span>
            <span style="--i: 12">L</span>
            <span style="--i: 13">D</span>
            <span style="--i: 14">#</span>
            <span style="--i: 15">S</span>
            <span style="--i: 16">A</span>
            <span style="--i: 17">V</span>
            <span style="--i: 18">E</span>
            <span style="--i: 19">O</span>
            <span style="--i: 20">U</span>
            <span style="--i: 21">R</span>
            <span style="--i: 22">W</span>
            <span style="--i: 23">O</span>
            <span style="--i: 24">R</span>
            <span style="--i: 25">L</span>
            <span style="--i: 26">D</span>
          </div>
        </div>
      </div>
      <!-- Login section -->

      <!-- Tile of login  -->
      <div class="col">
        <!--removed class text-star idk what's star-->
        <div class="row">
          <div class="col">
            <h1 class="mt-3 text-center">
              You have the power to <span id="savemyworld">#SaveOurWorld</span>
            </h1>
            <br />
            <hr />
            <br />

            <div class="col text-start">
              <h4>Towards a Net-Zero Future:</h4>
              <br />
              <h6>
                According to United Nations, to preserve a livable climate,
                greenhouse-gas emissions must be reduced to net zero by 2050.
                Bold, fast, and wide-ranging action needs to be taken by
                governments and businesses. But the transition to a low-carbon
                world also <span id="savemyworld">requires</span> the
                <span id="savemyworld">participation of citizens</span> –
                especially in advanced economies.

                <br />
                <br />
                Hence, play your part in limiting the effects of global warming
                and take care of our planet.
                <span id="savemyworld">Make the right choices today.</span> You
                can be part of the solution and influence change.
              </h6>
              <br />
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

      <br />
      <br />
      <br />
      <p>
        Climate change will affect all of us, whether directly or indirectly.
        Everyone—as individuals, as employees, as members of a family and as a
        wider community—has a stake in helping to reduce our emissions and in
        preparing for the effects of climate change.
      </p>
    </div>

    <!-- Tabs navs -->

    <ul class="main">
      <!--Reduce-->
      <li>
        <input type="radio" name="tab" id="label-1" checked />
        <label for="label-1">Reduce</label>
        <div class="content">
          <h1 class="heading">Reduce</h1>
          <br />
          <div class="container listing">
            <div class="row">
              <!--for the image-->
              <div class="col-3">
                <img class="imgsize" src="@/assets/img/planetearth.png" />
              </div>

              <!--vertical line-->
              <div class="col-1 vl"></div>

              <!--for the text-->
              <div class="col-8">
                <p class="p-tag-left">
                  The best way to manage waste is to not produce it. This can be
                  done by shopping carefully and being aware of a few
                  guidelines:
                </p>

                <br />

                <ul>
                  <li>
                    Buy products in bulk. Larger, economy-size products or ones
                    in concentrated form use less packaging and usually cost
                    less per ounce.
                  </li>
                  <li>
                    Avoid disposable goods, such as paper plates, cups, napkins,
                    razors, and lighters. Throwaways contribute to the problem,
                    and cost more because they must be replaced again and again.
                  </li>
                  <li>
                    Buy durable goods – ones that are well-built or that carry
                    good warranties. They will last longer, save money in the
                    long run and save landfill space.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>

      <!--Reuse-->

      <li>
        <input type="radio" name="tab" id="label-2" />
        <label for="label-2">Reuse</label>
        <div class="content">
          <h1 class="heading">Reuse</h1>
          <br />
          <div class="container listing">
            <div class="row">
              <!--for the picture-->
              <div class="col-3">
                <img class="imgsize" src="@/assets/img/clothes.png" />
              </div>
              <!--for the vertical line-->
              <div class="col-1 vl"></div>
              <!--for the text-->
              <div class="col-8">
                <p class="p-tag-left">
                  It makes economic and environmental sense to reuse products.
                  Sometimes it takes creativity:
                </p>

                <br>

                <ul class='list'>
                  <li>
                    Avoid disposable goods, such as paper plates, cups, napkins,
                    razors, and lighters. Throwaways contribute to the problem,
                    and cost more because they must be replaced again and again.
                  </li>
                  <li>
                    Buy durable goods – ones that are well-built or that carry
                    good warranties. They will last longer, save money in the
                    long run and save landfill space.
                  </li>
                  <li>Use cloth napkins instead of paper napkins.</li>
                  <li>Use a dish cloth instead of paper towels.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>

      <!--Recycle-->
      <li>
        <input type="radio" name="tab" id="label-3" />
        <label for="label-3">Recycle</label>
        <div class="content">
          <h1 class="heading">Recycle</h1>
          <br />
          <div class="container listing">
            <div class="row">
              <div class="col-3">
                <img
                  class="imgsize mx-auto d-block"
                  src="@/assets/img/recyclingbin.png"
                />
              </div>
              <div class="col-1 vl"></div>
              <div class="col-8">
                <p class="p-tag-left">
                  Recycling is a series of steps that takes a used material and
                  processes, remanufactures, and sells it as a new product.
                  Begin recycling at home and at work:
                </p>
                <br />

                <ul>
                  <li>
                    Buy products made from recycled material. Look for the
                    recycling symbol or ask store managers or salesmen
                  </li>
                  <li>
                    Check collection centers and curbside pickup services to see
                    what they accept, and begin collecting those materials.
                    These can include metal cans, newspapers, paper products,
                    glass, plastics and oil.
                  </li>
                  <li>
                    Consider purchasing recycled materials at work when
                    purchasing material for office supply, office equipment or
                    manufacturing.
                  </li>
                  <li>
                    Buy products made from material that is collected for
                    recycling in your community.
                  </li>
                  <li>
                    Use recycled paper for letterhead, copier paper and
                    newsletters.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- Tabs navs -->

    <!-- Tabs content -->
    <!-- <div class="tab-content" id="ex2-content">
      <div
        class="tab-pane fade show active"
        id="ex3-tabs-1"
        role="tabpanel"
        aria-labelledby="ex3-tab-1"
      >
        Tab 1 content
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-2"
        role="tabpanel"
        aria-labelledby="ex3-tab-2"
      >
        Tab 2 content
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-3"
        role="tabpanel"
        aria-labelledby="ex3-tab-3"
      >
        Tab 3 content
      </div>
    </div> -->
    <!-- Tabs content -->

    <!-- <div class="row bg-light" style="color: black"> -->
      <!--Use mx-auto d-block for centering-->
      <!-- <section class="reduce bg-light"> -->
      <!-- <div class="container text-center"> -->

      <!--for the image-->
      <!-- <div class="col-6">
        <img class="imgsize" src="@/assets/img/planetearth.png" />
      </div> -->

      <!--for the text-->
      <!-- <div class="col-6 fullwidth">
        <div class="grid-2">
          <div class="center"></div>
          <div>
            <br />
            <h3 class="heading">REDUCE</h3>
            <br />
            <p class="p-tag-left">
              The best way to manage waste is to not produce it. This can be
              done by shopping carefully and being aware of a few guidelines:
            </p>
            <br />

            <ul>
              <li>
                Buy products in bulk. Larger, economy-size products or ones in
                concentrated form use less packaging and usually cost less per
                ounce.
              </li>
              <li>
                Avoid disposable goods, such as paper plates, cups, napkins,
                razors, and lighters. Throwaways contribute to the problem, and
                cost more because they must be replaced again and again.
              </li>
              <li>
                Buy durable goods – ones that are well-built or that carry good
                warranties. They will last longer, save money in the long run
                and save landfill space.
              </li>
            </ul>
          </div>
        </div>
      </div> -->

      <!-- </div> -->
      <!-- </section> -->
    <!-- </div> -->

    <div class="row">
      <!-- <section class="reduce bg-light"> -->
      <!-- <div class="container text-center"> -->
      <!-- <div class="col-6">
        <img class="imgsize" src="@/assets/img/clothes.png" />
      </div> -->

      <!-- <div class="col-6">
        <div class="grid-2">
          <div class="center"></div>
          <div>
            <br />
            <h3 class="heading">REUSE</h3>
            <br />
            <p class="p-tag-left">
              It makes economic and environmental sense to reuse products.
              Sometimes it takes creativity:
            </p>
            <br />

            <ul>
              <li>
                Avoid disposable goods, such as paper plates, cups, napkins,
                razors, and lighters. Throwaways contribute to the problem, and
                cost more because they must be replaced again and again.
              </li>
              <li>
                Buy durable goods – ones that are well-built or that carry good
                warranties. They will last longer, save money in the long run
                and save landfill space.
              </li>
              <li>Use cloth napkins instead of paper napkins.</li>
              <li>Use a dish cloth instead of paper towels.</li>
            </ul>
          </div>
        </div>
      </div> -->
      <!-- </div> -->
      <!-- </section> -->
    </div>

    <!-- <div class="row bg-light" style="color: black"> -->
      <!-- <section class="reduce bg-light"> -->
      <!-- <div class="container text-center"> -->
      <!-- <div class="col-6">
        <img
          class="imgsize mx-auto d-block"
          src="@/assets/img/recyclingbin.png"
        />
      </div> -->

      <!-- <div class="grid-2"> -->
      <!-- <div class="center"> 
          </div> -->
      <!-- <div class="col-6">
        <br />
        <h3 class="heading">RECYCLE</h3>
        <br />
        <p class="p-tag-left">
          Recycling is a series of steps that takes a used material and
          processes, remanufactures, and sells it as a new product. Begin
          recycling at home and at work:
        </p>
        <br />

        <ul class='list-style'>
          <li>
            Buy products made from recycled material. Look for the recycling
            symbol or ask store managers or salesmen
          </li>
          <li>
            Check collection centers and curbside pickup services to see what
            they accept, and begin collecting those materials. These can include
            metal cans, newspapers, paper products, glass, plastics and oil.
          </li>
          <li>
            Consider purchasing recycled materials at work when purchasing
            material for office supply, office equipment or manufacturing.
          </li>
          <li>
            Buy products made from material that is collected for recycling in
            your community.
          </li>
          <li>
            Use recycled paper for letterhead, copier paper and newsletters.
          </li>
        </ul>
      </div> -->
      <!-- </div> -->
      <!-- </div> -->
      <!-- </section> -->
    <!-- </div> -->
    <br />
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
.position {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh; /*can change this height of height relative to the page later on */
  transform-style: preserve-3d;
}

.earth {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /*to adjust the position of the globe */
  width: 300px; /*adjust the size of the globe here but in acordance to the the width and height of the image*/
  height: 300px;
  background: url("~@/assets/img/flatglobe.jpg");
  background-size: cover;
  background-repeat: repeat-x;
  border-radius: 50%;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 1), 0 0 50px; //edit the shodow colour of the globe here
  animation: animateEarth 30s linear infinite; //rotation timing
}

@keyframes animateEarth {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -750px 0; /*follow picture dimensions */
  }
}

.circle {
  transform-style: preserve-3d;
  animation: animateText 30s linear infinite;
}

.circle span {
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
  transform: rotateY(calc(var(--i) * calc(360deg / 27))) translateZ(200px);
  border: 0px;
  // border-top: 2px solid grey;
  // border-bottom: 2px solid grey;
}

.transparent {
  opacity: 0.5;
}

@keyframes animateText {
  0% {
    transform: perspective(1000px) rotateY(360deg) rotateX(15deg)
      translateY(-30px);
  }
  100% {
    transform: perspective(1000px) rotateY(0deg) rotateX(15deg)
      translateY(-30px);
  }
}

//for the guide section
.guide-wrapper {
  position: relative;
  width: 100%;

  .guide-header {
    text-align: center;
    font-size: $variable-font;
    @media screen and (min-width: 768px) {
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

// .container {
//   max-width: 960px;
//   margin: auto;
//   overflow: hidden;
//   padding: 4rem 1rem;
// }

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

// .text-center {
//   text-align: center;
//   margin: auto;
// }

// .bg-light {
//   background: #fff;
//   color: #333;
// }

.listing ul {
  list-style-type: '✽';
  text-align: left;
  font-size: $variable-font-small;

}

ul.list-style{
  list-style-type: '✽';
  color: green;
}

.p-tag-left {
  text-align: left;
  font-weight: bold;
}

.heading {

  font-weight: 900;
  color: green;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: white;
  --stroke-color: lightblue;

  text-shadow: var(--x-offset) var(--y-offset) 0px var(--background-color),
    calc(var(--x-offset) - var(--stroke)) calc(var(--y-offset) + var(--stroke))
      0px var(--stroke-color);
}

//for the vertical line

.vl {
  border-left: 3px solid green;
  height: 500px;
}

//for the nav tab
.main {
  // box-sizing: border-box;
  width: auto;
  height: auto;
  position: relative;
  display: block;
}

.main li {
  display: inline-block;
  background-color: black;
}

.content {
  background: black;
  color: white;
  position: absolute;
  left: 0;
  display: none;
  padding: 30px;
}

.content > p {
  font-size: 1em;
  font-weight: 300;
  margin: 10px;
}

.main [id^="label"]:checked ~ .content {
  display: block;
}

.main input[type="radio"] {
  display: none;
}

.main label {
  padding: 20px 30px;
}

.main[id^="label"]:checked + label {
  background-color: black;
  color: green;
}
</style>
