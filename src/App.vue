<template>
  <div id="app"
       class="content-wrapper">
    <h2 class="text-center page-title">Enkäter</h2>
    <div v-if="!isLoading"
         class="spinner-wrapper">
      <h4>Enkäter läses in</h4>
      <div>
        <spinner />
      </div>
    </div>
    <div class="surveys">
    <survey-item v-for="(survey, index) in surveys"
                 :key="`survey-${index}`"
                 :survey="survey" />
    </div>

  </div>
</template>

<script>
import client from "api/index.js";
import SurveyItem from "components/SurveyItem.vue";
import Spinner from "components/Spinner.vue";

export default {
  components: {
    SurveyItem,
    Spinner,
  },
  data: () => ({
    surveys: [],
    isLoading: false,
  }),
  mounted() {
    this.getSurveys();
  },
  methods: {
    async getSurveys() {
      try {
        this.isLoading = true;
        const response = await client.getListSurveys();
        this.surveys = response;
      } catch (e) {
        this.errorMessage =
          "Kunde inte hämta enkäterna. Försök igen eller kontakta kundservice";
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "styles/base.scss";
</style>
