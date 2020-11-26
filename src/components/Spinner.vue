<template>
  <div :class="classes">
    <svg class="spinner-inner" viewBox="0 0 50 50">
      <circle
        class="spinner-path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'default',
      validator: val => ['default', 'tiny'].includes(val),
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ['spinner', `spinner--size-${this.size}`];
      if (this.center) classes.push('spinner--center');
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner {
  color: var(--gray-darker);

  &--center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &--size-default .spinner-inner {
    width: 30px;
    height: 30px;
  }

  &--size-tiny .spinner-inner {
    width: 18px;
    height: 18px;
  }
}

.spinner-inner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  display: block;
}

.spinner-path {
  stroke: currentColor;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
