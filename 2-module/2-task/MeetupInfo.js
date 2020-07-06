export const MeetupInfo = {
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ meetup.organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ meetup.place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="">{{ getFormattedDate }}</time>
      </li>
    </ul>`,

  name: 'MeetupInfo',

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  computed: {
    getFormattedDate() {
      if (this.meetup) {
        const formatter = new Intl.DateTimeFormat('en-us', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        return formatter.format(this.meetup.date);
      } else
        return '';
    }

  }
};
