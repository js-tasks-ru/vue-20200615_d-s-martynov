import Vue from '/vendor/vue.esm.browser.js';

const app = new Vue({
    el: '#app',
    data: {
        clickCount: 0
    },
    methods: {
        getClickCount() {
            return this.clickCount;
        },
        clickHandler(e) {
            this.clickCount++;
        }
    }
});
