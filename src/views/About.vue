<template>
  <div class="community">
    <h1>Do what you can for the community</h1>
    <Searchbar />
    <Campaigns />
  </div>
</template>

<script>
import Searchbar from "@/components/Community/Searchbar.vue";
import Campaigns from "@/components/Community/Campaigns.vue";

export default {
  name: "Community",
  components: {
    Searchbar,
    Campaigns,
  },
};
</script>

<style lang="scss" scoped>
.community {
  display: flex;
  flex-direction: column;
}
</style>
