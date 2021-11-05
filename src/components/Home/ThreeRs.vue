<template>
  <!--bootstrap tabs bars-->
  <div class="row mt-2">
    <ul class="nav nav-tabs justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#reduce"
          >Reduce</a
        >
      </li>

      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#reuse">Reuse</a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          data-bs-toggle="tab"
          href="#recycle"
          aria-current="page"
          >Recycle
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-recycle"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"
            /></svg
        ></a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active" id="reduce">
        <div class="row border g-0 rounded shadow">
          <div class="col p-4">
            <h3>Reduce</h3>

            <div class="row">
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

                <ul class="listing">
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
          <!-- <div class="col"></div> -->
        </div>
      </div>

      <div class="tab-pane active" id="reuse">
        <div class="row border g-0 rounded shadow">
          <div class="col p-4">
            <h3>Reuse</h3>

            <div class="row">
              <div class="col-3">
                <img class="imgsize" src="@/assets/img/clothes.png" />
              </div>

              <!--vertical line-->
              <div class="col-1 vl"></div>

              <!--for the text-->
              <div class="col-8">
                <p class="p-tag-left">
                  It makes economic and environmental sense to reuse products.
                  Sometimes it takes creativity:
                </p>

                <br />

                <ul class="listing">
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
          <!-- <div class="col"></div> -->
        </div>
      </div>

      <!--recycle-->
      <div class="tab-pane active" id="recycle">
        <div class="row border g-0 rounded shadow">
          <div class="col p-4">
            <h3>Recycle</h3>
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

                <ul class="listing">
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
          <!-- <div class="col"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeRs",
};
</script>

<style lang="scss" scoped>
//for the css navigation tab

ul.listing {
  list-style-type: "✽  ";
  text-align: left;
  font-size: $variable-font-small;
}

ul.list-style {
  // list-style-type: "✽";
  color: green;
}

.p-tag-left {
  text-align: left;
  font-weight: bold;
}

// .heading {
//   font-weight: 900;
//   color: green;

//   --x-offset: -0.0625em;
//   --y-offset: 0.0625em;
//   --stroke: 0.025em;
//   --background-color: white;
//   --stroke-color: lightblue;

//   text-shadow: var(--x-offset) var(--y-offset) 0px var(--background-color),
//     calc(var(--x-offset) - var(--stroke)) calc(var(--y-offset) + var(--stroke))
//       0px var(--stroke-color);
// }
</style>
