<template>
  <div>
    <canvas id="contagem-grupo-produto"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "PlanetChart",
  data() {
    return {
      planetChartData: {
        type: "bar",
        data: {
         labels: ['Medicamentos', 'Acessorios', 'Brinquedos', 'Racoes', 'Outros'],
        datasets: [{
            label: 'Grupo de Produtos',
            data: [42, 55, 67, 30, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById('contagem-grupo-produto');
    new Chart(ctx, this.planetChartData);
  }
};
</script>