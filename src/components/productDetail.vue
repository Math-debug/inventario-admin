<template>
  <div data-app>
    <v-card>
      <v-card-title>
        <v-text-field
          class="col-10"
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-btn v-b-modal.modal-newUser class="col-2 btn btn-success">
          Adicionar
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
    <b-modal id="modal-newUser" title="Novo Produto">
      <v-text-field label="Produto"></v-text-field>
      <v-select :items="grupoList" label="Grupo"></v-select>
      <v-text-field label="Cod. Barras"></v-text-field>
      <v-text-field label="Endereco"></v-text-field>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {},
  name: "userDetail",
  data() {
    return {
      search: "",
      grupoList: ["remedio", "racao"],
      headers: [
        {
          text: "Produto",
          value: "produto",
        },
        { text: "Grupo", filterable: false, value: "grupo" },
        { text: "Cod. barras", filterable: false, value: "codebar" },
        { text: "Endereco", filterable: false, value: "address" },
      ],
      desserts: [
        {
          produto: "produto1",
          grupo: "racao",
          codebar: "1514330014",
          address: "15-25-85-85",
        },
        {
          produto: "produto2",
          grupo: "racao",
          codebar: "1514330014",
          address: "15-25-85-85",
        },
        {
          produto: "produto2",
          grupo: "racao",
          codebar: "1514330014",
          address: "15-25-85-85",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
