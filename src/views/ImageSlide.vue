<template>
  <div class="community">
    <div>
      <image-of-change :images="images" />
    </div>
  </div>
</template>

<script >
// import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import 'img-comparison-slider';
// import imageCarol from "../components/ImageOfChange/ImageCarousel.vue";
// import imageSlider from "../components/ImageOfChange/ImageSlider.vue";
import ImageOfChange from "../components/ImageOfChange/ImageOfChange.vue";

export default {
  name: "imageCarousel",
  components: {
    // Splide,
    // SplideSlide,
    // imageCarol,
    // imageSlider,
    ImageOfChange,
  },
  data() {
    return {
      images: [
        {
          id: 8,
          // relative import image
          img1: "img1A.webp",
          img2: "img1B.webp",
          title: "Deforestation in Papua, Indonesia",
          description: "The 2019 image shows an area of Papua (also known as Western New Guinea) where the forest was cleared between 2011 and 2016, reportedly to make way for plantation agriculture",
          timeline: "Nov. 20, 2002 - Nov. 27, 2019"
        },
        {
          id: 1,
          // relative import image
          img1: "img2A.webp",
          img2: "img2B.webp",
          title: "Ice Jam Floods Region in Northwest Alaska",
          description: "These false color images show a portion of northwest Alaska before and during widespread flooding in May 2021. Ice and snow appear light blue, liquid water is dark blue or black, and bare ground is yellowish brown. Chunks of ice jammed and blocked the flow of the Buckland River, which then overran its banks. Five feet of water inundated the local community, according to a statement released by Alaska Governor Dunleavy's office",
          timeline: "April 27, 2021 - May 13, 2021"
        },
        {
          id: 2,
          img1: "img3A.webp",
          img2: "img3B.webp",
          title: "Taal Volcano Ash Coats Philippine Island of Luzon",
          description: "The Taal volcano, in Taal Lake on the Philippine island of Luzon, erupted on Jan. 12, 2020. During the weeks that followed, wet, heavy ash fell back to Earth, turning the lush green landscape (2019 image) a grayish brown (2020 image). As the ash dried, it hardened from a mud-like consistency to that of cement, damaging most of the island's crops and other vegetation.",
          timeline: "Dec. 6, 2019 - March 11, 2020"
        },
        {
          id: 3,
          img1: "img4A.webp", // 4A is wrong and need to change it
          img2: "img4B.webp",
          title: "Flooding in Mali's Delta",
          description: "In summer 2020, exceptionally heavy rains in the Guinea Highlands of West Africa greatly intensified seasonal floods on the Niger River and in central Mali's vast inland delta, which had once been a lake bottom. According to Mali’s National Directorate of Water Resources, peak water levels tied those of 2018, which were the highest since 1969. The October image shows the delta flooded. Standing water appears black. Many areas appear green because bourgou grass, rice, and other plants grew in the shallow waters. For comparison, the May image shows the dry landscape before the rains",
          timeline: "May 22, 2020 - Oct. 29, 2020"
        },
        {
          id: 4,
          img1: "img5A.webp",
          img2: "img5B.webp",
          title: "German Mines Transform into Lakes",
          description: "Central Germany was one of the world's top producers of lignite (brown coal). But the rise of alternate energy sources resulted in the closing of most of the pits where lignite was mined, and at least 140 were reclaimed as lakes. These false-color images show the conversions over the last three decades near the city of Leipzig. Vegetation appears red, water is dark blue or black, and urban areas are tan or gray. Lake Geiseltal (large lake at left of the 2020 image), which has a vineyard growing on its slopes, is Germany's largest artificial lake. Plans call for flooding about 20 more mines south of Leipzig, creating a network of waterways stretching over 120 miles (200 kilometers).",
          timeline: "April 29, 1987 - April 23, 2020"
        },
        {
          id: 5,
          img1: "img6A.webp",
          img2: "img6B.webp",
          title: "Flooding Near Sydney, Australia",
          description: "The 2021 image shows flooding in the Hawkesbury-Nepean River system, along the western edge of Sydney, Australia, where the water rose to its highest crest since 1961. At least 40,000 people were evacuated and several died across New South Wales. Farmers suffered significant crop and livestock losses. Heavy rain had fallen for several days in late summer, and choke points downstream forced the river water to pile up in what authorities called a \"bathtub effect.\"",
          timeline: "April 5, 2020 - March 23, 2021"
        },
        {
          id: 6,
          img1: "img7A.webp",
          img2: "img7B.webp",
          title: "Fast Change in Great Lakes Ice",
          description: "Great Lakes ice cover has declined about 5% each decade since the early 1970s. In keeping with that trend, winter 2020-21 was generally a low-ice season, except for a short period in February, when a brief influx of frigid Arctic air froze nearly half the surface of the lakes. The February image shows the lakes near the peak of the icy blip. The March image shows the scene just 11 days later, when only 15% of the surface was frozen.",
          timeline: "Feb. 20, 2021 - March 3, 2021"
        },
        {
          id: 7,
          img1: "img8A.webp",
          img2: "img8B.webp",
          title: "Monsoon Flooding in Bangladesh",
          description: "These images show eastern Bangladesh before and after unusually severe flooding from monsoon rains. According to a report on Aug. 19, 2020, by the United Nations Office for the Coordination of Humanitarian Affairs, flooding in Bangladesh damaged some 1.3 million homes, displaced more than 167,000 families, and affected more than 420,000 acres of agricultural land. In these false-color images, constructed from a combination of visible and infrared light, water appears navy blue and black, clouds are white or cyan, and vegetation is bright green.",
          timeline: "June 2, 2020 - July 25, 2020"
        },
        {
          id: 9,
          img1: "img9A.webp",
          img2: "img9B.webp",
          title: "Lake Victoria's Rising Waters",
          description: "These images show changes in Winam Gulf, a northeastern extension of Lake Victoria, Africa's largest lake. Months of intense rain raised the water level to the highest point in the three decades of measurement by satellite, putting lakeside communities at risk of flooding. Many of the green patches within the gulf are vegetation. Suspended sediment (particles of soil or other materials) colors some of the water brown.",
          timeline: "May 8, 2013 - May 27, 2021"
        },
        {
          id: 10,
          img1: "img10A.webp",
          img2: "img10B.webp",
          title: "Highs and Lows of China's Poyang Lake",
          description: "Poyang is China's largest freshwater lake. It typically shrinks during the dry winters and regains its bulk during the summer rains, but it went to extremes in 2019-20. Its water level in December 2019 was the lowest in 60 years, while in July 2020 it was the highest on record. These images are in false color, using a combination of visible and infrared light that clarifies the boundary between water and land. Water appears black and navy blue, vegetation is bright green, and clouds are white or cyan.",
          timeline: "Dec. 8, 2019 - July 14, 2020"
        },
        {
          id: 11,
          img1: "img11A.webp",
          img2: "img11B.webp",
          title: "Flooding in Northeastern China",
          description: "The 2020 image (right) shows flooding in northeastern China along the Songhua River and its tributaries after a historically rainy monsoon season, capped by persistent rainfall from the remnants of Typhoon Maysak. The image on the left shows the same area a year earlier. In these false-color images, vegetation appears green, water is dark blue, and bare land is brown.",
          timeline: "Nov. 1, 2019 - Oct. 25, 2020"
        },
        {
          id: 12,
          img1: "img12A.webp",
          img2: "img12B.webp",
          title: "India's Lonar Lake Changes Color",
          description: "Over the span of a few days in June 2020, Lonar Lake in west-central India changed from green to pink. Warm, dry weather had evaporated a significant amount of the lake's water, leaving salts behind. Scientists speculate that with the increased salt concentration, a rapid rise in the numbers of salt-loving microorganisms caused the color change. A similar phenomenon happens periodically in Iran’s Lake Urmia and many Russian lakes when hot weather shrinks the lake and the water grows saltier.",
          timeline: "May 25, 2020 - June 10, 2020"
        },
        {
          id: 13,
          img1: "img13A.webp",
          img2: "img13B.webp",
          title: "\"Great Migration\" Back to Atlanta, Georgia",
          description: "In a reversal of the \"Great Migration\" north of the early 20th century, people from the Northeast and Midwest have been moving to Atlanta, Georgia, making it one of the fastest growing metropolitan areas in the U.S. These false-color images have been processed to emphasize the contrast between urban and forested or rural areas. Much of the new development visible in the 2020 image is relatively distant from downtown Atlanta."
        },
        {
          id: 14,
          img1: "img14A.webp",
          img2: "img14B.webp",
          title: "Two Kenyan Lakes Expand, Threatening Both",
          description: "Torrential rains in Kenya's Great Rift Valley have swollen two important lakes and increased concern that they will merge. These images, in which north is to the left, show the southern end of Lake Baringo (left) and the northern end of Lake Bogoria (dark area at upper right). Both have enlarged significantly in recent years, reducing the distance between them. Baringo contains fresh water, whereas Bogoria, a World Heritage site (along with two other lakes in the same system), is alkaline. Merging their waters would threaten their respective wildlife.",
          timeline: "April 13, 1973 - May 6, 2020"
        },
        {
          id: 15,
          img1: "img15A.webp",
          img2: "img15B.webp",
          title: "Stalled Landslide Threatens Tsunami in Alaskan Fjord",
          description: "A slow-motion landslide on the slope that defines the western side of Barry Arm, one of the glacial fjords of Alaska's Prince William Sound, has stalled. But scientists warn that the mountainside could fail catastrophically and slide into the fjord, endangering people in the area with a tsunami hundreds of feet high. The slide appears to have begun at least 50 years ago, but sped up between 2009 and 2015 as warming temperatures shortened Barry Arm Glacier, which had supported the slope's base. The mountainside slid about 400 feet (120 meters) between 2010 and 2017, but has moved little since then.",
          timeline: "Sept. 15, 2013 - Aug. 24, 2019"
        },
        {
          id: 16,
          img1: "img16A.webp",
          img2: "img16B.webp",
          title: "Invasion of the Water Hyacinths Across Valsequillo Reservoir, Mexico",
          description: "These images show the spread of water hyacinths across the Valsequillo reservoir of central Mexico. The floating plants, native to the Amazon basin, are relentless invaders in other parts of the world. They obstruct waterways, clog hydropower plants, and block sunlight from penetrating the water’s surface. Some scientists attribute the problem to water pollution: Nutrients in untreated sewage, which often accompanies rapid urbanization, enable the plants to thrive. In these false-color images, clear water is dark blue and vegetation is red. The brighter the red, the more robust the vegetation.",
          timeline: "Jan. 10, 2000 - Jan. 9, 2020"
        },
        {
          id: 17,
          img1: "img17A.webp",
          img2: "img17B.webp",
          title: "Spring in the Kulunda Steppe, Russia-Kazakhstan Border",
          description: "This portion of the Kulunda Steppe, which straddles the Russia-Kazakhstan border, displays a common springtime transformation from the white of snow and ice to the green of vegetation. Less common is Lake Kuchukskoye's change from green to pink as rosy, salt-loving organisms in the lake multiplied. Hot weather had increased evaporation and therefore the lake's salt concentration, prompting the population explosion.",
          timeline: "April 1, 2020 - June 11, 2020"
        },
        {
          id: 18,
          img1: "img18A.webp",
          img2: "img18B.webp",
          title: "Sea Ice Declines in Hudson Bay",
          description: "Hudson Bay, which is considered a sea of the Arctic Ocean despite being surrounded by land, freezes over completely in winter and thaws in summer. These images show the decrease in ice over the course of 16 days in July 2020. During the thaw, polar bears travel over the slowly melting sea ice to hunt for ringed seals and other prey. When the ice becomes too scarce, the bears fast and wait for it to return. The area has lost about a third of the polar bear population since the 1980s, dropping the count from about 1200 to 800, apparently because declining summer sea ice has given them less opportunity to feed.",
          timeline: "July 13, 2020 - July 29, 2020"
        },
        {
          id: 19,
          img1: "img19A.webp",
          img2: "img19B.webp",
          title: "Ice Tongue Fracture and Loss, Thwaites Glacier, West Antarctica",
          description: "A thick mass of floating ice, called an \"ice tongue\" stretches from Thwaites Glacier, which sits on solid ground in West Antarctica, into the Amundsen Sea. These images show the fracturing and loss of much of the ice tongue from 2001 to 2019. Ice moving from land to sea contributes to sea-level rise, and the amount of ice flowing into the sea from Thwaites has doubled in the span of three decades.",
          timeline: "Dec. 2, 2001 - Dec. 28, 2019"
        },
        {
          id: 20,
          img1: "img20A.webp",
          img2: "img20B.webp",
          title: "Hurricane Laura Floods Southwestern Louisiana",
          description: "Hurricane Laura made landfall the night of Aug. 26, 2020, as a Category 4 storm. It battered southwestern Louisiana with sustained winds of about 150 mph (240 kph), a catastrophic storm surge from the Gulf of Mexico, and heavy rain. The Aug. 29 image shows flooded areas around the towns of Cameron and Creole. The images are displayed in false color that helps to distinguish flooded areas (navy blue and black) from drier ground. Vegetation appears bright green and clouds are cyan.",
          timeline: "Aug. 13, 2020 - Aug. 29, 2020"
        },
        {
          id: 21,
          img1: "img21A.webp",
          img2: "img21B.webp",
          title: "Southeastern Australia Turns Green",
          description: "Much of this region in southeastern Australia suffered its driest three years on record, according to the country's Bureau of Meteorology, until heavy rains brought relief in early 2020.",
          timeline: "May 25, 2018 - June 5, 2020"
        },
        {
          id: 22,
          img1: "img22A.webp",
          img2: "img22B.webp",
          title: "Spring Greening in Taklamakan Desert, China",
          description: "Taklamakan is China's hottest, driest and largest desert. In the local Ugyur language, the name roughly translates to, “You go in, but you won’t come out.” But even in this arid place, springtime brings plant life. These images show a portion of the Taklamakan Desert near the oasis town of Hotan before and after sizable areas sprouted vegetation, watered to a large extent by runoff from the Kunlun Mountains (bottom).",
          timeline: "May 25, 2018 - June 5, 2020"
        },
        {
          id: 23,
          img1: "img23A.webp",
          img2: "img23B.webp",
          title: "Recovery of Mount St. Helens, Washington",
          description: "Mount St. Helens erupted violently in 1980, destroying hundreds of square miles of area forest. Four years later, the affected landscape was still largely barren, as the 1984 image shows. But four decades after the blast, the region had enjoyed a great deal of recovery, as seen in the 2020 image. The large white areas are snow.",
          timeline: "June 17, 1984 - April 17, 2020"
        },
        {
          id: 24,
          img1: "img24A.webp",
          img2: "img24B.webp",
          title: "James River Floods in South Dakota",
          description: "These images show a portion of the James River in eastern South Dakota. The 2015 image depicts the river in a typical spring, while in the 2020 image, it is overflowing its banks. This and other sections of the river had been at flood level since spring 2019. (See Flooding Limits Planting in South Dakota.) In these false-color images, ice appears light blue and water is dark blue. The blue area merging with the James from below is Putney Slough, which also flooded.",
          timeline: "March 10, 2015 - March 23, 2020"
        },
        {
          id: 25,
          img1: "img25A.webp",
          img2: "img25B.webp",
          title: "Travel Reduced Around Wuhan, China",
          description: "The bright areas in these nighttime images are the lights of Wuhan, China, and surrounding population centers. The threads of light connecting these areas in the January image are highways, made visible by cars and trucks. Most of the highways disappear in the February image, taken after Chinese authorities suspended travel in an effort to contain the novel coronavirus.",
          timeline: "Jan. 19, 2020 - Feb. 4, 2020"
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
