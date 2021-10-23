<template>
    <div>This is Title of the testing quizzes</div>
    <p :key="quiz.id" v-for="quiz of quizzes">{{quiz.title}}</p>
</template>

<script>
import { getQuizzes, getCountryObj } from '@/firebase.js';


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

        let country = await getCountryObj('LKA');
        console.log(country)
    }


}
</script>

<style lang="scss" scoped>

</style>