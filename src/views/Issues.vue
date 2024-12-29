<template>
  <v-row justify="center" class="d-flex flex-column flex-md-row">
    
    <v-col class="bg-secondary-darken-1"  col="12" md="2">
    </v-col>
    
    <v-col class="bg-secondary-darken-2 pa-16 text-justify" col="12" md="8">
      <h1>List of Articles</h1>
      <v-row
      justify="center" class="d-flex flex-column flex-md-row ma-1" >
      <v-col
      cols="12"
      md="6">
        <v-card
        href="https://poj.peeters-leuven.be/content.php?url=journal&journal_code=RQ"
        title="Recent issues"
        text="For table of content of articles after 2018, see Peeters Website"
        ></v-card>
      </v-col>
      <v-col
      cols="12"
      md="6">
        <v-card
        href="https://www.jstor.org/journal/revuequmran"
        title="Advanced Search"
        text="To advanced search into the content of journal articles, use JSTOR's search function."
        ></v-card>
      </v-col>
    </v-row>
      <ArticleList />
    </v-col>

    <v-col class="bg-secondary-darken-3" col="12"  md="2">
    </v-col>

  </v-row>
</template>



  
  <script>
  import { VCard } from "vuetify/lib/components/index.mjs";
import ArticleList from "../components/ArticleList.vue";
  
  export default {
    name: "App",
    components: {
      ArticleList,
    },
  };
  </script>