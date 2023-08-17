<template>
  <nav>
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      location="top"
      color="success"
    >
      <span>Awesome you added a new project</span>
      <v-btn flat color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat app>
      <!----Hamburger to show the drawer-->
      <v-app-bar-nav-icon
        class="text-grey"
        v-on:click="drawer=!drawer"
      ></v-app-bar-nav-icon>
      <!----title of the toolbar-->
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-----dropdown menu--->
      <v-btn prepend-icon="mdi-arrow-down-drop-circle" color="grey">
        Menu
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
            >
              <v-list-item-title>{{ link.text }} </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
      <!----end of menu-->
      <v-btn flat append-icon="mdi-export" color="grey">Sign Out</v-btn>
    </v-toolbar>
    <!---navigation drawer-->
    <v-navigation-drawer app v-model="drawer" class="bg-primary">
      <v-col align="center">
        <v-avatar size="100">
          <v-img src="/avatar-1.png"></v-img>
        </v-avatar>
        <p class="text-white text-subtitle-1 mt-1">The net ninja</p>
      </v-col>
      <!--adding the popup---->
      <v-col class="mt-4 mb-3">
        <PopUp @projectAdded="snackbar= true" />
      </v-col>

      <v-list v-for="link in links" :key="link.text">
        <v-list-item
          class="text-white"
          :title="link.text"
          :prepend-icon="link.icon"
          router
          :to="link.route"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import PopUp from './PopUp.vue'
export default{
        name:'NavBar',
        components:{
          PopUp
        },
        data(){
                return{
                        drawer:false,
                        links:[
                                {icon:'mdi-view-dashboard',text:'Dashboard', route:'/'},
                                {icon:'mdi-folder',text:'My Projects', route:'/projects'},
                                {icon:'mdi-account-multiple-plus',text:'Team', route:'/team'},

                        ],
                        snackbar:false,
                }
        }
}
</script>
