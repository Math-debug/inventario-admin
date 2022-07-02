<template>
  <div data-app>
    <v-card>
      <v-card-title>
        <v-text-field
          class="col-10"
          v-model="search"
          label="Buscar"
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
    <b-modal
      id="modal-newUser"
      title="Novo Grupo"
      @cancel="defaultGroup"
      @ok="createGroup"
    >
      <v-text-field label="Grupo de produtos" @input="setGroup"></v-text-field>
    </b-modal>
  </div>
</template>

<script>
import productGroupService from "../service/productGroupService";
import UserService from "../service/userService";

export default {
  components: {},
  name: "groupProduct",
  mounted() {
    this.load();
     new UserService().getUsers().catch(()=>{
      window.location.replace('/')
    })
  },
  data() {
    return {
      search: "",
      groupProduct: {
        productGroupName: null,
      },
      headers: [
        {
          text: "Grupo de Produto",
          value: "productGroupName",
        },
      ],
      desserts: [],
    };
  },
  methods: {
    load() {
      new productGroupService().getProductGroup().then((data) => {
        this.desserts = [];
        this.groupList(data.data);
      });
    },
    groupList(list) {
      for (let item in list) {
        this.desserts.push({
          productGroupName: list[item].productGroupName,
        });
      }
    },
    defaultGroup() {
      this.groupProduct = {
        productGroupName: null,
      };
    },
    setGroup(event) {
      this.groupProduct.productGroupName = event;
    },
    createGroup() {
      if (
       this.groupProduct.productGroupName == null
      ) {
        this.$swal(
          "Opss...",
          "Erro: Por gentileza preencha todos os campos",
          "error"
        );
      } else {
        new productGroupService()
          .createProductGroup(this.groupProduct)
          .then(() => {
            this.$swal("Sucesso", "Grupo inserido com sucesso!", "success");
            this.load();
          })
          .catch((e) => {
            this.$swal("Opss...", "Erro: " + e, "error");
          });
      }
    },
  },
};
</script>

<style scoped>
</style>
