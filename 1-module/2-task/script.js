import Vue from '/vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data: {
    meetupId: MEETUP_ID,
    meetupData: null
  },

  mounted() {
    this.fetchMeetup(this.meetupId);
  },

  computed: {
    getCoverImageUrl() {
      return getMeetupCoverLink(this.meetupData);
    },
    getMeetupFormattedDate() {
      const formatter = new Intl.DateTimeFormat();
      return formatter.format(this.meetupData.date);
    }

  },

  methods: {
    fetchMeetup(meetupId) {
      if (meetupId !== null && meetupId !== undefined) {
        fetch(`${API_URL}/meetups/${meetupId}`, {
          method: 'GET',
        }).then(meetup => {
          return meetup ? meetup.json() : null;
        }).then(data => {
          this.meetupData = data;
        });
      }
    },
    getAgendaTitle(agenda) {
      return agenda && agenda.title ? agenda.title : agenda && agenda.type ? agendaItemTitles[agenda.type] : '';
    },
    getAgendaIcon(agenda) {
      return agenda && agenda.type ? `/assets/icons/icon-${agendaItemIcons[agenda.type]}.svg` : '';
    }

  }
});