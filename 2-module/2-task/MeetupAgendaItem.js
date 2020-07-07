import { agendaItemIcons, agendaItemTitles } from './data.js';

const template =
    '<div class="meetup-agenda__item">' +
    '  <div class="meetup-agenda__item-col">' +
    '    <img class="icon" alt="icon" :src="agengaIconUrls[agendaItem.type]" />' +
    '  </div>' +
    '  <div class="meetup-agenda__item-col">{{ `${agendaItem.startsAt} - ${agendaItem.endsAt}` }}</div>' +
    '  <div class="meetup-agenda__item-col">' +
    '    <h5 class="meetup-agenda__title">{{ agendaTitle }}</h5>' +
    '    <p v-if="agendaItem.type === \'talk\'">' +
    '      <span>{{ agendaItem.speaker }}</span>' +
    '      <span class="meetup-agenda__dot"></span>' +
    '      <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>' +
    '    </p>' +
    '    <p v-if="agendaItem.description">{{ agendaItem.description }}</p>' +
    '  </div>' +
    '</div>';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template,

  props: {
    agendaItem: {
      type: Object,
      required: true
    }

  },

  computed: {
    agengaIconUrls() {
      let urls = {};
      for (let key in agendaItemIcons)
        urls[key] = `/assets/icons/icon-${agendaItemIcons[key]}.svg`;
      return urls;
    },
    agendaTitle() {
      return this.agendaItem && this.agendaItem.title ? this.agendaItem.title : agendaItemTitles[this.agendaItem.type];
    }

  }
};
