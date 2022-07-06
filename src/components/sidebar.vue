<template>
  <div>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://iconarchive.com/download/i89179/icons8/ios7/Users-User-Male-4.ico"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{user.userName}}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="$emit('select', item.action)"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="p-2">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import userService from "../service/userService";
export default {
  name: "sidebar",
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Geral",
          icon: "mdi-home-city",
          action: null,
        },
        {
          title: "Atribuir Endereço",
          icon: "mdi-account-details-outline",
          action: "counting",
        },
        {
          title: "Usuarios",
          icon: "mdi-account-group-outline",
          action: "userDetail",
        },
        {
          title: "Grupo de Produtos",
          icon: "mdi-package",
          action: "groupProduct",
        },
        {
          title: "Produtos",
          icon: "mdi-package-variant",
          action: "productDetail",
        },
        {
          title: "Endereços",
          icon: "mdi-clipboard-list",
          action: "addressDetail",
        },
      ],
      mini: false,
      user:null
    };
  },
  mounted(){
    new userService().getUsers().then(data=>{
      if(!data.data.userGroup.admin){
        window.location.replace('/')
      }else{
        this.user = data.data
      }
    }).catch(()=>{
      window.location.replace('/')
    })
  },
  methods: {},
};
</script>

<style scoped>
</style>
