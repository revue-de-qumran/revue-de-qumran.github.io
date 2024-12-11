<template>
<v-app id="revuedequmran">
  <div>
    <!-- Première app-bar avec le logo-->
    <v-app-bar
    color="pink-darken-4" 
    density="prominent" flat
    > <!-- or, instead of prominent, add style="padding: 10px 0;" -->
    <v-btn @click="toggleTheme">Toggle Theme</v-btn>
      <v-container class="d-flex justify-center align-center" style="height: 100%;">
        
        <img src="@/assets/logo.png" alt="Logo" style="width: 300px;" />
      </v-container>
    </v-app-bar>

    
    <!-- Deuxième app-bar avec le menu-->
    <v-app-bar color="pink-darken-4">

            <!-- Menu burger -->
            <v-app-bar-nav-icon  class="d-md-none" @click="drawer = !drawer" />

            <!-- Bouton Home -->
             <v-app-bar-title>
            <v-btn  flat to="/">
              <v-icon left dark class="mx-3">mdi-home</v-icon>
              Home
            </v-btn>
          </v-app-bar-title>
    
          <!-- À droite : Menus -->
            <v-btn
              
              flat
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path"
              class="d-none d-md-flex"
            >
              <v-icon left dark class="mx-3">{{ item.icon }}</v-icon>
              <span class="d-none d-lg-flex">
              {{ item.title }}
              </span>
            </v-btn>
    </v-app-bar>

    <!-- Drawer pour le menu burger -->
    <v-navigation-drawer
    v-model="drawer"
    temporary
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>

  <v-main>
    <v-container fluid class="py-0 px-0 bg">
      <RouterView />
    </v-container> 
  </v-main>
  </v-app>


</template>




<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>





export default {
  methods: {
    toggleTheme() {
      const currentTheme = this.$vuetify.theme.global.name;
      this.$vuetify.theme.global.name = currentTheme === 'light' ? 'dark' : 'light';
    },
  },
  name: "App",
  data() {
    return {
      appTitle: 'Welcome !',
      drawer: false, // Contrôle de l'état du menu burger
      menuItems: [
        { title: 'History', path: '/history', icon: 'mdi-history' },
        { title: 'Board', path: '/board', icon: 'mdi-account-group' },
        { title: 'Issues', path: '/issues', icon: 'mdi-table-of-contents' },
        { title: 'Contributors', path: '/contributors', icon: 'mdi-fountain-pen-tip' },
        { title: 'Datas', path: '/datas', icon: 'mdi-database' },
        { title: 'Tools', path: '/tools', icon: 'mdi-tools' },
        { title: 'Cahiers', path: '/cahiers', icon: 'mdi-book-open-blank-variant' },
        { title: 'Contact', path: '/contact', icon: 'mdi-email' },
      ]
    }
  },
};
</script>

<style scoped>
.bg {
  background: url('./assets/background-pattern.png');

}
</style>  







    <!-- <v-row>
    <v-col class="d-flex justify-center">
    <v-sheet class="bg-grey-lighten-5 pa-2">
      <v-img width="300" aspect-ratio="1/1" cover src="/src/assets/logo_black.svg">
        </v-img>
    </v-sheet>
  </v-col>
  </v-row> -->




    <!-- <v-navigation-drawer class="hidden-sm-and-up" v-model="sidebar" app>
      <v-list justify="space-around">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content >{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->


<!-- 
    <v-toolbar  app>
        <v-app-bar-nav-icon class="hidden-sm-and-up" @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      
      <v-toolbar-title>
        
        <v-btn color="pink-darken-3" flat to="/">
          <v-icon left dark class="mx-3">mdi-home</v-icon>
             Home
        </v-btn>
      </v-toolbar-title>
      
      <v-toolbar-items class="d-sm-none d-md-flex d-none d-sm-flex">
        <v-btn color="pink-darken-3" flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark class="mx-3">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
-->