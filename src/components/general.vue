<template>
  <div class="container mt-2">
    <div class="row">
      <div class="d-flex justify-content-around">
        <div>
          <v-btn
            refs="newInventory"
            v-b-modal.modal-inventory
            class="btn btn-success"
            :disabled="inventoryStatus"
            >Iniciar Inventario</v-btn
          >
        </div>
        <div>
          <v-btn
            refs="finishInventory"
            v-b-modal.modal-finish
            class="btn btn-danger"
            :disabled="!inventoryStatus"
            >Finalizar Inventario</v-btn
          >
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-3">
      <h3 class="text-center">Usuarios Online</h3>
      <v-card>
        <v-card-text v-for="client in clientsOnline" :key="client.idUser">
          <v-icon>mdi-checkbox-marked-circle</v-icon>{{ client.userName }}</v-card-text
        >
      </v-card>
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
      <div class="col-12 mt-5">
        <h3 class="text-center">Progresso por Grupo de Produto (%)</h3>
        <pieChart />
      </div>
      <div class="col-12">
        <h3 class="text-center">Divergencias</h3>
        <v-card>
          <v-card-title>Bravecto (100111)</v-card-title>
          <v-card-text>Contagem 1: 10 unid</v-card-text>
          <v-card-text>Contagem 2: 9 unid</v-card-text>
        </v-card>
      </div>
    </div>
    <b-modal id="modal-inventory" title="Novo Inventário" @ok="newInventory">
      <p class="my-4">Confirma abertura de novo Inventário?</p>
    </b-modal>
    <b-modal
      id="modal-finish"
      title="Finalizar Inventário"
      @ok="finishInventory"
    >
      <p class="my-4">Confirma finalização do inventário?</p>
    </b-modal>
    <div class="mb-5"></div>
  </div>
</template>

<script>
import pieChart from "./pieChart.vue";
import inventoryService from "../service/inventoryService";
import userService from "../service/userService";

export default {
  props: {
    clientsOnline: Array,
    inventoryStatus: Boolean
  },
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
      user: null,
    };
  },
  mounted() {
    new userService()
      .getUsers()
      .catch(() => {
        window.location.replace("/");
      })
      .then((data) => {
        this.user = data.data;
      });
  },
  methods: {
    newInventory() {
      new inventoryService()
        .createInventory({
          idUser: {
            idUser: this.user.idUser,
          },
        })
    },
    finishInventory() {
      new inventoryService().finishInventory()
    },
  },
};
</script>

<style scoped>
</style>
