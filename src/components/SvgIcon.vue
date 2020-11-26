<template>
  <component :is="dynamicIcon" class="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicIcon() {
      try {
        const iconPath = `svg/${this.icon}.svg`;
        return require(iconPath).default; // eslint-disable-line
      } catch (e) {
        console.error(e);
        return '';
      }
    },
  },
};
</script>
