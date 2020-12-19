import Vue from "vue"

Vue.filter("formatDate", date => date.toLocaleDateString('en-EN', { year: 'numeric', month: 'short', day: '2-digit' }))
