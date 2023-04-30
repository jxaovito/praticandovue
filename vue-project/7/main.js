Vue.component('teste-view', {
    data() {
        return {
            numero: 0
        };
    }
});

Vue.component('modal', {
    template: `<div class="modal is-active" v-bind:style="{ display: computedDisplay }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
        <slot name="header">oh hi</slot>
        </p>
        <button class="delete" aria-label="close" @click="closeModal()"></button>
      </header>
      <section class="modal-card-body">
        <slot name="content">new content here for test!!</slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer"><button class="button is-success">Save changes</button>
        <button class="button">Cancel</button> 
        it doesnt need to be there</slot>
        
      </footer>
    </div>
  </div>`,
  data: function() {
    return {
        display: 'flex'
  }
   }, 
   computed: {
       computedDisplay() {
         return this.display;
       }
     },

   methods: {
       closeModal(){
       this.display='none';
           }
       }   
}),


new Vue({

    el: '#root',
 
    }
 
)