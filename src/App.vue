<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-row>
    <v-col class="d-flex justify-center">
    <v-sheet class="bg-grey-lighten-5 pa-2">
      <v-img width="150" aspect-ratio="1/1" cover src="/src/assets/logo_black.svg">
        </v-img>
    </v-sheet>
  </v-col>
  </v-row>
  <v-app>


    <v-navigation-drawer class="hidden-sm-and-up" v-model="sidebar" app>
      <v-list justify="space-around">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content >{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar  app>


        <v-app-bar-nav-icon class="hidden-sm-and-up" @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      
      <v-toolbar-title>
        
        <!-- <v-img width="150" aspect-ratio="1/1" cover src="/src/assets/logo_black.svg">
        </v-img>
         -->
        
        <v-btn color="pink-darken-3" flat to="/">
          <v-icon left dark class="mx-3">mdi-home</v-icon>
             Revue de Qumrân
        </v-btn>
      </v-toolbar-title>
      
      <v-toolbar-items class="d-sm-none d-md-flex d-none d-sm-flex">
        <v-btn color="pink-darken-3" flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark class="mx-3">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-container fluid class="py-0 px-0">
      <RouterView />
    </v-container>

  </v-app>


</template>






<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: 'Welcome !',
      sidebar: false,
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

<style>

</style>  