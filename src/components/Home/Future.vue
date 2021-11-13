p
<template>
  <section class="future-wrapper container-fluid w-100">
    <!-- SVG effect -->
    <svg
      class="svg-wave"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1921 527.38"
    >
      <defs>
        <linearGradient id="A" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fff" stop-opacity=".2"></stop>
          <stop offset="100%" stop-color="#fff"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#A)"
        d="M.5 120.3s343.45-54.66 693 188.47S1920.5.88 1920.5.88v526H.5z"
      ></path>
    </svg>
    <!-- Content -->
    <div class="future-content">
      <h3 class="mb-3">Towards a Net-Zero Future</h3>
      <p class="mb-4">
        According to United Nations, to preserve a livable climate,
        greenhouse-gas emissions must be reduced to net zero by 2050. Bold,
        fast, and wide-ranging action needs to be taken by governments and
        businesses. But the transition to a low-carbon world also
        <span id="savemyworld">requires</span> the
        <span id="savemyworld">participation of citizens</span> – especially in
        advanced economies.
      </p>

      <p class="mb-2">
        Hence, play your part in limiting the effects of global warming and take
        care of our planet.
        <span id="savemyworld">Make the right choices today.</span> You can be
        part of the solution and influence change.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Future",
};
</script>

<style lang="scss" scoped>
.future-wrapper {
  font-size: $font-size-small;
  background-image: linear-gradient(
    to bottom right,
    rgba(80, 167, 194, 0.9),
    rgba(144, 243, 199, 0.9)
  );
  position: relative;
  padding: 2rem 0.5rem;

  .svg-wave {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.2;
    overflow-x: hidden;
    overflow-y: hidden;
  }
}

.future-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  p {
    text-align: justify;
  }
}

// Accounting for the different breakpoints
@media screen and (min-width: 468px) {
  .future-wrapper {
    font-size: $variable-font;
    padding: 3rem 2rem;

    .future-content p {
      text-align: center;
    }
  }
}

@media screen and (min-width: 768px) {
  .future-content {
    width: 80%;
  }
}

@media screen and (min-width: 992px) {
  .future-content {
    width: 70%;
  }
}

@media screen and (min-width: 1400px) {
  .future-content {
    width: 60%;
  }
}
</style>
