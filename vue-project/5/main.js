

Vue.component('tabs', {
    template: `
    <div class="tabs">
    <ul>
      <li class="is-active"><a>Pictures</a></li>
      <li><a>Music</a></li>
      <li><a>Videos</a></li>
      <li><a>Documents</a></li>
    </ul>
  </div>

  <div class="tabs-details">
    <slot></slot>
  </div>
  `
  }
);


mounted() {
    
}
var app = new Vue({
    el: "#root",

    data: {
       
    },

    methods: {},
  });