<template>
    <!-- header -->
    <h5 class="mb-3" style="text-align: left"><strong>Overview: Weather, Global Warming and Climate Change</strong></h5>
    <div class="row">
        <div class="col">
            <div class="card bg-transparent text-white">
                <img class="card-img" src="https://climate.nasa.gov/system/content_pages/main_images/1321_cc-vs-gw-vs-wx-768px.jpg" alt="Card image">
                <p style="font-weight: light">“Climate change” and “global warming” are often used interchangeably but have distinct meanings. Similarly, the terms "weather" and "climate" are sometimes confused, though they refer to events with broadly different spatial- and timescales.</p>
                <p style="font-weight: light">Global warming is the long-term heating of Earth’s climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth’s atmosphere. The term is frequently used interchangeably with the term climate change, though the latter refers to both human- and naturally produced warming and the effects it has on our planet.</p>
                <p>
                    Climate change is a long-term change in the average weather patterns that have come to define Earth’s local, regional and global climates. 
                    
                    Changes observed in Earth’s climate since the early 20th century are primarily driven by human activities, particularly fossil fuel burning. Natural processes can also contribute to climate change, including internal variability (e.g., cyclical ocean patterns) and external forcings (e.g., volcanic activity, changes in the Sun’s energy output, variations in Earth’s orbit).
                </p>
            </div>
        </div>
        <div class="col">
            <div class="card bg-transparent border-light">
                <p class="border-bottom">Climate Change</p>
                <div class="card-body">
                    <p class="card-text">Contemporary climate change includes both global warming caused by humans and its impacts on Earth's weather patterns. There have been previous periods of climate change, but the current changes are more rapid than any known events in Earth's history.</p>
                    <p class="mb-1 text-center"><a class="text-white" href="https://www.nature.com/articles/d41586-021-02990-w">Click here for more info</a></p>
                </div>
            </div>

            <div class="card my-2 bg-transparent border-light">
                <p class="border-bottom">Greenhouse Gases</p>
                <div class="card-body">
                    <p class="card-text">Earth's greenhouse gases trap heat in the atmosphere and warm the planet. The main gases responsible for the greenhouse effect include carbon dioxide, methane, nitrous oxide, and water vapor (which all occur naturally), and fluorinated gases (which are synthetic)</p>
                    <p class="mb-1 text-center"><a class="text-white" href="https://www.nationalgeographic.com/environment/article/greenhouse-gases">Click here for more info</a></p>
                </div>
            </div>

            <div class="card my-2 bg-transparent border-light">
                <p class="border-bottom">Ways to contribute</p>
                <div class="card-body">
                    <p class="card-text">Universalize access to basic services such as water, sanitation and sustainable energy. Support the generation of development opportunities through inclusive education and decent work. Foster innovation and resilient infrastructure, creating communities and cities able to produce and consume sustainably.</p>
                    <p class="mb-1 text-center"><a class="text-white" href="https://www.nature.com/articles/d41586-021-02990-w">Click here for more info</a></p>
                </div>
            </div>
        </div>
    </div>
    <hr>
</template>

<script>
// import Campaign from "./Campaign.vue";

export default {
  name: "News",
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
    p{
        text-align: left;
        font-size: 15px;
        padding: 10px;
    }
</style>
