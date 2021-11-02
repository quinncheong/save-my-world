<template>
  <div class="community">
    <Quizzes />
  </div>
</template>

<script>
// import Searchbar from "@/components/Community/Searchbar.vue";
// import Campaigns from "@/components/Community/Campaigns.vue";
import Quizzes from "@/components/Community/Quizzes.vue";

export default {
  name: "Community",
  components: {
    // Searchbar,
    // Campaigns,
    Quizzes,
  },
};
</script>

<style lang="scss" scoped>
.community {
  display: flex;
  flex-direction: column;
}

hr {
  border: solid 2px white;
}
</style>
