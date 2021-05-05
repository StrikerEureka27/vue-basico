
Vue.component('modal', {
    props : ['showModal'], 

    data (){
        return {
            title: 'Cities Skyline'
        }
    },

    methods: {
        close () {
            this.$emit('change-state');
        }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div  class="modal-container">
            <h3>{{ title }}</h3>
            <slot name="imagen">  </slot>
            <div><slot name="parrafo" ></slot></div>
            <footer>
              <button v-on:click="close" >Cerrar</button>
            </footer>
          </div>
        </div>
      </div>
      `
  })
  
  new Vue({
    el: '#app', 
    data (){
        return {
            showModal: false
        }
    }, 
    methods: {
        toggleModal () {
            this.showModal = !this.showModal
        }
    }
  })



