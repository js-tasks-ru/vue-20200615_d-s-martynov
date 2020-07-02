import Vue from '/vendor/vue.esm.browser.js';

const app = new Vue({
    el: '#app',
    data: {
        clickCount: 0
    },
    methods: {
        clickHandler(e) {
            this.clickCount++;
        }
    }
});
