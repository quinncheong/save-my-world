<template>
  <div class="community">
    <!-- <Header /> -->
    <News />
    <Video />
    <h4><strong>Quiz Time</strong></h4>
    <p style="font-size: 15px"><i>Test your understanding by clicking on the "Start Quiz" button :)</i></p>
    <div class="card my-2">
      <div class="card-body bg-dark">
        <!-- <h5 class="card-title">Special title treatment</h5> -->
        <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
        <Quizzes />
      </div>
    </div>
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
.community {
  display: flex;
  flex-direction: column;
}

hr {
  border: solid 2px white;
}
</style>
