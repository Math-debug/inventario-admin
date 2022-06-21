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
    <b-modal id="modal-newUser" title="Novo usuario">
      <v-text-field label="Usuario"></v-text-field>
      <v-text-field
        label="Senha"
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1 = !show1"
        :type="show1 ? 'text' : 'password'"
      ></v-text-field>
      <v-select :items="grupoList" label="Grupo"></v-select>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {},
  name: "userDetail",
  data() {
    return {
      show1: false,
      password: "",
      search: "",
      grupoList: ["admin", "operacao"],
      headers: [
        {
          text: "Usuarios",
          value: "usuario",
        },
        { text: "Grupo", filterable: false, value: "grupo" },
      ],
      desserts: [
        {
          usuario: "joao",
          grupo: "admin",
        },
        {
          usuario: "jose",
          grupo: "operacao",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
