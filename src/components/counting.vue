<template>
  <div data-app class="container">
    <div class="row mt-3">
      <div class="col-6">
        <v-btn v-b-modal.modal-atribuir-contagem-aut class="btn btn-danger">Atribuir contagem Automatica</v-btn>
      </div>
      <div class="col-6">
        <v-btn v-b-modal.modal-atribuir-contagem class="btn btn-warning">Atribuir contagem</v-btn>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-3">
        <v-select :items="contagemList" label="Contagem"></v-select>
      </div>
      <div class="col-3">
        <v-select :items="parametroList" label="Parametro"></v-select>
      </div>
      <div class="col-6">
        <v-text-field
          v-model="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <b-card title="Endereços não atribuídos" class="mb-2 mt-2">
          <div v-for="address in addressList" :key="address.id">
            <v-checkbox :label="address.addressName"></v-checkbox>
          </div>
        </b-card>
      </div>
      <div class="col-6">
        <b-card title="Endereços atribuídos" class="mb-2 mt-2">
          <div v-for="address in addressListAttr" :key="address.id">
            <div class="mb-4 btn-success" style="border-radius: 5px">
              <p class="text-center">
                {{ address.addressName }} ({{ address.responsable }})
              </p>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <b-modal id="modal-atribuir-contagem" title="Atribuir contagem">
      <v-select :items="userList" label="Usuario"></v-select>
    </b-modal>
     <b-modal id="modal-atribuir-contagem-aut" title="Atribuir contagem">
      <p>Deseja atribuir de forma Automatica a Contagem?</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {},
  name: "counting",
  data() {
    return {
      userList:['Joao','Jose'],
      parametroList: ["Usuario", "Endereco"],
      contagemList: ["Contagem 1", "Contagem 2"],
      addressList: [
        { id: 1, addressName: "12-15-25-85", responsable: "Joao" },
        { id: 2, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 3, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 4, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 5, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 6, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 7, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 8, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 9, addressName: "15-25-96-85", responsable: "Jose" },
      ],
      addressListAttr: [
        { id: 1, addressName: "12-15-25-85", responsable: "Joao" },
        { id: 2, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 3, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 4, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 5, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 6, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 7, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 8, addressName: "15-25-96-85", responsable: "Jose" },
        { id: 9, addressName: "15-25-96-85", responsable: "Jose" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
