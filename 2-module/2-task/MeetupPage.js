import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const template = '<meetup-view v-if="meetup" :meetup="meetup"></meetup-view>';

export const MeetupPage = {
    name: 'MeetupPage',

    template,

    components: { MeetupView },

    props: {
        meetupId: {
            type: [Number, String],
            default: MEETUP_ID
        }
    },

    data() {
        return {
            meetup: null
        }
    },

    methods: {
        getMeetup() {
            fetchMeetup(this.meetupId).then(res=> { this.meetup = res; } );
        }
    },

    mounted() {
        this.getMeetup();
    }
};
