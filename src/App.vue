<template>
<v-app id="revuedequmran">
  <div>
    <!-- Première app-bar avec le logo-->
    <v-app-bar
    color="primary"
    density="prominent"
    flat
    >

    <!-- Menu déroulant choix thème -->
    <!--
    <v-row class="d-flex">
      <v-col>
        <v-select class="rounded" style="width: 200px;"
              v-model="selectedTheme"
              :items="myThemes"
              @update:modelValue="setTheme()"
            />
      </v-col>
    </v-row>
    -->

      <!-- logo -->
      <v-row>
        <v-col class="ma-6">
          <router-link to="/">
            <v-img class="mx-auto"
            src="/assets/img/Logo.png" alt="Logo"  style="width: 350px;"/>
          </router-link>
        </v-col>
      </v-row>

    </v-app-bar>

    
    <!-- Deuxième app-bar avec le menu-->
    <v-app-bar color="primary-darken-1">

      <!-- Menu burger -->
      <v-app-bar-nav-icon  class="d-md-none" @click="drawer = !drawer" />

      <!-- Bouton Home -->
      <v-app-bar-title>
        <!-- <v-btn  flat to="/">
          <v-icon left dark class="mx-3">mdi-home</v-icon>
          Home
        </v-btn> -->
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
        <span class="d-none d-lg-flex">{{ item.title }}</span>
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
import { ref } from "vue"
import { useTheme } from "vuetify"

const theme = useTheme();
const myThemes = ["light", "uniquely_balanced", "deliciousness", "barbie", "taupe_beige"];
const selectedTheme = ref(myThemes[0]);

const setTheme = () => {
  theme.global.name.value = selectedTheme.value;
  console.log(selectedTheme.value);
};
</script>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: 'Welcome !',
      drawer: false, // Contrôle de l'état du menu burger
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home'},
        { title: 'History', path: '/history', icon: 'mdi-history' },
        { title: 'Board', path: '/board', icon: 'mdi-account-group' },
        { title: 'Issues', path: '/issues', icon: 'mdi-table-of-contents' },
        { title: 'Contributors', path: '/contributors', icon: 'mdi-fountain-pen-tip' },
        { title: 'Datas', path: '/datas', icon: 'mdi-database' },
        { title: 'Tools', path: '/tools', icon: 'mdi-tools' },
        { title: 'Cahiers', path: '/cahiers', icon: 'mdi-book-open-blank-variant' },
        { title: 'Contact', path: '/contact', icon: 'mdi-email' },
      ],
    }
  },
};

</script>

<style>
.v-field {
    max-width: 200px;
  }
</style>