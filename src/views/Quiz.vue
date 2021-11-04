<template>
  <div class="quiz">
    <!-- <div class="card bg-transparent my-2">
      <div class="card-body">
        <Quizzes />
      </div>
    </div> -->
    <Quizzes />
    <Video />
    <News />
    
  </div>
</template>

<script>
// import Searchbar from "@/components/Quiz/Searchbar.vue";
// import Campaigns from "@/components/Quiz/Campaigns.vue";
import Quizzes from "@/components/Quiz/Quizzes.vue";
import Header from "@/components/Quiz/Header.vue";
import Video from "@/components/Quiz/Videos.vue";
import News from "@/components/Quiz/News.vue";

export default {
  name: "Community",
  components: {
    // Searchbar,
    // Campaigns,
    Quizzes,
    Header,
    Video,
    News,
  },
};
</script>

<style lang="scss" scoped>
</style>
