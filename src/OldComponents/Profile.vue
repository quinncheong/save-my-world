<template>
  <div class="container">
    <div class="row justify-content-center sameRow1">
      <!--User small profile card for them to input their status and about themselves-->
      <div class="col-md-4 cardpic rounded sameHeight1">
        <div class="area1 p-3 py-5"></div>
        <div class="area2 p- text-center px-3">
          <div class="image mr-3">
            <img
              src="@/assets/img/community.png"
              class="rounded-circle"
              width="100"
            />
            <h4 class="name mt-3">Park Jin Woo</h4>
            <p class="information mt-3 text-justify">
              About Yourself: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Itaque, optio. Commodi blanditiis deserunt architecto at
              quas nobis! Placeat dolor necessitatibus quis fugit ipsam tempora!
              Corporis ratione praesentium culpa veritatis soluta!
            </p>
          </div>
        </div>
      </div>

      <!-- this would be for the account settings -->
      <div class="col-md-6 sameHeight1">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">Park Jin Woo</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">PJW@korea.com</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Mobile</h6>
              </div>
              <div class="col-sm-9 text-secondary">12345678</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Singapore Management University
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-12">
                <a class="btn btn-info" target="__blank" href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--this ending div tag is for the first row-->

    <!--start of the 2nd row, consist of donation and badges & campaigns-->
    <div class="row justify-content-center mt-4 sameRow2">
      <!--This column is for the Badges and Campaign  -->
      <div class="col-5 SameHeight2">
        <div class="card">
          <div class="row m-2">
            <h2>Badges and Campaign</h2>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Badges Attained</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              <img src="@/assets/img/globe.png" alt="" width="40" />
              <img src="@/assets/img/globe.png" alt="" width="40" />
              <img src="@/assets/img/globe.png" alt="" width="40" />
              <img src="@/assets/img/globe.png" alt="" width="40" />
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Campaigns</h6>
            </div>

            <!-- <div class="col-sm-9 text-secondary"> -->
            <div class="col-sm-9">
              <div class="cover-container">
                <div class="cover-item" style="background-color: pink"></div>
                <div class="cover-item" style="background-color: pink"></div>
                <div class="cover-item" style="background-color: pink"></div>
                <div class="cover-item" style="background-color: pink"></div>
                <div class="cover-item" style="background-color: pink"></div>
                <div class="cover-item" style="background-color: pink"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--this column is for the donation-->
      <div class="col-5 sameHeight2">
        <div class="card">
          <div class="row m-2">
            <h2>Donation History</h2>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Year</h6>
            </div>
            <div class="col-sm-9">
              <h6 class="mb-0">Cause</h6>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Year</h6>
            </div>
            <div class="col-sm-9">
              <h6 class="mb-0">Cause</h6>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Year</h6>
            </div>
            <div class="col-sm-9">
              <h6 class="mb-0">Cause</h6>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Year</h6>
            </div>
            <div class="col-sm-9">
              <h6 class="mb-0">Cause</h6>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <!--this is the ending tag for the 2nd row-->
  </div>
  <!--this ending div tag is for the container-->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*this following style is for the profile card */
.cardpic {
  width: 400px;
  border: none;
  border-radius: 14px !important;
}

.area1 {
  background-color: white;
  border-top-left-radius: 14px !important;
  border-top-right-radius: 14px !important;
  padding-top: 83px !important;
}

.image {
  top: -62px;
  position: relative;
}

.image img {
  box-shadow: 5px 6px 6px 2px #e9ecef;
}

.area2 {
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
}

.name {
  font-size: 25px;
  font-weight: 650;
  color: black;
}

.information {
  color: black;
  font-weight: 500;
  font-size: 16px;
}

/*the following style is for account settings */

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: white;
  background-clip: border-box;
  border: 2px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
  color: black;
}

/*The following styling is for the campaign scroll */

.cover-container {
  height: 180px;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
.cover-item {
  position: relative;
  display: inline-block;
  margin: 8px 8px;
  box-shadow: 2px 2px 4px #bbb;
  border-top-right-radius: 4px;
  width: 116px;
  height: 158px;
  vertical-align: bottom;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
