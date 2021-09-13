<template>
  <div class="testStyle">
    <div>
      {{ myMsg }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },

    methods: {
      
   },

  computed: {
    
  },

// myMsg es el nombre que se le dio en el App.vue al pasar por parametro <Test myMsg="HOLA DESDE COMPONENTE PADRE App />"
  props: {
    myMsg: {
      type: String,
      default: "Mensaje por defecto cuando no pasan ninguno por parametro"
    }
  }

  }
</script>

<style media="screen">
  .testStyle {
    background-color: #eee;
  }
</style>
