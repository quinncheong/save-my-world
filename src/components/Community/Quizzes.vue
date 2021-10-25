<template>
  <flow-form class="text-white" v-bind:questions="questions" v-bind:language="language" />
</template>

<script>
  // Import necessary components and classes
  import { FlowForm, QuestionModel, QuestionType, ChoiceOption} from '@ditdot-dev/vue-flow-form'

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
              })
            ]
          })
        ]
      }
    }
  }
</script>

<style>
  /* Import Vue Flow Form base CSS */
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  /* Import one of the Vue Flow Form CSS themes (optional) */
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */

</style>