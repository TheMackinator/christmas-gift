<template>
  <div class="survey-question">
    {{question.name}}
  </div>
</template>

<script>
  export default {
    props: {
      question: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>