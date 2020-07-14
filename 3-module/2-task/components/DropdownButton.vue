<template>
  <div class="dropdown show" @click="clickButtonHandle">
    <button type="button" :class="{ button: true, dropdown__toggle: true, dropdown__toggle_icon: hasIcon }">
      <app-icon v-if="buttonIcon" :icon="buttonIcon" />
      {{ buttonTitle }}
    </button>

    <div :class="{dropdown__menu: true, show: showOptions }" >
      <button v-for="option in options" :class="{ dropdown__item: true, dropdown__item_icon: hasIcon }" type="button" :value="option.value" @click="selectOptionHandle">
        <app-icon v-if="option.icon" :icon="option.icon" />
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

export default {
  name: 'DropdownButton',

  components: { AppIcon },

  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    options: {
      type: Array,
      required: true,
      default: [],
    },
    value: {
      type: [String, Number],
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  data() {
    return {
      showOptions: false,
      selectedValue: this.value
    }

  },

  computed: {
    buttonTitle() {
      return this.title + (this.selectedValue != null ? ` - ${this.options.find(item=> item.value === this.selectedValue).text }` : '');
    },
    hasIcon() {
      return this.options.filter(item=> !!item.icon).length > 0;
    },
    buttonIcon() {
      return this.selectedValue ? this.options.find(item=> item.value === this.selectedValue).icon : null;
    }

  },

  methods: {
    selectOptionHandle(e) {
      console.log(e);
      e.stopPropagation();
      this.showOptions = false;
      this.selectedValue = e.target.value;
      this.$emit('change', this.selectedValue);
    },
    clickButtonHandle() {
      this.showOptions = !this.showOptions;
    },
  },
  watch: {
    'value'(value) {
      this.selectedValue = value;
    }
  },
};
</script>

<style scoped>
  .dropdown__menu {
    display: none;
  }
  .show {
    display: block;
  }
</style>
