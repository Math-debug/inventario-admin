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
    <b-modal
      id="modal-newUser"
      title="Novo Produto"
      @cancel="defaultProduct"
      @ok="createProduct"
    >
      <v-text-field label="Produto" @input="setProductName"></v-text-field>
      <v-select
        :items="grupoList"
        label="Grupo"
        item-value="value"
        item-text="label"
        @input="setGroup"
      ></v-select>
      <v-text-field label="Cod. Barras" @input="setCodebar"></v-text-field>
    </b-modal>
  </div>
</template>

<script>
import productService from "../service/productService";
import productGroupService from "../service/productGroupService";

export default {
  components: {},
  name: "productDetail",
  mounted() {
    this.load();
  },
  data() {
    return {
      search: "",
      product: {
        productName: null,
        codebar: null,
      },
      grupoList: [],
      headers: [
        {
          text: "Produto",
          value: "produto",
        },
        { text: "Cod. barras", filterable: false, value: "codebar" },
      ],
      desserts: [],
    };
  },
  methods: {
    load() {
      new productGroupService().getProductGroup().then((data) => {
        this.grupoList = [];
        this.productGroupList(data.data);
      });
      new productService().getProduct().then((data) => {
        this.desserts = [];
        this.productList(data.data);
      });
    },
    productGroupList(list) {
      for (let item in list) {
        this.grupoList.push({
          label: list[item].productGroupName,
          value: list[item].idGroupProduct,
        });
      }
    },
    productList(list) {
      for (let item in list) {
        this.desserts.push({
          produto: list[item].productName,
          codebar: list[item].codebar,
        });
      }
    },
    defaultProduct() {
      this.product = {
        productName: null,
        codebar: null,
      };
    },
    setProductName(event) {
      this.product.productName = event;
    },
    setCodebar(event) {
      this.product.codebar = event;
    },
    setGroup(event) {
      this.product.groupProduct = { idGroupProduct: event };
    },
    createProduct() {
      new productService().createProduct(this.product).then(() => {
        this.load();
      });
    },
  },
};
</script>

<style scoped>
</style>
