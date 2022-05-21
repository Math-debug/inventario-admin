<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-4">
        <v-btn class="btn btn-success">Iniciar Inventario</v-btn>
      </div>
      <div class="col-4">
        <v-btn class="btn btn-warning">Nova Contagem</v-btn>
      </div>
      <div class="col-4">
        <v-btn class="btn btn-danger">Finalizar Inventario</v-btn>
      </div>
    </div>
    <div class="row mt-5">
      <h3 class="text-center">Progresso das Constagens</h3>
      <span>Progresso da contagem 1 : <strong>50%</strong></span>
      <b-progress max="100" height="2rem" variant="success">
        <b-progress-bar value="50"> </b-progress-bar>
      </b-progress>
    </div>
    <div class="row mt-3">
      <span>Progresso da contagem 2 : <strong>20%</strong></span>
      <b-progress max="100" height="2rem" variant="success">
        <b-progress-bar value="20"> </b-progress-bar>
      </b-progress>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <h3 class="text-center">Divergencias</h3>
        <v-card>
          <v-card-title>Bravecto (100111)</v-card-title>
          <v-card-text>Contagem 1: 10 unid</v-card-text>
          <v-card-text>Contagem 2: 9 unid</v-card-text>  
        </v-card>  
      </div>
      <div class="col-12 mt-5">
        <h3 class="text-center">Progresso por Grupo de Produto (%)</h3>
        <pieChart />
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from "./pieChart.vue";

export default {
  components: {
    pieChart,
  },
  name: "general",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
