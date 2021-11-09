<template>
    <!-- vue bootstrap image card template -->
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">{{ title }}</h4>
        </div>
        <div class="card-body">
            <img class="img-fluid" :src="src" :alt="title">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageCard',
    props: {
        title: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    margin-bottom: 20px;
}
</style>