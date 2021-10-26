<template>
  <div class="community">
    <!-- header -->
    <div class="row">
      <div class="col-sm-6">
        <h1>Do what you can for the community</h1>
      </div>
      <div class="col-sm-6">
        <img src="@/assets/img/community.png" alt="" />
      </div>
    </div>
    <!-- line breaking the header and the seachbar + campaigns -->
    <hr />
    <Searchbar />
    <br />
    <Campaigns />
    <br>
    <Quizzes />
  </div>
</template>

<script>
import Searchbar from "@/components/Community/Searchbar.vue";
import Campaigns from "@/components/Community/Campaigns.vue";
import Quizzes from "@/components/Community/Quizzes.vue";

export default {
  name: "Community",
  components: {
    Searchbar,
    Campaigns,
    Quizzes,
  },
};
</script>

<style lang="scss" scoped>
.community {
  display: flex;
  flex-direction: column;
}

hr {
  border: solid 2px white;
}
</style>
