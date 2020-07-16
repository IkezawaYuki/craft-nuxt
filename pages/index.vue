<template>
  <div class="container">
    <chart
      :chartType="chartType"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue'

export default {
  components: {
    Chart
  },
  data() {
    return {
      chartType: 'PieChart',
      chartData: [
        ['年', '売上', '費用', '収益'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        title: '会社の損益',
        subtitle: '売上',
        width: 500,
        height: 500
      }
    }
  }
}
</script>