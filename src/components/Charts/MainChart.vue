<template>
  <div class="small">
    <TempChart />
  </div>
</template>

<script>
import TempChart from "./TemperatureChart.vue";

export default {
  name: "MainChart",
  components: {
    TempChart,
  },
};
</script>

<style lang="scss" scoped>
// .small {
//   max-width: 600px;
//   margin: 150px auto;
// }
</style>
