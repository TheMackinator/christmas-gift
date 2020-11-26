<template>
  <div class="box">
    <h3 class="survey-header media">
      <div class="media-content">
        {{surveyTitle}}
      </div>
      <div class="media-right">
        <chevron-down :class="{'collapsed': !isExpanded}"
                      class="icon chevron"
                      @click="toggleSurvey" />
      </div>
    </h3>
    <div v-for="(category, key) in surveyIndexes"
         v-show="isExpanded"
         :key="`${surveyTitle}-${key}`">
      <h4>{{category.index}}</h4>
      <survey-question v-for="question in category.questions"
                       :key="`${surveyTitle}-${category.index_code}-${question.id}`"
                       :question="question" />
      <survey-question v-for="subindex in category.subindexes"
                       :key="`${surveyTitle}-${category.index_code}-${subindex.index_code}`"
                       :question="subindex" />
    </div>
  </div>
</template>

<script>
import SurveyQuestion from "components/SurveyQuestion.vue";
import ChevronDown from "svg/chevron-down.svg";
export default {
  components: {
    SurveyQuestion,
    ChevronDown,
  },
  props: {
    survey: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isExpanded: true,
  }),
  computed: {
    surveyTitle() {
      return this.survey.survey_type;
    },
    surveyIndexes() {
      return this.survey?.indexes ?? {};
    },
  },
  methods: {
    toggleSurvey() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss">
.chevron {
  cursor: pointer;
  transition: all 0.3s ease;
  &.collapsed {
    transform: rotate(180deg);
  }
}
</style>