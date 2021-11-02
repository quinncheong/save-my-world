<template>
  <div class="community">
    <Header />
    <Video />
    <br>
    <Quizzes />
  </div>
</template>

<script>
// import Searchbar from "@/components/Quiz/Searchbar.vue";
// import Campaigns from "@/components/Quiz/Campaigns.vue";
import Quizzes from "@/components/Quiz/Quizzes.vue";
import Header from "@/components/Quiz/Header.vue";
import Video from "@/components/Quiz/Videos.vue";

export default {
  name: "Community",
  components: {
    // Searchbar,
    // Campaigns,
    Quizzes,
    Header,
    Video,
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
