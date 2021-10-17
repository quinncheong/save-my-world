<template>
  <!-- campaign cards -->
  <div class="container">
    <div class="row">
      <Campaign
        v-for="{ id, text, cost } in allCampaigns"
        :key="id"
        :text="text"
        :cost="cost"
      />
    </div>
  </div>
</template>

<script>
import Campaign from "./Campaign.vue";

export default {
  name: "Campaigns",
  components: {
    Campaign,
  },
  data() {
    return {
      allCampaigns: [
        {
          id: 1,
          text: "Hello this is a mock campaign",
          cost: 13000,
        },
        {
          id: 2,
          text: "Hello this is a mock campaign",
          cost: 13000,
        },
        {
          id: 3,
          text: "Hello this is a mock campaign",
          cost: 13000,
        },
        {
          id: 4,
          text: "Hello this is a mock campaign",
          cost: 13000,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
