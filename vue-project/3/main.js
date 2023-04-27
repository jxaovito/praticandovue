// import { createApp } from 'vue'
// import App from './App.vue'

// import './assets/main.css'

// createApp(App).mount('#app')


Vue.component('message', {

    data(){
        return{
        isVisible: true
    }
    },
    props: ['title', 'body'],
    template: `   <article class="message" v-show="isVisible">
    <div class="message-header">
      {{ title }}
      <button type="button" @click="hideModal">x</button>
    </div>
    <div class="message-body">
        {{ body }}
        </div>
  </article>`,

  methods: {
    hideModal(){
        this.isVisible = false;
    }
  }
})

var app = new Vue({
    el: "#root",

    data: {},

    methods: {},
  });