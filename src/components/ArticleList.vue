<template>
  <v-container>
    <!-- Switch for sorting order -->
    <v-switch
      v-model="isDescending"
      label="Descending"
      class="mb-4"
      @change="updateFilteredArticles"
    ></v-switch>

    <!-- Search Field -->
    <v-text-field
      v-model="searchQuery"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      append-inner-icon="mdi-chevron-right"
      class="mb-4"
      @input="updateFilteredArticles"
      @keydown.enter="updateFilteredArticles"
      @click:append="updateFilteredArticles"
    ></v-text-field>

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
              <em>RevQ</em> {{ group.volumeNumber || "N/A" }}
              ({{ group.publicationYear }})<span v-if="article.pageStart">:
                {{ article.pageStart }}–{{ article.pageEnd }}</span
              >.
              <a :href="article.url">[{{ article.url }}]</a>
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
          group.articles.sort((a, b) => (a.pageStart || 0) - (b.pageStart || 0));
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
  },
};
</script>

<style>
.mb-4 {
  margin-bottom: 16px;
}
</style>
