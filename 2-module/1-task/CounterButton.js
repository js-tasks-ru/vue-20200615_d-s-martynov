const template = '<button type="button" @click="clickHandler">{{clickCount}}</button>';

export const CounterButton = {
  template,

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      clickCount: this.count === undefined || this.count === null ? 0 : this.count
    }
  },

  model: {
    prop: 'count',
    event: 'increment'
  },

  methods: {
    clickHandler(e) {
      this.clickCount++;
      this.$emit('increment', this.clickCount);
    }
  }
};
