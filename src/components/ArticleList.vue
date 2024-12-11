<template>
  <v-container>
    <v-switch
      v-model="isDescending"
      label="Descending"
    ></v-switch>
    <v-expansion-panels multiple>
      <v-expansion-panel
        v-for="(group, index) in groupedArticles"
        :key="index"
        class="bg-pink-darken-2"
      >
        <v-expansion-panel-title v-if="group.volumeNumber">
          <h3>Volume {{ group.volumeNumber || "N/A" }} - ({{ group.publicationYear }})</h3>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-for="(article, i) in group.articles" :key="i" class="article">
            <p>
              <v-chip :color=analyzeSubType(article.docSubType) class="mr-2">{{ article.docSubType }}</v-chip>
              <strong>{{ article.creator }}</strong>
              <span v-if="article.creator">, </span>
              <span>{{ capitalizeTitle(article.title) }}</span>,
              <em>RevQ</em> 
              {{ article.volumeNumber || "N/A" }}
              ({{ article.publicationYear }})<span v-if="article.pageStart">: {{ article.pageStart }}–{{ article.pageEnd }}</span>. <a v-bind:href="article.url">[{{ article.url }}]</a>


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
  name: "ArticleList",
  data() {
    return {
      isDescending: true,
      articles: [], // Store parsed articles
    };
  },
  computed: {
    groupedArticles() {
      // Group articles by volumeNumber and publicationYear
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

      // Convert to an array, sort groups and articles within each group
      return Object.values(grouped)
  .sort((a, b) => {
    if (a.publicationYear !== b.publicationYear) {
      // Si tri décroissant, inverse l'ordre
      return this.isDescending
        ? b.publicationYear - a.publicationYear
        : a.publicationYear - b.publicationYear;
    }
    if (a.volumeNumber !== b.volumeNumber) {
      // Si tri décroissant, inverse l'ordre
      return this.isDescending
        ? (b.volumeNumber || 0) - (a.volumeNumber || 0)
        : (a.volumeNumber || 0) - (b.volumeNumber || 0);
    }
    return 0;
  })
        .map((group) => {
          // Sort articles in each group by pageStart
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
            volumeNumber: item.volumeNumber ? parseInt(item.volumeNumber, 10) : null,
            pageStart: item.pageStart ? parseInt(item.pageStart, 10) : null,
            pageEnd: item.pageEnd ? parseInt(item.pageEnd, 10) : null,
            url: item.url,
            docSubType: item.docSubType,
          }));
        },
        error: (error) => {
          console.error("Error loading CSV:", error);
        },
      });
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
                return "success"
            } else if (category == "misc") {
                return "info"
            } else if (category=="book-review")  {
                return "warning"
            }
        }
  },
};
</script>

<style>
.article {
  margin-bottom: 1rem;
}
</style>



