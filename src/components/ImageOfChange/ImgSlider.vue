<template> 
    <!-- Problem with image slider with figcaption -->
  <!-- <img-comparison-slider>
    <figure slot="first" class="before">
      <img width="100%" :src="imgA" />
      <figcaption>Before</figcaption>
    </figure>
    <figure slot="second" class="after">
      <img width="100%" :src="imgB" />
      <figcaption>After</figcaption>
    </figure>
  </img-comparison-slider> -->
  <img-comparison-slider>
    <img slot="first" :src="imgA" />
    <img slot="second" :src="imgB" />
  </img-comparison-slider>
</template>

<script>
import "img-comparison-slider";

export default {
  name: "ImgSlider",
  props: ["imgA", "imgB"],
  components: {},
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        gap: "1rem",
      },
    };
  },
  mounted() {
    console.log("ImgSlider created");
    console.log(this.imgA);
    console.log(this.imgB);
  },
};
</script>

<style lang="scss" scoped>
// .before,
// .after {
//   margin: 0;
// }

// figcaption {
//   & .before,
//   & .after {
//     background: #fff;
//     border: 1px solid #c0c0c0;
//     border-radius: 12px;
//     color: #2e3452;
//     opacity: 0.8;
//     padding: 12px;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     line-height: 100%;
//   }

//   & .before {
//     left: 12px;
//   }

//   & .after {
//     right: 12px;
//   }
// }

.before,
.after {
  margin: 0;
}

.before figcaption,
.after figcaption {
  background: #fff;
  border: 1px solid #c0c0c0;
  border-radius: 12px;
  color: #2e3452;
  opacity: 0.8;
  padding: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 100%;
}

.before figcaption {
  left: 12px;
}

.after figcaption {
  right: 12px;
}
</style>
