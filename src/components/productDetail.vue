<template>
  <div data-app>
    <v-card>
      <v-card-title>
        <v-text-field
          class="col-8"
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-btn v-b-modal.modal-newUser class="col-2 btn btn-success">
          Adicionar
        </v-btn>
        <v-btn v-b-modal.modal-productImport class="col-2 btn btn-warning">
          Importar
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
      <v-text-field label="Rua" @input="setStreet"></v-text-field>
      <v-text-field label="Predio" @input="setBuilding"></v-text-field>
      <v-text-field label="Nivel" @input="setLevel"></v-text-field>
      <v-text-field label="Apartamento" @input="setApartment"></v-text-field>
    </b-modal>
    <b-modal
      id="modal-productImport"
      title="Importar Produtos"
      @cancel="defaultGroup"
      @ok="submitForm"
    >
      <input type="file" ref="file" @change="onFileInput" />
    </b-modal>
  </div>
</template>

<script>
import productService from "../service/productService";
import productGroupService from "../service/productGroupService";
import fileService from "../service/fileService";

export default {
  components: {},
  name: "productDetail",
  mounted() {
    this.load();
  },
  data() {
    return {
      search: "",
      file: "",
      product: {
        productName: null,
        codebar: null,
        productAddress: [
          {
            address: {
              street: null,
              building: null,
              level: null,
              apartment: null,
            },
          },
        ],
      },
      grupoList: [],
      headers: [
        {
          text: "Produto",
          value: "produto",
        },
        { text: "Cod. barras", filterable: false, value: "codebar" },
        { text: "Grupo de produto", filterable: false, value: "groupName" },
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
          groupName:
            list[item].groupProduct != null
              ? list[item].groupProduct.productGroupName
              : null,
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
    setStreet(value) {
      this.product.productAddress[0].address.street = value;
    },
    setBuilding(value) {
      this.product.productAddress[0].address.building = value;
    },
    setLevel(value) {
      this.product.productAddress[0].address.level = value;
    },
    setApartment(value) {
      this.product.productAddress[0].address.apartment = value;
    },
    createProduct() {
      new productService()
        .createProduct(this.product)
        .then(() => {
          this.$swal("Sucesso", "Produto inserido com sucesso!", "success");
          this.load();
        })
        .catch((e) => {
          this.$swal("Opss...", "Erro: " + e, "error");
        });
    },
    onFileInput() {
      this.file = this.$refs.file.files[0];
    },
    submitForm() {
      let formData = new FormData();
      formData.append("arquivo", this.file);
      new fileService()
        .submit(formData, "product")
        .then(() => {
          this.$swal("Sucesso", "Produto inserido com sucesso!", "success");
          this.load();
        })
        .catch((e) => {
          this.$swal("Opss...", "Erro: " + e, "error");
        });
    },
  },
};
</script>

<style scoped>
</style>
