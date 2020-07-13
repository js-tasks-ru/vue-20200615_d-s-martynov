/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */

import { addMonth, getDaysInMonth, addDay, compareDates } from './dateUtils.js';

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="prevMonth"></button>
          <div>{{ getFormattedSelectedDate }}</div>
          <button class="rangepicker__selector-control-right" @click="nextMonth"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div v-for="item in calendarItems" :class="{ rangepicker__cell: true, rangepicker__cell_inactive: !item.enabled }">
          {{ item.day }}
          <a v-for="meetup in item.meetups" class="rangepicker__event">{{ meetup.title }}</a>
        </div>
      </div>
    </div>
  </div>`,

  props: {
    meetups: {
      type: Array,
      required: true,
      default: []
    }
  },

  data() {
    return {
      selectedDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    }
  },

  computed: {
    getFormattedSelectedDate() {
      const formatter = new Intl.DateTimeFormat(navigator.language, {
        month: 'long',
        year: 'numeric'
      });
      return formatter.format(this.selectedDate).replace(' г.', '');
    },
    firstDate() {
      return addDay(this.selectedDate, -this.selectedDate.getDay() + 1);
    },
    lastDate() {
      const lastDateInMonth = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0);
      const lastDayInMonth = lastDateInMonth.getDay();
      if (lastDayInMonth !== 0)
        return addDay(lastDateInMonth, 7 - lastDayInMonth);
      else
        return lastDateInMonth;
    },
    calendarItems() {
      let items = [];
      let curDay = new Date(this.firstDate);
      while (curDay <= this.lastDate) {
        let filteredMeetups = this.meetups.filter(item => item.date);
        items.push({
          date: new Date(curDay),
          day: curDay.getDate(),
          enabled: curDay.getMonth() === this.selectedDate.getMonth(),
          meetups: this.meetups.filter(item => compareDates(item.date, curDay))
        });
        curDay = addDay(curDay, 1);
      }
      return items;
    },
  },

  methods: {
    nextMonth() {
      this.selectedDate = addMonth(this.selectedDate, 1);
    },
    prevMonth() {
      this.selectedDate = addMonth(this.selectedDate, -1);
    },
  }
};
