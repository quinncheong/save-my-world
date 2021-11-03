<template>
  <div>
    <div v-if="started">
      <flow-form
        class="mt-2"
        ref="flowform"
        v-bind:questions="questions"
        v-bind:language="language"
        v-bind:standalone="true"
        v-bind:timer="true"
        v-on:complete="onComplete"
        v-on:submit="onQuizSubmit"
        v-on:timer="onTimer"
        timer-start-step="start"
      >
      
      <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
      <!-- We've overriden the default "complete" slot content -->
      <template v-slot:complete>
        <p>
          <span class="fh2">You did it!</span>
          <span v-if="!submitted" class="f-section-text">
            Review your answers or press Calculate score to see your result.
          </span>
        </p>
      </template>

      <!-- We've overriden the default "completeButton" slot content -->
      <template v-slot:completeButton>
        <div class="f-submit mt-3" v-if="!submitted">
          <button
            class="o-btn-action"
            ref="button"
            type="submit"
            href="#"
            v-on:click.prevent="onQuizSubmit()"
            aria-label="Press to submit"
          >
            <span>Calculate core</span>
          </button>
          <a
            class="f-enter-desc"
            href="#"
            v-on:click.prevent="onQuizSubmit()"
            v-html="language.formatString(language.pressEnter)"
          >
          </a>
        </div>

        <p class="text-success" v-if="submitted && time">
          Your time: {{ formattedTime }}
        </p>
        <p class="text-success" v-if="submitted && score < 4">
          "You scored {{ score }} out of {{ total }}. There's a lot of room for
          improvement..."
        </p>
        <p class="text-success" v-else-if="submitted && score < 7">
          "You scored {{ score }} out of {{ total }}. Not bad at all! You know your Climate well!"
        </p>
        <p class="text-success" v-else-if="submitted && score <= total">
          "You scored {{ score }} out of {{ total }}. Wow, you are a Climate Change Evangelist! Excellent!"
        </p>
      </template>
      
    </flow-form>


    </div>
    <div v-else>
      <button class="btn btn-light bottom-right" @click="startQuiz()">Start Quiz</button>
    </div>
    <!-- Button for debugging -->
    <!-- <button class="btn btn-success" @click="logQuestions()">
      Log questions
    </button> -->
  </div>
</template>

<script>
// Import necessary components and classes
import {
  FlowForm,
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
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
        // new QuestionModel({
        //   id: "start",
        //   tagline: "7",
        //   title: "How much do you know about the environment?",
        //   content: "Test how well you know about Climate Change.",
        //   type: QuestionType.SectionBreak,
        //   required: true,
        // }),
      ],
      started: false,
      submitted: false,
      completed: false,
      score: 0,
      total: 8,
      time: 0,
      formattedTime: "",
      language: new LanguageModel(),
      answers: {
        // html_1: ["2", "3"],
        // html_2: "false",
        // html_3: "2",
        // html_4: ["3", "4"],
        // ux_1: ["1", "2", "4"],
        // ux_2: "false",
        // ux_3: "4",
        // ux_4: "true",
      },
      startQn: [
        new QuestionModel({
          id: "start",
          tagline: "Quiz Start",
          title: "How much do you know about the environment?",
          content: "Test how well you know about Climate Change.",
          type: QuestionType.SectionBreak,
          required: true,
        }),
      ],
    };
  },
  methods: {
    async startQuiz() {
      // Generate random id from 1-3 to get quiz
      const quizId = Math.floor(Math.random() * 3) + 1;
      const quizzes = await getQuizzes(quizId);

      // Generate question model array from quizzes
      // This is the first question for the qns model array
      let qnsModelArray = [
        new QuestionModel({
          id: "start",
          tagline: "Climate Quiz",
          title: "How much do you know about the environment?",
          content: "Test how well you know about Climate Change.",
          type: QuestionType.SectionBreak,
          required: true,
        }),
      ];
      for (let { Question, Options, Explanation, Answer, id } of quizzes) {
        // console.log(Question);
        // console.log(Options);
        // console.log(Explanation);
        // console.log(Answer);
        // console.log(id);

        let optionsArray = [];
        for (let choice of Options) {
          optionsArray.push(
            new ChoiceOption({
              label: choice,
              value: choice,
            })
          );
        }
        // let multiple =
        //   Options.length > 2
        //     ? QuestionType.SingleChoice
        //     : QuestionType.SingleChoice

        // console.log(QuestionType.SingleChoice);
        // console.log(QuestionType.MultipleChoice);

        let qnModel = new QuestionModel({
          id,
          title: Question,
          type: QuestionType.MultipleChoice,
          options: optionsArray,
          required: true,
          multiple: false,
        });
        this.answers[id] = Answer;
        qnsModelArray.push(qnModel);
      }

      console.log(qnsModelArray);
      console.log(this.answers);
      this.questions = qnsModelArray;
      this.started = true;
    },
    logQuestions() {
      console.log(this.questions);
    },
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      this.completed = completed;
    },
    arrayEquals(a, b) {
      return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
      );
    },
    calculateScore() {
      this.questions.forEach((question) => {
        if (question.type !== QuestionType.SectionBreak) {
          let answer = question.answer;
          if (typeof answer === "object") {
            answer.sort((a, b) => a - b);
            if (this.arrayEquals(answer, this.answers[question.id])) {
              this.score++;
            }
          }
          if (answer == this.answers[question.id]) {
            this.score++;
          }
        }
      });
    },
    onQuizSubmit() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true;

      this.submitted = true;
      this.calculateScore();
    },
    onTimer(time, formattedTime) {
      this.time = formattedTime;
      this.formattedTime = formattedTime;
    },
  },
};
</script>

<style>
/* Import Vue Flow Form base CSS */
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";

/* Import one of the Vue Flow Form CSS themes (optional) */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
/* @import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css"; */
@import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css';

p.text-success {
  margin-bottom: 10px;
}

</style>
