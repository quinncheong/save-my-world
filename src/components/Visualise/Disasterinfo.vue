<template>
  <section class="disaster-wrapper">
    <section class="disasterinfo">
      <div class="disaster-info-top bg-light text-dark">
        <div class="container">
          <header class="section-header">
            <h3>Disasters</h3>
          </header>

          <div class="row">
            <div class="col-lg-6 text-start mt-3">
              <h6 class="textformat">
                Climate change affects global temperature and precipitation
                patterns. These are some of the listed effects:
              </h6>

              <!-- icon box -->

              <div
                class="icon-box p-2 d-flex justify-content-start"
                v-for="(icon, disaster) in disasterShow"
                :key="disaster"
              >
                <div class="icon p-2border border-dark p-2 rounded-circle me-2">
                  <!-- <font-awesome-icon icon="circle" ></font-awesome-icon> -->
                  <font-awesome-icon :icon="icon" size="lg"></font-awesome-icon>
                </div>

                <p class="mt-2 ms-2 fw-bolder textformat">{{ disaster }}</p>
              </div>
            </div>

            <div class="col">
              <img
                src="@/assets/img/NaturalDisaster.webp"
                class="img-fluid mt-5"
              />
            </div>
          </div>
        </div>

        <!-- <div class="row">
          <p class="col-md-12 mt-3 text-center fs-5">
            Climate change affects global temperature and precipitation
            patterns. These are some of the listed effects: 1) Forest fires 2)
            hurricanes 3) Heat waves 4) Floods 5) Droughts 6) Storms
          </p>
        </div> -->

        <!-- Top 5 disasters of all time (Time line perhaps) -->
      </div>
    </section>

    <!-- Top disasters occurence -->
  </section>
  <section class="timeline-section bg-success" name="timeline-section">
    <div class="disaster-content p-5 container-fluid bg-success w-100">
      <h1 class="mb-3">Top 10 disasters of all time</h1>
      <h6 class="mb-4">
        Natural disasters have persisted for a long time. It is only up to
        <span id="savemyworld">US</span> to mitigate the changes impact that
        such disasters brings as this could be avoided.
      </h6>
      <!-- Timeline starts here  -->
      <div class="timeline" id="start_timeline">
        <div class="center-line">
          <!-- Redirect to first when clicked -->
          <a href="#timeline-section" class="scroll-icon">
            <font-awesome-icon icon="caret-up"></font-awesome-icon>
          </a>
        </div>
        <!-- Individual disaster -->

        <!-- First disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <!-- Second disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>

        <!-- Third disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <!-- fourth disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>

        <!-- Fifth disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <!-- Sixth disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>

        <!-- Seven disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <!-- Eight disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>

        <!-- Nineth disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <!-- Tenth disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Disasterinfo",

  data() {
    return {
      disasterShow: {
        "Forest fires": "fire",
        Hurricanes: "wind",
        "Heat waves": "temperature-high",
        Floods: "water",
        Droughts: "tint-slash",
        Storms: "poo-storm",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

html{
  scroll-behavior: smooth;
}
.disaster-wrapper {
  font-size: $variable-font-small;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .disaster-info-top {
    padding: 1rem;
    border-radius: 10px;
  }

  .textformat {
    font-size: 20px;
  }

  .icon {
    border-radius: 100%;
    justify-content: center;
  }
}

.timeline {
  position: relative;
}

.timeline .bubble {
  display: flex;
  justify-content: flex-start;
}

.timeline .bubble section {
  background: rgb(76, 191, 48);
  width: calc(50% - 40px);
  padding: 20px;
  position: relative;
}

.timeline .bubble section::before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: white;
  top: 28px;
  transform: rotate(45deg);
  z-index: 1;
}

.bubble section .icon,
.center-line .scroll-icon {
  position: absolute;
  background: green;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  line-height: 40px;
  box-shadow: 0 0 0 4px #fff, inset 0 2px rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

// Push caret icon down to the last one
.center-line .scroll-icon {
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  font-size: 25px;
}

.bubble-1 section .icon {
  right: -60px;
  top: 13px;
}

.bubble-2 section .icon {
  left: -60px;
  top: 13px;
}

.bubble-1 section::before {
  right: -7px;
}

.bubble-2 section::before {
  left: -7px;
}

.timeline .center-line {
  position: absolute;
  height: 100%;
  width: 4px;
  background: white;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
}

.timeline .bubble-1 {
  justify-content: flex-start;
}

.timeline .bubble-2 {
  justify-content: flex-end;
}

.bubble section .details,
.bubble section .bottom {
  display: flex;
  justify-content: space-between;
}

.bubble section .details .title {
  font-size: 22px;
  font-weight: 600;
}

.bubble section p {
  margin: 10px 0 17px 0;
}

.row section .bottom a {
  text-decoration: none;
  color: green;
  padding: 7px;
}



// .timeline {
//   display: grid;
//   //  Make 2 equal columns then make a freaking bar  that is 3px
//   grid-template-columns: 1fr 3px 1fr;
// }
// .timeline .timelinedate {
//   margin: 0 20px 20px 20px;
// }

// .timelinemiddle {
//   position: relative;
//   background: white;
// }

// .timelinepoint {
//   position: absolute;
//   top: 0;
//   left: 50%;
//   width: 15px;
//   height: 15px;
//   background: red;
//   border-radius: 100%;
//   transform: translateX(-50%);
// }

// .time-component-bg {
//   padding: 1.5em;
//   margin: 15px;
//   background: rgba(255, 255, 255, 0.2);
//   box-shadow: 0 0 5px rg ba (0, 0, 0, 0.2);
//   border-radius: 10px;
// }

// .timeline-title {
//   margin: 0;
//   font-size: 1.15em;
//   font-weight: bold;
// }
// .timeline-paragraph {
//   line-height: 1.5;
// }

// @media screen and (min-width: 768px) {
//   .timeline {
//     width: 100%;
//   }
// }

// @media screen and (min-width: 968px) {
//   .timeline {
//     width: 80%;
//   }
// }

// @media screen and (min-width: 1268px) {
//   .timeline {
//     width: 70%;
//   }
// }
</style>
