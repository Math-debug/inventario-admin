<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <sidebar @select="onOpenComponent" />
      </div>
      <div class="col-12">
        <div class="mb-2">
          <div v-if="tela == null">
            <general
              v-bind:clientsOnline="onlineClient"
              v-bind:inventoryStatus="inventoryStatus"
            />
          </div>
          <div v-else-if="tela == 'counting'">
            <counting v-bind:inventoryStatus="inventoryStatus" v-bind:onlineClient="onlineClient"/>
          </div>
          <div v-else-if="tela == 'userDetail'">
            <userDetail />
          </div>
          <div v-else-if="tela == 'productDetail'">
            <productDetail />
          </div>
          <div v-else-if="tela == 'groupProduct'">
            <groupProduct />
          </div>
          <div v-else-if="tela == 'addressDetail'">
            <addressDetail />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue";
import general from "../components/general.vue";
import counting from "../components/counting.vue";
import userDetail from "../components/userDetail.vue";
import productDetail from "../components/productDetail.vue";
import groupProduct from "../components/groupProduct.vue";
import addressDetail from "../components/addressDetail.vue";
import socketF from "../plugins/socket";
import userService from "../service/userService";
import inventoryService from "../service/inventoryService";

export default {
  name: "dashboard",
  components: {
    sidebar,
    general,
    counting,
    userDetail,
    productDetail,
    groupProduct,
    addressDetail,
  },
  data() {
    return {
      tela: null,
      connected: false,
      onlineClient: [],
      inventoryStatus: null,
      user: null,
    };
  },
  created() {
    var socket = socketF();
    socket.connect(
      {},
      (frame) => {
        this.connected = true;
        console.log(frame);
        new userService().getUsers().then((data) => {
          this.user = data.data;
          socket.send("/app/users", {}, JSON.stringify(this.user));
        });
        socket.subscribe("/topic/users", (message) => {
          this.onlineClient = JSON.parse(message.body);
        });
        socket.subscribe("/topic/inventoryStatus", (message) => {
          this.inventoryStatus = JSON.parse(message.body);
        });
      },
      (error) => {
        console.log(error);
        this.connected = false;
      }
    );
    setTimeout(() => {
      new inventoryService().status();
    }, 2000);
  },
  methods: {
    onOpenComponent: function (event) {
      this.tela = event;
    },
  },
};
</script>

<style scoped>
</style>
