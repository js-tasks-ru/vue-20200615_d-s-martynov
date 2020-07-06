import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import {getMeetupCoverLink} from "./data.js";

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div v-if="meetup">
      <meetup-cover :title="meetup.title" :link="coverLink"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
            <meetup-agenda v-if="meetup.agenda" :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <meetup-info :meetup="meetup"></meetup-info>
          </div> 
        </div>
      </div>
    </div>`,

    components: { MeetupCover, MeetupDescription, MeetupInfo, MeetupAgenda },

    props: {
      meetup: {
        type: Object,
        required: true
      }
    },

  computed: {
    coverLink() {
      if (this.meetup !== null && this.meetup !== undefined)
        return getMeetupCoverLink(this.meetup);
      else
        return '';
    }
  }
};
