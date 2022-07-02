<template>
  <div data-app>
    <v-card>
      <v-card-title>
        <v-text-field
          class="col-8"
          v-model="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
        <v-btn v-b-modal.modal-newAddress class="col-2 btn btn-success">
          Adicionar
        </v-btn>
        <v-btn v-b-modal.modal-AddressImport class="col-2 btn btn-warning">
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
      id="modal-newAddress"
      title="Novo Endereco"
      @cancel="defaultGroup"
      @ok="createAddress"
    >
      <v-text-field label="Rua" @input="setStreet"></v-text-field>
      <v-text-field label="Predio" @input="setBuilding"></v-text-field>
      <v-text-field label="Nivel" @input="setLevel"></v-text-field>
      <v-text-field label="Apartamento" @input="setApartment"></v-text-field>
    </b-modal>
    <b-modal
      id="modal-AddressImport"
      title="Importar enderecos"
      @cancel="defaultGroup"
      @ok="submitForm"
    >
      <input type="file" ref="file" @change="onFileInput" />
    </b-modal>
  </div>
</template>

<script>
import fileService from "../service/fileService";
import addressService from "../service/addressService";
import UserService from "../service/userService";

export default {
  components: {},
  name: "addressProduct",
  mounted() {
    this.load();
    new UserService().getUsers().catch(()=>{
      window.location.replace('/')
    })

  },
  data() {
    return {
      file: "",
      search: "",
      address: {
        street: null,
        building: null,
        level: null,
        apartment: null,
      },
      headers: [
        {
          text: "Rua",
          value: "street",
        },
        {
          text: "Predio",
          value: "building",
        },
        {
          text: "Nivel",
          value: "level",
        },
        {
          text: "Apartamento",
          value: "apartment",
        },
      ],
      desserts: [],
    };
  },
  methods: {
    load() {
      new addressService().getAddress().then((data) => {
        this.desserts = [];
        this.addressList(data.data);
      });
    },
    addressList(list) {
      for (let item in list) {
        this.desserts.push({
          street: list[item].street,
          building: list[item].building,
          level: list[item].level,
          apartment: list[item].apartment,
        });
      }
    },
    defaultAddress() {
      this.address = {
        street: null,
        building: null,
        level: null,
        apartment: null,
      };
    },
    setStreet(value) {
      this.address.street = value;
    },
    setBuilding(value) {
      this.address.building = value;
    },
    setLevel(value) {
      this.address.level = value;
    },
    setApartment(value) {
      this.address.apartment = value;
    },
    createAddress() {
      if (
        this.address.apartment == null ||
        this.address.street == null ||
        this.address.level == null ||
        this.address.building == null
      ) {
        this.$swal(
          "Opss...",
          "Erro: Por gentileza preencha todos os campos",
          "error"
        );
      } else {
        new addressService()
          .createAddress(this.address)
          .then(() => {
            this.$swal("Sucesso", "Endereco inserido com sucesso!", "success");
            this.load();
          })
          .catch((e) => {
            this.$swal("Opss...", "Erro: " + e, "error");
          });
      }
    },
    onFileInput() {
      this.file = this.$refs.file.files[0];
    },
    submitForm() {
      let formData = new FormData();
      formData.append("arquivo", this.file);
      new fileService()
        .submit(formData, "address")
        .then(() => {
          this.$swal("Sucesso", "Endereco inserido com sucesso!", "success");
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
