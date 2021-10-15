<template>
<header class='page-header'>
  <div class="container-fluid ">
<!-- This would be where the globe would be  -->
    <div class="row  py-5" id='login'>
      <div class="col">
        Earth globe thingy goes here (Not that important yet)
      </div>

      <div class="col text-start">
        <h1 class='mt-3 text-center'>You have to power to <span id='savemyworld'>#SaveOurWorld</span></h1>

        <div class="login mt-3 ">
          <div class="mb-3">
            <label for="password" class="form-label">Username</label>
            <input type="email" class="form-control" placeholder="Username">
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="email" class="form-control" id='password'  placeholder="Password">
          </div>

        </div>
      </div>
    </div>
  </div>
</header>


  <!-- Guides -->
    




  

    <!-- Footer goes here -->




    
</template>

<script>
// @ is an alias to /src

export default {
  
};
</script>

<style lang="scss">
.gg {
  color: $testing-variable;
}

#savemyworld{
  color: yellow;
}


</style>
