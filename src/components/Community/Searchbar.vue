<template>
<div class="row justify-content-center">
  <div class="col-sm-7">
    <div class="searchbar-wrapper">
      <div class="searchbar-outline">
        <img src="@/assets/img/search-icon.png" alt="searchicon" />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  </div>
  <div class="col-sm-5">
      <button class="btn">Create Campaign</button>
  </div>
</div>
  
</template>

<script>
import SearchIcon from "@/assets/img/search-icon.png";

export default {
  name: "Searchbar",
  data() {
    return {
      SearchIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.searchbar-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .searchbar-outline {
    @extend %bg-card-rounded;
    margin: auto;
    background-color: $tertiary-color;
    height: 60px;
    
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    font-size: $font-size-primary;

    img {
      height: 20px;
    }

    input {
      border: none;
      outline: none;
      height: 100%;
      width: 100%;
      background-color: $tertiary-color;
      margin-left: 0.5rem;
      vertical-align: baseline;
      padding-top: 3px;
      font-size: inherit;

      &::placeholder {
        color: darkgrey;
        
      }
    }
  }
}

button {
  background-color: darkgray;
  color: white;
}
</style>
