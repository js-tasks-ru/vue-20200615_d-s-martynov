<template>
  <button @click="handleClick">{{ localCount }}</button>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        default: 0
      }
    },
    model: {
      prop: 'count',
      event: 'increment'
    },
    data() {
      return {
        localCount: this.count === undefined || this.count == null ? 0 : this.count
      }
    },
    methods: {
      handleClick() {
        this.localCount++;
        this.$emit('increment', this.localCount);
      }
    },
    watch: {
      'count'(value) {
        this.localCount = value;
      }
    }
  };
</script>

<style></style>
