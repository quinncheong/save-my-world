<template>
  <div>
    <image-of-change :images="images" />
  </div>
</template>

<script>
import ImageOfChange from "../components/ImageOfChange/ImageOfChange.vue";

export default {
  name: "imageCarousel",
  components: {
    ImageOfChange,
  },
  data() {
    return {
      images: [
        {
          id: 8,
          // relative import image
          img1: "img1A.jpeg",
          img2: "img1B.jpeg",
          description: "This is a test description",
          title: 'this is a test title'
          
        },
        {
          id: 1,
          // relative import image
          img1: "img2A.jpeg",
          img2: "img2B.jpeg",
        },
        {
          id: 2,
          img1: "img3A.jpeg",
          img2: "img3B.jpeg",
        },
        {
          id: 3,
          img1: "img4A.jpeg", // 4A is wrong and need to change it
          img2: "img4B.jpeg",
        },
        {
          id: 4,
          img1: "img5A.jpeg",
          img2: "img5B.jpeg",
        },
        {
          id: 5,
          img1: "img6A.jpeg",
          img2: "img6B.jpeg",
        },
        {
          id: 6,
          img1: "img7A.jpeg",
          img2: "img7B.jpeg",
        },
        // {
        //   id: 7,
        //   img1: "img4A.jpeg",
        //   img2: "img4B.jpeg",
        // }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.image-change-wrapper {
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
  .image-change-wrapper {
    width: 70%;
  }
}

// display 70% width on large screen sizes
@media screen and (min-width: 992px) {
  .image-change-wrapper {
    width: 60%;
  }
}

// // display 70% width on extra large screen sizes
@media screen and (min-width: 1200px) {
  .image-change-wrapper {
    width: 60%;
  }
}
</style>
