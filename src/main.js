import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#refork',
  render: h => h(App),
  beforeCreate: function () {
    window.widgetAPI = new Common.API.Widget()
    window.widgetAPI.sendReadyEvent()
    window.tvKey = new Common.API.TVKeyValue()
  },
})
