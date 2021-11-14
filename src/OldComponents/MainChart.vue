<template>
  <div class="small">
    <AirPollutionChart />
    <TempChart />
  </div>
</template>

<script>
import TempChart from "../components/Charts/TemperatureChart.vue";
import AirPollutionChart from "../components/Charts/AirPollutionChart.vue";

export default {
  name: "MainChart",
  components: {
    TempChart,
    AirPollutionChart,
  },
};
</script>

<style lang="scss" scoped>
.small {
  display: flex;
  flex-direction: column;
}
</style>
