<template>
    <div class="bg-secondary">
      <div class="container">
        <h1 class="display-">{{ image.title }}</h1>
        <p class="lead">BEFORE AND AFTER</p>
        <p>
          {{ image.description }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'ImageSliderBody',
    props: ["image"],
    data() {
        return {
            //
        }
    },
    
}
</script>