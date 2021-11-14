<template>
  <section class="disaster-wrapper">
    <section class="disasterinfo">
      <div class="disaster-info-top bg-light text-dark">
        <div class="container">
          <header class="section-header">
            <h1 class="mb-3">Disasters</h1>
          </header>

          <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-12 text-start mt-3">
              <h6 class="textformat">
                Climate change affects global temperature and precipitation
                patterns. These are some of the listed effects:
              </h6>

              <!-- icon box -->

              <div
                class="text-center icon-box p-2 d-flex justify-content-start"
                v-for="(icon, disaster) in disasterShow"
                :key="disaster"
              >
                <div
                  class="icon p-2 border border-dark p-2 rounded-circle me-2"
                >
                  <!-- <font-awesome-icon icon="circle" ></font-awesome-icon> -->
                  <font-awesome-icon :icon="icon" size="md"></font-awesome-icon>
                </div>

                <p class="mt-2 ms-2 fw-bolder textformat">{{ disaster }}</p>
              </div>
            </div>

            <div class="col-lg-6 col-md-8 col-sm-12">
              <img
                src="@/assets/img/NaturalDisaster.webp"
                class="img-fluid w-100 mt-5"
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
              <span class="title">
                <a
                  href="https://www.smithsonianmag.com/history/the-great-japan-earthquake-of-1923-1764539/"
                  target="_blank"
                  >Great Kanto Earthquake</a
                ></span
              >
              <span>Nov 1923</span>
            </div>
            <img src="./greatkanto.jpg" class="img-fluid w-100 rounded" />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse1"
                role="button"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                Details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse1">
                This earthquake struck at 11:58 am (local time), reaching a
                magnitude of 8.2 on the Richter scale and leaving the capital
                Tokyo and the city of Yokohama in ruins. It also produced a
                tsunami with waves that reached 12 meters high and provoked
                fires that were caused by overturned cooking stoves in numerous
                homes combined with heavy winds.
              </p>
            </div>
          </section>
        </div>
        <!-- Second disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title"
                ><a
                  href="https://storymaps.arcgis.com/stories/4521fb4a742741fb811f4f7cb354113a"
                  target="_blank"
                  >Yangtze River Floods</a
                ></span
              >
              <span>July 1931</span>
            </div>
            <img src="./yangtzeflood.jpg" class="img-fluid w-100 rounded" />
            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse2"
                role="button"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse2">
                In the period between July and August 1931, China suffered
                excessive rainfall which, in conjunction with the spring
                snowmelt in the mountains, led to floods along the Yangtze River
                which led to what is considered to be the deadliest natural
                disaster in world history.
              </p>
            </div>
          </section>
        </div>

        <!-- https://www.livescience.com/33316-top-10-deadliest-natural-disasters.html -->

        <!-- Third disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title"
                ><a
                  href="https://public.wmo.int/en/media/news/world%E2%80%99s-deadliest-tropical-cyclone-was-50-years-ago"
                  target="_blank"
                  >Bhola Cyclone</a
                ></span
              >
              <span>Nov 1970</span>
            </div>

            <img src="./bholacyclone.jpg" class="img-fluid w-100 rounded" />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse3"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse3">
                In 1970, Bangladesh (at that time known as East Pakistan) was
                hit by the Bhola tropical cyclone. The wind speed, based on data
                by NOAA’s Hurricane Research Division, reached 205 km/h, making
                it the world’s deadliest tropical cyclone to date.
              </p>
            </div>
          </section>
        </div>
        <!-- fourth disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title"
                ><a
                  href="http://hurricanescience.net/history/storms/1970s/typhoonnina/"
                  target="_blank"
                  >Typhoon Nina-Banqiao</a
                ></span
              >
              <span>Aug 1975</span>
            </div>
            <img src="./typhoonnina.jpg" class="img-fluid w-100 rounded" />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse4"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse4">
                One of the most devastating floods in history occurred in
                central China as a result of the heavy rains brought by Typhoon
                Nina that poured down over a three-day period. The typhoon was
                followed by the Banqiao dam failure on the River Ru in the
                western Chinese province of Henan on August 8 and 61 dams and
                reservoirs failures in other regions.
              </p>
            </div>
          </section>
        </div>

        <!-- Fifth disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title"
                ><a
                  href="https://www.history.com/this-day-in-history/worst-modern-earthquake"
                  target="_blank"
                  >Tangshan Earthquake</a
                ></span
              >
              <span>July 1976</span>
            </div>
            <img
              src="./tangshanearthquake.jpg"
              class="img-fluid w-100 rounded"
            />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse5"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse5">
                The city of Tangshan in China, with a population of one million,
                suffered from an earthquake of 7.8 magnitude on the Richter
                scale on July 28 at 3:42 a.m. (Beijing time). Tangshan – the
                Chinese coal-mining and industrial metropolis – was almost
                destroyed and most of the fatalities were caused by the collapse
                of unreinforced masonry dwellings in which people were sleeping.
                It is considered to be the deadliest earthquake of the 20th
                century.
              </p>
            </div>
          </section>
        </div>
        <!-- Sixth disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title"
                ><a
                  href="https://www.history.com/topics/natural-disasters-and-environment/bangladesh-cyclone-of-1991"
                  target="_blank"
                  >Bangladesh Cyclone</a
                ></span
              >
              <span>April 1991</span>
            </div>
            <img
              src="./bangladeshcyclone.jpg"
              class="img-fluid w-100 rounded"
            />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse6"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse6">
                Considered to be one of the deadliest recorded tropical cyclones
                in history, this struck Chittagong, one of the most densely
                populated regions in Bangladesh with winds reaching a speed of
                up to 210 km/h. Due to a shortage of potable water and a lack of
                sanitation, the prevalence of diarrhea and dysentery rocketed
                with as many as 2,000 deaths reported in the first three weeks
                after the cyclone had hit.
              </p>
            </div>
          </section>
        </div>

        <!-- Seven disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title"
                ><a
                  href="https://www.history.com/news/deadliest-tsunami-2004-indian-ocean"
                  target="_blank"
                  >Indian Ocean Earthquake</a
                ></span
              >
              <span>Dec 2004</span>
            </div>
            <img src="./indianocean.jpg" class="img-fluid w-100 rounded" />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse7"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse7">
                A disastrous earthquake with a magnitude of 9.1 on the Richter
                scale just off the west coast of Sumatra in Indonesia in the
                Indian Ocean, provoked a massive tsunami that struck 12
                countries in South Asia and East Africa, traveling at a speed of
                around 800 km/h and generating waves as high as 30 meters. Due
                to its speed, people had little time to escape the dangerous
                regions.
              </p>
            </div>
          </section>
        </div>
        <!-- Eight disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title"
                ><a
                  href="https://www.bbc.com/news/world-asia-34464815"
                  target="_blank"
                  >Kashmir Earthquake</a
                ></span
              >
              <span>Oct 2005</span>
            </div>
            <img
              src="./kashmirearthquake.jpg"
              class="img-fluid w-100 rounded"
            />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse8"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse8">
                This disastrous earthquake struck at 8:50 am (local time) with a
                registered magnitude of 7.6 points on the Richter scale. The
                most affected regions were Kashmir and the North-West Frontier
                Province (called Khyber Pakhtunkhwa after 2010) in Pakistan and
                nearby regions in India and Afghanistan.
              </p>
            </div>
          </section>
        </div>

        <!-- Nineth disaster -->
        <div class="bubble bubble-1">
          <section>
            <div class="icon"></div>
            <div class="details">
              <span class="title"
                ><a
                  href="http://www.hurricanescience.org/history/storms/2000s/cyclonenargis/"
                  target="_blank"
                  >Cyclone Nargis</a
                ></span
              >
              <span>May 2008</span>
            </div>
            <img src="./cyclonenargis.jpg" class="img-fluid w-100 rounded" />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse9"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse9">
                This category 3 cyclone had a serious impact on Myanmar
                including its largest city Yangon and was also responsible for
                landfall in the Ayeyarwady Division. The ecology of the
                Ayeyarwady and Yangon Divisions, regions where local livelihoods
                are strongly dependent on natural resources, was devastated by
                Nargis.
              </p>
            </div>
          </section>
        </div>
        <!-- Tenth disaster -->
        <div class="bubble bubble-2">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Haiti Earthquake</span>
              <span>Jan 2010</span>
            </div>
            <img src="./haitiearthquake.jpg" class="img-fluid w-100 rounded" />

            <div class="bottom text-start mt-2">
              <a
                data-bs-toggle="collapse"
                href="#collapse10"
                role="button"
                aria-expanded="false"
                aria-controls="collapse"
              >
                More details
              </a>
              <!-- https://devastatingdisasters.com/aleppo-earthquake-syria-1138-ad/ -->

              <p class="text-start collapse" id="collapse10">
                One of the deadliest earthquakes ever registered struck the
                small island country of Haiti in January 2010. With a magnitude
                of 7.0 on the Richter scale and with the epicenter being 25 km
                from the capital Port-au-Prince and as one of the world’s
                poorest countries with a limited history of such high magnitude
                earthquakes, structures that were being earthquake resistant and
                a high population density, the disaster left Haiti facing high
                levels of damage, deaths, and casualties.
              </p>
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
* {
  font-size: $variable-font;
}
html {
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
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  background: rgb(76, 191, 48);
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

// .bubble section .bottom,
.bubble section .details {
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

@media (max-width: 900px) {
  .timeline .center-line {
    left: 20px;
  }
  .timeline .bubble {
    margin: 30px 0 3px 60px;
  }

  .timeline .bubble section {
    width: 100%;
  }

  .bubble-1 section::before {
    left: -7px;
  }

  .bubble-1 section .icon {
    left: -60px;
  }

  .bubble-1 section .icon {
    left: -60px;
  }
}

@media (max-width: 500px) {
  .timeline .center-line,
  .timeline section::before,
  .timeline section .icon {
    display: none;
  }

  .timeline .bubble,
  .timeline .collapse {
    margin: 10px 0;
    font-size: 14px;
    text-align: start;
  }

  .details {
    display: flex;
    flex-direction: column;
  }
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
