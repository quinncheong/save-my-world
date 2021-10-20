<template>
  <div style="height:600px;width: 600px;display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="doughnutChart.id"
        ref="chartRef"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        :options="doughnutChart.options"
    ></vue3-chart-js>

    <button @click="updateChart">Update Chart</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  setup () {
    const chartRef = ref(null)

    const doughnutChart = {
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 20, 80, 10]
          }
        ]
      },
      options: {
        plugins: {}
      }
    }

    const updateChart = () => {
      doughnutChart.options.plugins.title = {
        text: 'Updated Chart',
        display: true
      }
      doughnutChart.data.labels = ['Cats', 'Dogs', 'Hamsters', 'Dragons']
      doughnutChart.data.datasets = [
        {
          backgroundColor: [
            '#333333',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [100, 20, 800, 20]
        }
      ]

      chartRef.value.update(null)
    }

    return {
      doughnutChart,
      updateChart,
      chartRef
    }
  },
}

// Old options api
// export default {
//   name: "TempChart",
//   components: {
//     Vue3ChartJs,
//   },
//   data() {
//     return {
//       chartId: "doughnut",
//       chartType: "doughnut",
//       labels: ["vvvvv", "EmberJs", "ReactJs", "AngularJs"],
//       datasets: [
//         {
//           backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
//           data: [40, 20, 80, 10],
//         },
//       ],
//       options: {
//         plugins: {}
//       }
//     };
//   },
//   methods: {
//     changeData() {
//       console.log("inside the change");
//       this.labels = ["VueeeeeJs", "EmberJs", "ReactJs", "AngularJs"];
//       this.datasets = [
//         {
//           backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
//           data: [10, 20, 80, 10],
//         }
//       ]
//     },
//   },
//   computed: {
//     getData() {
//       let options = {
//         plugins: {}
//       }
//       let data = { labels: this.labels, datasets: this.datasets, options };
//       return data
//     },
//   },
// };
</script>
