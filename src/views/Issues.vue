<template>

    <v-row justify="center" class="d-flex flex-column flex-md-row">
        <v-col class="bg-red"  col="12" md="2">
        </v-col>
        <v-col class="bg-pink pa-16" col="12"  md="8">
            <h1 class="text-center">Liste des Articles</h1>
            <ArticleList />



            
        </v-col>
        <v-col class="bg-pink-darken-4" col="12"  md="2">
        </v-col>
    </v-row>

</template>



  
  <script>
  import ArticleList from "../components/ArticleList.vue";
  
  export default {
    name: "App",
    components: {
      ArticleList,
    },
  };
  </script>