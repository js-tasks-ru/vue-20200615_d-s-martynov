const template =
    '<div class="meetup-cover" :style="{ backgroundImage: getLink }">' +
    ' <h1 class="meetup-cover__title">{{ title }}</h1>' +
    '</div>';

export const MeetupCover = {
  template,

  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    link: {
      type: String
    }
  },

  computed: {
    getLink() {
      return this.link ? `url(${this.link})` : '';
    }
  }
};
