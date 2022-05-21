<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <sidebar/>
      </div>
      <div class="col-9">
        <general/>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
import general from '../components/general.vue'

export default {
  name: "dashboard",
  components:{
    sidebar,
    general
  },
  data() {
    return {
      
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
