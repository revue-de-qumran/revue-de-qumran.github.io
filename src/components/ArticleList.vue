<template>
  <v-container>
    <v-row
      justify="center" class="d-flex flex-column flex-md-row ma-1" >
      <v-col
      cols="12"
      md="2">
        <!-- Switch for sorting order -->
        <v-switch
          v-model="isDescending"
          label="Order"
          class="mb-4"
          @change="updateFilteredArticles"
        ></v-switch>
      </v-col>
    <v-col
    cols="12"
    md="10">
    <!-- Search Field -->
    <v-text-field
      clearable
      v-model="searchQuery"
      label="Filter"
      prepend-inner-icon="mdi-magnify"
      class="mb-4"
      persistent-clear
      @input="updateFilteredArticles"
      @keydown.enter="updateFilteredArticles"
      @click:clear="onClear"

    ></v-text-field>

    </v-col>
    </v-row>

    <!-- Results -->
    <v-expansion-panels
      multiple
      v-model="expandedPanels"
    >
      <v-expansion-panel
        v-for="(group, index) in filteredArticles"
        :key="index"
        class="bg-background"
      >
        <v-expansion-panel-title v-if="group.volumeNumber">
          <h3>Volume {{ group.volumeNumber || "N/A" }} - ({{ group.publicationYear }})</h3>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="(article, i) in group.articles"
            :key="i"
            class="article"
          >
            <p>
              <v-chip
                variant="elevated"
                :color="analyzeSubType(article.docSubType)"
                class="mr-2"
              >
                {{ article.docSubType }}
              </v-chip>
              <strong>{{ article.creator }}</strong>
              <span v-if="article.creator">, </span>
              <span>{{ capitalizeTitle(article.title) }}</span>,
              <em>RevQ</em> {{ group.volumeNumber || "N/A" }}  <span v-if="article.issueNumber"> <b>issue</b> {{ article.issueNumber }}</span>
              ({{ group.publicationYear }})<span v-if="article.pageStart">:
                {{ article.pageStart }}–{{ article.pageEnd }}</span
              >.
              <a :href="article.url" target="_blank">[{{ article.url }}]</a>
            </p>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Papa from "papaparse";

export default {
  data() {
    return {
      isDescending: true,
      searchQuery: "",
      articles: [], // Articles chargés depuis le CSV
      filteredArticles: [], // Articles filtrés
      expandedPanels: [], // Contrôle des panneaux ouverts
    };
  },
  computed: {
    groupedArticles() {
      const grouped = {};
      this.articles.forEach((article) => {
        const key = `${article.publicationYear}-${article.volumeNumber || "N/A"}`;
        if (!grouped[key]) {
          grouped[key] = {
            volumeNumber: article.volumeNumber,
            publicationYear: article.publicationYear,
            articles: [],
          };
        }
        grouped[key].articles.push(article);
      });
      return Object.values(grouped)
        .sort((a, b) => {
          if (a.publicationYear !== b.publicationYear) {
            return this.isDescending
              ? b.publicationYear - a.publicationYear
              : a.publicationYear - b.publicationYear;
          }
          if (a.volumeNumber !== b.volumeNumber) {
            return this.isDescending
              ? (b.volumeNumber || 0) - (a.volumeNumber || 0)
              : (a.volumeNumber || 0) - (b.volumeNumber || 0);
          }
          return 0;
        })
        .map((group) => {
      // Tri des articles dans chaque groupe par issueNumber puis pageStart
      group.articles.sort((a, b) => {
        // Tri par issueNumber (par défaut "N/A" traité comme 0)
        if ((a.issueNumber || 0) !== (b.issueNumber || 0)) {
          return (a.issueNumber || 0) - (b.issueNumber || 0);
        }
        // Ensuite, tri par pageStart
        return (a.pageStart || 0) - (b.pageStart || 0);
      });
      return group;
        });
    },


  },
  mounted() {
    this.loadCSV();
  },
  methods: {
    loadCSV() {
      const csvPath = "/src/assets/data/rdq_metadata.csv";
      Papa.parse(csvPath, {
        download: true,
        header: true,
        complete: (result) => {
          this.articles = result.data.map((item) => ({
            creator: item.creator,
            title: item.title,
            publicationYear: parseInt(item.publicationYear, 10),
            volumeNumber: item.volumeNumber
              ? parseInt(item.volumeNumber, 10)
              : null,
            issueNumber: item.issueNumber
              ? item.issueNumber.match(/\(([^)]+)\)/)?.[1] || null
              : null,
            pageStart: item.pageStart ? parseInt(item.pageStart, 10) : null,
            pageEnd: item.pageEnd ? parseInt(item.pageEnd, 10) : null,
            url: item.url,
            docSubType: item.docSubType,
          }));
          this.updateFilteredArticles(); // Initialise la liste filtrée
        },
        error: (error) => {
          console.error("Error loading CSV:", error);
        },
      });
    },
    updateFilteredArticles() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        // Si le champ de recherche est vide, afficher tous les articles
        this.filteredArticles = this.groupedArticles;
        this.expandedPanels = []; // Aucun panneau développé
        return;
      }

      // Filtrer les articles
      this.filteredArticles = this.groupedArticles
        .map((group) => ({
          ...group,
          articles: group.articles.filter(
            (article) =>
              article.creator?.toLowerCase().includes(query) ||
              article.title?.toLowerCase().includes(query)
          ),
        }))
        .filter((group) => group.articles.length > 0); // Exclut les groupes vides

      // Développer tous les panneaux si des résultats sont trouvés
      this.expandedPanels = this.filteredArticles.map((_, index) => index);
    },
    capitalizeTitle(title) {
      const minorWords = [
        "and",
        "or",
        "but",
        "for",
        "nor",
        "a",
        "an",
        "the",
        "in",
        "on",
        "at",
        "to",
        "with",
        "from",
        "by",
      ];

      return title
        .toLowerCase()
        .split(" ")
        .map((word, index, array) => {
          const isFirstOrLast = index === 0 || index === array.length - 1;
          if (isFirstOrLast || !minorWords.includes(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
          return word;
        })
        .join(" ");
    },
    analyzeSubType(category) {
      if (category == "research-article") {
        return "success";
      } else if (category == "misc") {
        return "info";
      } else if (category == "book-review") {
        return "warning";
      }
    },
    onClear() {
    this.searchQuery = ""; // Vide le champ de recherche
    this.updateFilteredArticles(); // Réinitialise la liste des articles
  },
  },
};
</script>

<style>
.mb-4 {
  margin-bottom: 16px;
}
</style>


<!-- groupé par année de publication et numéro de volume 

    groupedArticles() {
      const grouped = {};
      this.articles.forEach((article) => {
        const key = ${article.publicationYear}-${article.volumeNumber || "N/A"};
        if (!grouped[key]) {
          grouped[key] = {
            volumeNumber: article.volumeNumber,
            publicationYear: article.publicationYear,
            articles: [],
          };
        }
        grouped[key].articles.push(article);
      });
      return Object.values(grouped)
        .sort((a, b) => {
          if (a.publicationYear !== b.publicationYear) {
            return this.isDescending
              ? b.publicationYear - a.publicationYear
              : a.publicationYear - b.publicationYear;
          }
          if (a.volumeNumber !== b.volumeNumber) {
            return this.isDescending
              ? (b.volumeNumber || 0) - (a.volumeNumber || 0)
              : (a.volumeNumber || 0) - (b.volumeNumber || 0);
          }
          return 0;
        })
        .map((group) => {
          group.articles.sort((a, b) => (a.pageStart || 0) - (b.pageStart || 0));
          return group;
        });
    },
-->

<!--


    groupedArticles() {
      const grouped = {};
      this.articles.forEach((article) => {
        // Modifier la clé pour inclure issueNumber
        const key = `${article.publicationYear}-${article.volumeNumber || "N/A"}`;

        if (!grouped[key]) {
          grouped[key] = {
            publicationYear: article.publicationYear,
            volumeNumber: article.volumeNumber,
            issueNumber: article.issueNumber,
            articles: [],
          };
        }
        grouped[key].articles.push(article);
      });

      return Object.values(grouped)
      .sort((a, b) => {
        // Tri par publicationYear
        if (a.publicationYear !== b.publicationYear) {
          return this.isDescending
            ? b.publicationYear - a.publicationYear
            : a.publicationYear - b.publicationYear;
        }
        // Tri par volumeNumber
        if (a.volumeNumber !== b.volumeNumber) {
          return this.isDescending
            ? (b.volumeNumber || 0) - (a.volumeNumber || 0)
            : (a.volumeNumber || 0) - (b.volumeNumber || 0);
        }
        // Tri par issueNumber
        if (a.issueNumber !== b.issueNumber) {
          return this.isDescending
            ? (b.issueNumber || 0) - (a.issueNumber || 0)
            : (a.issueNumber || 0) - (b.issueNumber || 0);
        }
        return 0;
      })
      .map((group) => {
        group.articles.sort((a, b) => (a.pageStart || 0) - (b.pageStart || 0));
        return group;
      });
    },

-->