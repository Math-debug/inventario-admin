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
    <b-modal id="modal-newUser" title="Novo Grupo">
      <v-text-field label="Grupo de produtos"></v-text-field>
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
      headers: [
        {
          text: "Grupo de Produto",
          value: "grupo",
        },
      ],
      desserts: [
        {
          grupo: "Remedio",
        },
        {
          grupo: "Racao",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
