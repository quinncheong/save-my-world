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

    <section class="timeline  bg-success">
      <div class="disaster-content p-5 container-fluid bg-success w-100">
        <h1 class="mb-3">Top 10 disasters of all time</h1>
        <h6 class="mb-4">
          Natural disasters have persisted for a long time. It is only up to
          <span id="savemyworld">US</span> to mitigate the changes impact that
          such disasters brings as this could be avoided.
        </h6>

        <div class="timeline">
          <div class="timeline-component">
            <div class="timelinedate timelinedate-right">August 20</div>
          </div>
        </div>

        <div class="timelinemiddle">
          <div class="timelinepoint"></div>
        </div>
      </div>
    </section>
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
    display: grid;
    //  Make 2 equal columns then make a freaking bar  that is 3px
    grid-template-columns: 1fr 3px 1fr;
  }
  .timeline

  .timelinedate {
    margin: 0 20px 20px 20px;
  }

  .timelinemiddle {
    position: relative;
    background: white
  }

  .timelinepoint {
    position: absolute;
    top: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    background: red;
    border-radius: 100%;
  }
</style>
