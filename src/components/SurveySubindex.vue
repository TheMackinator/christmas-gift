<template>
  <div>
    <h5>{{subIndexTitle}}</h5>
    <survey-question v-for="(question, index) in subindex.questions"
                     :key="`${subindex.index_code}-question${index}-${question.id}`"
                     :question="question" />
  </div>
</template>

<script>
import SurveyQuestion from "components/SurveyQuestion.vue";

export default {
  components: {
    SurveyQuestion,
  },
  props: {
    subindex: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    subIndexTitle() {
      return this.subindex.index;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>