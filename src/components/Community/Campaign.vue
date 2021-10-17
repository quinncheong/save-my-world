<template>
<div class="col-sm-3">
  <div class="card">
    <!-- image of the campaign -->
    <img
      class="card-img-top"
      src="@/assets/img/tree.png"
      alt="Card image cap"
    />
    <div class="card-body">
      <!-- amount that the campaign has raised so far -->
      <p>${{ cost }}</p>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 25%"
          aria-valuenow=""
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <br />
      <!-- description for the campaigns -->
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <br />
      <a href="#" class="btn btn-dark">Donate</a>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Campaign",
  props: ["cost", "text"],
};
</script>

<style lang="scss" scoped>
.card-body {
  color: black;
  text-align: left;
}

.progress-bar {
  background-color: #93ee93;
}
</style>
