<template>
  <flow-form v-bind:questions="questions"/>
</template>

<script>
  // Import necessary components and classes
  import { FlowForm, QuestionModel, QuestionType, ChoiceOption} from '@ditdot-dev/vue-flow-form';
  import {  getQuizzes  } from "@/firebase.js";

  var quizzes = getQuizzes();
  console.log(quizzes)
//   var responses = quizzes.then(response => {return response})

  export default {
    name: 'Quizzes',
    components: {
      FlowForm
    },
    data() {
      return {
        questions: [
          // QuestionModel array
          new QuestionModel({
            title: 'Question',
            type: QuestionType.MultipleChoice,
            options: [
              new ChoiceOption({
                label: 'Answer'
              }),
              new ChoiceOption({
                label: 'no'
              })
            ]
          })
        ]
      }
    }
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
  }
</script>

<style>
  /* Import Vue Flow Form base CSS */
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  /* Import one of the Vue Flow Form CSS themes (optional) */
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css';
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */

</style>