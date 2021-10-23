<template>
    <div>This is Title of the testing quizzes</div>
    <p :key="quiz.id" v-for="quiz of quizzes">{{quiz.title}}</p>
</template>

<script>
import { getQuizzes } from '@/firebase.js';


export default {
    name: 'Quizzes',
    components: {},
    data() {
        return {
            quizzes: []
        }
    },
    async created() {
        let quizzes = await getQuizzes();
        this.quizzes = quizzes
    }


}
</script>

<style lang="scss" scoped>

</style>