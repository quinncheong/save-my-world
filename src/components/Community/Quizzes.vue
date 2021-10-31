<template>
  <div>
    <div v-if="started">
      <flow-form class="mt-2" v-bind:questions="questions" />
    </div>
    <div v-else>
      <button class="btn btn-success" @click="startQuiz()">
        Start Quiz
      </button>
    </div>
  </div>
</template>

<script>
// Import necessary components and classes
import {
  FlowForm,
  QuestionModel,
  QuestionType,
  ChoiceOption,
} from "@ditdot-dev/vue-flow-form";
import { getQuizzes } from "@/firebase.js";

export default {
  name: "Quizzes",
  components: {
    FlowForm,
  },
  data() {
    return {
      questions: [
        // QuestionModel array
        new QuestionModel({
          title: "Question",
          type: QuestionType.MultipleChoice,
          options: [
            new ChoiceOption({
              label: "Answer",
            }),
            new ChoiceOption({
              label: "no",
            }),
          ],
        }),
      ],
      started: false,
    };
  },
  methods: {
    async startQuiz() {
      const quizzes = await getQuizzes();
      this.quiz = quizzes;


      this.started = true
    },
  },
  //   computed: {
  //       quiz(){
  //           for(i=0; i<response.length; i++){
  //               new QuestionModel({
  //                 title: response.,
  //                 type: QuestionType.MultipleChoice,
  //                 options: [
  //                 new ChoiceOption({
  //                     label: 'Answer'
  //                 }),
  //                 new ChoiceOption({
  //                     label: 'no'
  //                 })
  //                 ]
  //             })
  //           }
  //       }
  // }
};
</script>

<style>
/* Import Vue Flow Form base CSS */
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";
/* Import one of the Vue Flow Form CSS themes (optional) */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css";
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>
