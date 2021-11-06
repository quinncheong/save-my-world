<template>
  <section class="disaster-wrapper">
    <div class="disaster-info-top bg-light text-dark">
        <h1 class="display-5 text-start fw-bold">Disasters</h1>

        <div class="row">
        <p class="col-md-8 mt-3 text-start fs-5">
          Climate change affects global temperature and precipitation patterns.
          These effects, in turn, influence the intensity and, in some cases,
          the frequency of extreme environmental events, such as forest fires,
          hurricanes, heat waves, floods, droughts, and storms.
        </p>

        <p class='col-md-4 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero.</p>

        </div>
    </div>

    <div class="disaster-content p-5 container-fluid bg-success w-100">
      <h1 class="mb-3">Reduce impact of disasters</h1>
      <h6 class="mb-4">
        Here are ways where <span id="savemyworld">YOU</span> can reduce the effects of natural disasters
         
      </h6>

      <h6 class="mb-2">
        Hence, play your part in limiting the effects of global warming and take
        care of our planet.
        <span id="savemyworld">Make the right choices today.</span> You can be
        part of the solution and influence change.
      </h6>
    </div>
  </section>
</template>

<script>
export default {
  name: "Disasterinfo",
};
</script>

<style lang="scss" scoped>
.disaster-wrapper{
  font-size: $variable-font-small;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .disaster-info-top{
    padding: 1rem;
    border-radius: 10px;
  }
}
</style>
