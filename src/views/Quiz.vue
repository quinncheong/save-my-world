<template>
  <div class="quiz-wrapper">
    <div v-if="!started">
      <div class="mb-3">
        <hr />
        <h4 class="mb-2"><strong>Quiz Time</strong></h4>
        <p class="mb-2" style="font-size: 15px">
          <i
            >Challenge yourself with our quiz! Answer all the questions to the
            best of your capabilities. May the force be with you.</i
          >
        </p>
        <button class="btn btn-light my-2" @click="startQuiz()">
          Start Quiz
        </button>
      </div>
      <hr />
      <News />
      <hr />
      <Video />
    </div>
    <!-- Only render the quiz if they click the start button -->
    <Quizzes :quizzes="quizzes" v-else />
  </div>
</template>

<script>
// import Searchbar from "@/components/Quiz/Searchbar.vue";
// import Campaigns from "@/components/Quiz/Campaigns.vue";
import Quizzes from "@/components/Quiz/Quizzes.vue";
import Header from "@/components/Quiz/Header.vue";
import Video from "@/components/Quiz/Videos.vue";
import News from "@/components/Quiz/News.vue";

import { getQuizzes } from "@/firebase.js";

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
  data() {
    return {
      quizzes: [],
      started: false,
    };
  },
  methods: {
    async startQuiz() {
      // Generate random id from 1-3 to get quiz
      const quizId = Math.floor(Math.random() * 3) + 1;
      const quizzes = await getQuizzes(quizId);
      this.quizzes = quizzes;
      this.started = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  font-size: $variable-font;
}
// display 70% width on desktop
@media screen and (min-width: 768px) {
  .quiz-wrapper {
    width: 90%;
  }
}

// display 70% width on large screen sizes
@media screen and (min-width: 992px) {
  .quiz-wrapper {
    width: 80%;
  }
}

// // display 70% width on extra large screen sizes
@media screen and (min-width: 1200px) {
  .quiz-wrapper {
    width: 60%;
  }
}
</style>
