<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <sidebar
        @select="onOpenComponent"
        />
      </div>
      <div class="col-9">
        <div v-if="tela == null">
          <general/>
        </div>
        <div v-else-if="tela == 'counting'">
          <counting/>
        </div>
        <div v-else-if="tela == 'userDetail'">
          <userDetail/>
        </div>
         <div v-else-if="tela == 'productDetail'">
          <productDetail/>
        </div>
         <div v-else-if="tela == 'groupProduct'">
          <groupProduct/>
        </div>
        <div v-else-if="tela == 'addressDetail'">
          <addressDetail/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
import general from '../components/general.vue'
import counting from '../components/counting.vue'
import userDetail from '../components/userDetail.vue'
import productDetail from '../components/productDetail.vue'
import groupProduct from '../components/groupProduct.vue'
import addressDetail from '../components/addressDetail.vue'

export default {
  name: "dashboard",
  components:{
    sidebar,
    general,
    counting,
    userDetail,
    productDetail,
    groupProduct,
    addressDetail
  },
  data() {
    return {
      tela:null
    };
  },
  methods: {
    onOpenComponent: function(event){
      this.tela = event
    }
  },
};
</script>

<style scoped>
</style>
