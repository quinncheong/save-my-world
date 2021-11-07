<template>
  <div class="mars"></div>
  <!-- <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" /> -->
  <!-- <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" /> -->
  <p class="title"><strong style="font-size: 70px">404</strong><br>Oh no!!</p>
  <p class="subtitle">
    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
  </p>
  <div align="center">
    <a class="btn-back" @click="handleClick" href="#">Fly Back Home</a>
  </div>
  <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
  <!-- <img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" /> -->
  <!-- <div class="outer-track">
    <div class="inner-track">
      <div class="tractor-container">
        <div class="tractor">
          <div class="body">
            <div class="light"></div>
            <div class="grill"></div>
            <div class="exhaust"></div>
            <div class="steering"></div>
            <div class="seat"></div>
            <div class="wheel-front"></div>
            <div class="fender"></div>
            <div class="wheel-back"></div>
            <div class="hitch"></div>
          </div>
        </div>
      </div>
      <div class="rope"></div>
      <div class="tractor-container">
        <div class="tractor">
          <div class="body">
            <div class="light"></div>
            <div class="grill"></div>
            <div class="exhaust"></div>
            <div class="steering"></div>
            <div class="seat"></div>
            <div class="wheel-front"></div>
            <div class="fender"></div>
            <div class="wheel-back"></div>
            <div class="hitch"></div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <button @click="handleClick" class="mt-3 btn btn-outline-light btn-new">Go Back Home</button> -->
  <!-- <main>
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 800 600"
          >
            <g>
              <defs>
                <clipPath id="GlassClip">
                  <path
                    d="M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5
                s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13
                c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"
                  />
                </clipPath>
                <clipPath id="cordClip">
                  <rect width="800" height="600" />
                </clipPath>
              </defs>

              <g id="planet">
                <circle
                  fill="none"
                  stroke="#0E0620"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  cx="572.859"
                  cy="108.803"
                  r="90.788"
                />

                <circle
                  id="craterBig"
                  fill="none"
                  stroke="#0E0620"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  cx="548.891"
                  cy="62.319"
                  r="13.074"
                />

                <circle
                  id="craterSmall"
                  fill="none"
                  stroke="#0E0620"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  cx="591.743"
                  cy="158.918"
                  r="7.989"
                />
                <path
                  id="ring"
                  fill="none"
                  stroke="#0E0620"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  d="
      M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408
      c0-3.378-15.347-4.988-40.243-7.225"
                />

                <path
                  id="ringShadow"
                  opacity="0.5"
                  fill="none"
                  stroke="#0E0620"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  d="
      M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149"
                />
              </g>
              <g id="stars">
                <g id="starsBig">
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="518.07"
                      y1="245.375"
                      x2="518.07"
                      y2="266.581"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="508.129"
                      y1="255.978"
                      x2="528.01"
                      y2="255.978"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="154.55"
                      y1="231.391"
                      x2="154.55"
                      y2="252.598"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="144.609"
                      y1="241.995"
                      x2="164.49"
                      y2="241.995"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="320.135"
                      y1="132.746"
                      x2="320.135"
                      y2="153.952"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="310.194"
                      y1="143.349"
                      x2="330.075"
                      y2="143.349"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="200.67"
                      y1="483.11"
                      x2="200.67"
                      y2="504.316"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="210.611"
                      y1="493.713"
                      x2="190.73"
                      y2="493.713"
                    />
                  </g>
                </g>
                <g id="starsSmall">
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="432.173"
                      y1="380.52"
                      x2="432.173"
                      y2="391.83"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="426.871"
                      y1="386.175"
                      x2="437.474"
                      y2="386.175"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="489.555"
                      y1="299.765"
                      x2="489.555"
                      y2="308.124"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="485.636"
                      y1="303.945"
                      x2="493.473"
                      y2="303.945"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="231.468"
                      y1="291.009"
                      x2="231.468"
                      y2="299.369"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="227.55"
                      y1="295.189"
                      x2="235.387"
                      y2="295.189"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="244.032"
                      y1="547.539"
                      x2="244.032"
                      y2="555.898"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="247.95"
                      y1="551.719"
                      x2="240.113"
                      y2="551.719"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="186.359"
                      y1="406.967"
                      x2="186.359"
                      y2="415.326"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="190.277"
                      y1="411.146"
                      x2="182.44"
                      y2="411.146"
                    />
                  </g>
                  <g>
                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="480.296"
                      y1="406.967"
                      x2="480.296"
                      y2="415.326"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      x1="484.215"
                      y1="411.146"
                      x2="476.378"
                      y2="411.146"
                    />
                  </g>
                </g>
                <g id="circlesBig">
                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="588.977"
                    cy="255.978"
                    r="7.952"
                  />

                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="450.066"
                    cy="320.259"
                    r="7.952"
                  />

                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="168.303"
                    cy="353.753"
                    r="7.952"
                  />

                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="429.522"
                    cy="201.185"
                    r="7.952"
                  />

                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="200.67"
                    cy="176.313"
                    r="7.952"
                  />

                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="133.343"
                    cy="477.014"
                    r="7.952"
                  />

                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="283.521"
                    cy="568.033"
                    r="7.952"
                  />

                  <circle
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    cx="413.618"
                    cy="482.387"
                    r="7.952"
                  />
                </g>
                <g id="circlesSmall">
                  <circle fill="#0E0620" cx="549.879" cy="296.402" r="2.651" />
                  <circle fill="#0E0620" cx="253.29" cy="229.24" r="2.651" />
                  <circle fill="#0E0620" cx="434.824" cy="263.931" r="2.651" />
                  <circle fill="#0E0620" cx="183.708" cy="544.176" r="2.651" />
                  <circle fill="#0E0620" cx="382.515" cy="530.923" r="2.651" />
                  <circle fill="#0E0620" cx="130.693" cy="305.608" r="2.651" />
                  <circle fill="#0E0620" cx="480.296" cy="477.014" r="2.651" />
                </g>
              </g>
              <g id="spaceman" clip-path="url(cordClip)">
                <path
                  id="cord"
                  fill="none"
                  stroke="#0E0620"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="
      M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548
      c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817"
                />

                <path
                  id="backpack"
                  fill="#FFFFFF"
                  stroke="#0E0620"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="
      M338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537
      c3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537
      C360.647,451.083,349.251,457.661,338.164,454.689z"
                />
                <g id="antenna">
                  <line
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    x1="323.396"
                    y1="236.625"
                    x2="295.285"
                    y2="353.753"
                  />
                  <circle
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    cx="323.666"
                    cy="235.617"
                    r="6.375"
                  />
                </g>
                <g id="armR">
                  <path
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0
        c-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663"
                  />

                  <path
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793
        c4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046
        C375.625,437.355,383.087,437.973,388.762,434.677z"
                  />
                </g>
                <g id="armL">
                  <path
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0
        c3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564"
                  />

                  <path
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096
        c-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59
        C252.013,404.214,245.243,401.017,241.978,395.324z"
                  />
                </g>
                <g id="body">
                  <path
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14
        c-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0
        c26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z"
                  />
                  <path
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114"
                  />
                </g>
                <g id="legs">
                  <g id="legR">
                    <path
                      fill="#FFFFFF"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
          M312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534
          C333.451,455.886,323.526,457.387,312.957,456.734z"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      x1="304.883"
                      y1="486.849"
                      x2="330.487"
                      y2="493.713"
                    />
                  </g>
                  <g id="legL">
                    <path
                      fill="#FFFFFF"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
          M296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534
          C278.993,441.286,286.836,447.55,296.315,452.273z"
                    />

                    <line
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      x1="262.638"
                      y1="475.522"
                      x2="288.241"
                      y2="482.387"
                    />
                  </g>
                </g>
                <g id="head">
                  <ellipse
                    transform="matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)"
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    cx="341.295"
                    cy="315.211"
                    rx="61.961"
                    ry="60.305"
                  />
                  <path
                    id="headStripe"
                    fill="none"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246"
                  />

                  <path
                    fill="#FFFFFF"
                    stroke="#0E0620"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="
        M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192
        c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087
        s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"
                  />
                  <g clip-path="url(#GlassClip)">
                    <polygon
                      id="glassShine"
                      fill="none"
                      stroke="#0E0620"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      points="
          278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928         "
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="col-md-6 align-self-center">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p class="mt-3">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <button @click="handleClick" class="mt-3 btn btn-outline-warning btn-new">HOME</button>
        </div>
      </div>
    </div>
  </main> -->
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    handleClick() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>

// .btn-new {
//   font-family: "Fredoka One";
//   padding: 5px 50px;
//   position: relative;
//   border-radius: 30px;
//   font-weight: bold;
// }

// @import url('https://fonts.googleapis.com/css?family=Fredoka+One|Open+Sans');

// $bulb: #ffee35;
// $rope: #efd09e;
// $rope-shade: #E8B86A;
// $dark: #333333;
// $red: green;
// $green: green;
// $gray: #cccccc;
// $dirt: #efd09e;

// .center{
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform-origin: center;
//   transform: translate(-50%, -50%);
// }
// .grill-item{
//   position: absolute;
//   width: 10px;
//   height: 2px;
//   background: $dark;
//   z-index: 10;
//   border-top-right-radius: 3px;
//   border-bottom-right-radius: 3px;
// }
// .spin{
//   animation-name: spin;
//   animation-duration: 2000ms;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
// }
// .putt{
//   animation-name: putt;
//   animation-duration: 1500ms;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
// }
// .bob{
//   animation-name: bob;
//   animation-duration: 1000ms;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
// }
// .rattle{
//   animation-name: rattle;
//   animation-duration: 200ms;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
// }
// .smoke{
//   animation-name: smoke;
//   animation-duration: 1000ms;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
// }
// .pull{
//   animation-name: pull;
//   animation-duration: 4000ms;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
// }
// .title{
//   font-family: "Fredoka One";
//   font-size: 32px;
//   text-shadow: 2px 2px 0px $rope-shade;
//   letter-spacing: 1px;
//   color: $rope;
//   text-align: center;
// }
// .subtext{
//   font-family: "Fredoka One";
//   letter-spacing: 1px;
//   font-size: 18px;
//   color: darken($dirt, 15%);
//   text-align: center;
// }

// .outer-track{
//   width: 100%;
//   height: 125px;
//   position: relative;
//   margin-top: 200px;
//   transform: translateY(-50%);
//   &:before{
//     content: "";
//     position: absolute;
//     z-index: -9;
//     width: 100%;
//     height: 30px;
//     left: 0px;
//     bottom: 0px;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//     background: lighten($dirt, 10%);
//   }
//   &:after{
//     content: "How did you even get here, Friend?";
//     min-width: 320px;
//     position: absolute;
//     left: 50%;
//     bottom: -60px;
//     transform: translateX(-50%);
//     @extend .subtext;
//     //white-space: nowrap;
//   }
// }
// .inner-track{
//   //border: 1px solid black;
//   left: 50%;
//   transform: translateX(-50%);
//   position: relative;
//   height: 100%;
//   max-width: 540px;
//   min-width: 310px;
//   @extend .pull;
// }
// .tractor-container{
//   //border: 1px solid black;
//   display: inline-block;
//   position: relative;
//   height: 100%;
//   width: 100px;
// }
// .tractor-container:first-child{
//   float: left;
// }
// .tractor-container:last-child{
//   float: right;
// }
// .rope{
//   position: absolute;
//   top: 56%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 48%;
//   height: 4px;
//   background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASElEQVQoU2N8f2HefwYC4OezEwyMhBSCFLFLWeBXCFMEshCniciKcCpEV4RVITZFGApxKUJRiE8RXCEhRWCFL7al/QeFEyEAAGNAPEomtNLvAAAAAElFTkSuQmCC) repeat;
//   &:before{
//     content: "404 Error";
//     display: inline-block;
//     position: absolute;
//     @extend .title;
//     white-space: nowrap;
//     top: -40px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
// }
// .tractor{
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform-origin: center;
//   //border: 1px solid red;
// }
// .tractor-container:first-child .tractor{
//   transform: translate(-50%, -50%);
// }
// .tractor-container:last-child .tractor{
//   transform: translate(-50%, -50%) scaleX(-1);
// }
// .body{
//   width: 48px;
//   height: 20px;
//   background: $red;
//   border-radius: 2px;
//   @extend .putt;
//   &:after{
//     content: "";
//     position: absolute;
//     width: 105%;
//     height: 14px;
//     border-radius: 5px;
//     background: darken($red, 10%);
//     left: 50%;
//     top: -10px;
//     transform: translateX(-50%);
//     @extend .rattle;
//   }
//   &:before{
//     content: "";
//     position: absolute;
//     width: 30%;
//     height: 100%;
//     background: lighten($red, 30%);
//     bottom: 0px;
//     border-radius: 2px;
//     left: -1px;
//   }
// }
// .light{
//   width: 7px;
//   height: 8px;
//   position: absolute;
//   z-index: 5;
//   border-radius: 100%;
//   background: $bulb;
//   top: -6px;
//   left: 3px;
//   &:before{
//     content: "";
//     width: 8px;
//     height: 10px;
//     z-index: 5;
//     position: absolute;
//     left: 3px;
//     top: 50%;
//     transform: translateY(-50%);
//     background: darken($red, 0%);
//     border-top-right-radius: 100%;
//     border-bottom-right-radius: 100%;
//   }
// }
// .exhaust{
//   position: absolute;
//   z-index: 1;
//   width: 8px;
//   border-radius: 5px;
//   height: 17px;
//   background: darken($red, 30%);
//   left: 22px;
//   top: -4px;
//   &:before{
//     content: "";
//     width: 5px;
//     height: 18px;
//     border-bottom-left-radius: 3px;
//     border-bottom-right-radius: 3px;
//     z-index: 5;
//     position: absolute;
//     background: lighten($red, 15%);
//     left: 50%;
//     top: -15px;
//     transform: translateX(-50%);
//   }
//   &:after{
//     content: "";
//     width: 12px;
//     height: 12px;
//     top: -15px;
//     background: $gray;
//     position: absolute;
//     border-radius: 100%;
//     left: 50%;
//     transform: translate(-50%, 0px) scale(0);
//     opacity: 0.5;
//     @extend .smoke;
//   }
// }
// .steering{
//   position: absolute;
//   width: 4px;
//   height: 25px;
//   background: $red;
//   right: -7px;
//   top: -18px;
//   transform: rotate(45deg);
//   &:before{
//     content: "";
//     width: 13px;
//     height: 4px;
//     background: darken($red, 30%);
//     position: absolute;
//     border-radius: 4px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
// }
// .seat{
//   position: absolute;
//   width: 12px;
//   height: 12px;
//   border-radius: 3px;
//   border-top-left-radius: 50px;
//   background: darken($red, 5%);
//   right: -44px;
//   top: -17px;
//   z-index: -1;
// }
// .grill{
//   @extend .grill-item;
//   top: 7px;
//   &:before{
//     content: "";
//     @extend .grill-item;
//     top: 4px;
//   }
//   &:after{
//     content: "";
//     @extend .grill-item;
//     top: 8px;
//   }
// }
// .wheel-front{
//   z-index: -5;
//   position: absolute;
//   width: 6px;
//   height: 12px;
//   background: lighten($red, 5%);
//   left: 2px;
//   bottom: -11px;
//   @extend .bob;
//   &:before{
//     content: "";
//     position: absolute;
//     width: 8px;
//     height: 8px;
//     border: 6px solid $dark;
//     border-radius: 100%;
//     top: 6px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
//   &:after{
//     content: "";
//     position: absolute;
//     width: 5px;
//     height: 5px;
//     background: $dark;
//     border-radius: 50%;
//     top: 13.4px;
//     left: 50%;
//     transform: translateX(-50%);
//   }
// }
// .fender{
//   position: absolute;
//   overflow: hidden;
//   left: 44px;
//   top: -10px;
//   width: 65px;
//   height: 30px;
//   border-bottom-right-radius: 100px;
//   background: transparent;
//   &:before{
//     content: "";
//     position: absolute;
//     border-radius: 100%;
//     border: 5px solid $red;
//     width: 60px;
//     height: 60px;
//     left: 67%;
//     transform: translateX(-50%);
//   }
//   &:after{
//     content: "";
//     position: absolute;
//     width: 12px;
//     height: 10px;
//     bottom: 0px;
//     background: $red;
//     z-index: 100;
//   }
// }
// .wheel-back{
//   position: absolute;
//   right: -62px;
//   bottom: -26px;
//   width: 21px;
//   height: 21px;
//   border: 12px solid $dark;
//   border-radius: 50%;
//   @extend .spin;
//   &:after{
//     content: "";
//     width: 42px;
//     height: 42px;
//     border-radius: 50%;
//     border: 3px dashed $dark;
//     @extend .center;
//     transform: translate(-51%, -51%);
//   }
//   &:before{
//     content: "";
//     border-radius: 100%;
//     width: 12px;
//     height: 12px;
//     background: $dark;
//     @extend .center;
//     transform: translate(-52%, -52%);
//   }
// }
// .hitch{
//   position: absolute;
//   width: 17px;
//   height: 6px;
//   border-radius: 3px;
//   background: darken($red, 5%);
//   bottom: 0px;
//   right: -68px;
//   z-index: -1;
//   &:before{
//     content: "";
//     position: absolute;
//     width: 2px;
//     height: 2px;
//     border-radius: 50%;
//     background: $dark;
//     right: 2px;
//     top: 50%;
//     transform: translateY(-50%);
//   }
//   &:after{
//     content: "";
//     position: absolute;
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background: $rope;
//     right: -1px;
//     top: 50%;
//     transform: translateY(-50%);
//   }
// }

// @keyframes spin { 
//   from { 
//     transform: rotate(0deg); 
//   } to { 
//     transform: rotate(-360deg); 
//   }
// }
// @keyframes putt {
//   0%{transform: translateY(0px)}
//   50%{transform: translateY(2px)}
//   100%{transform: translateY(0px)}
// }
// @keyframes bob {
//   0%{transform: translateY(0px)}
//   50%{transform: translateY(1px)}
//   100%{transform: translateY(0px)}
// }
// @keyframes rattle {
//   0%{transform: translate(-50%, 0px)}
//   50%{transform: translate(-50%, 1px)}
//   100%{transform: translate(-50%, 0px)}
// }
// @keyframes smoke {
//   0%{transform: translate(-50%, 0px) scale(0);}
//   10%{transform: translate(-50%, -6px) scale(0.2);}
//   20%{transform: translate(-50%, -8px) scale(0.4);}
//   30%{transform: translate(-50%, -10px) scale(0.6);}
//   40%{transform: translate(-50%, -12px) scale(0.8);}
//   50%{transform: translate(-50%, -14px) scale(1);}
//   60%{transform: translate(-50%, -16px) scale(0.8);}
//   70%{transform: translate(-50%, -18px) scale(0.6);}
//   80%{transform: translate(-50%, -20px) scale(0.4);}
//   90%{transform: translate(-50%, -22px) scale(0.2);}
//   100%{transform: translate(-50%, -24px) scale(0);}
// }

// @keyframes pull {
//   0%{transform: translateX(-50%)}
//   25%{transform: translateX(-60%)}
//   50%{transform: translateX(-50%)}
//   75%{transform: translateX(-40%)}
//   100%{transform: translateX(-50%)}
// }

@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700');
$nunito-font: 'Nunito', sans-serif;

// mixins
@mixin breakpoint($point) {
    @if $point==mobile {
        @media (max-width: 480px) and (min-width: 320px) {
            @content ;
        }
    }
}

// keyrames
@keyframes floating {
    from { transform: translateY(0px); }
    65%  { transform: translateY(15px); }
    to   { transform: translateY(-0px); }
}

// .mars{
//   left: 0;
//   right:0;
//   bottom:0;
//   position:absolute;
//   width: 100%;
//   height: 27vmin;
//   background: url('https://assets.codepen.io/1538474/mars.svg') no-repeat bottom center;
//   background-size: cover;
// }

.title{
  color: white;
  font-family: $nunito-font;
  font-weight: 600;
  text-align: center;
  font-size: 5vmin;
  margin-top: 25vmin;

  @include breakpoint(mobile){
    margin-top: 65vmin;
  }
}

.subtitle{
  color: white;
  font-family: $nunito-font;
  font-weight: 400;
  text-align: center;
  font-size: 3.5vmin;
  margin-top: -1vmin;
  margin-bottom: 5vmin;
}

.btn-back{
  border: 1px solid white;
  color: white;
  height: 5vmin;
  padding: 10px;
  font-size: 20px;
  font-family: $nunito-font;
  text-decoration: none;
	border-radius: 10px;

  &:hover{
    background: white;
    color: #4D007D;
  }

  @include breakpoint(mobile){
    font-size: 3.5vmin;
  }
}

.astronaut{
  position: absolute;
  top: 25vmin;
  left: 8vmin;
  height: 25vmin;
	animation: floating 3s infinite ease-in-out;

  @include breakpoint(mobile){
    top: 2vmin;
  }
}

// .spaceship{
//   position: absolute;
//   bottom: 15vmin;
//   right: 24vmin;

//   @include breakpoint(mobile){
//     width: 45vmin;
//     bottom: 18vmin;
//   }
// }
</style>
