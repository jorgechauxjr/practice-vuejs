<template>
  <div class="testStyle">

    <div>
      {{ myMsg }}
    </div>

    <hr>
     <h1 v-html="myHtml"></h1>

    <div v-if="showName">
      <p>{{ user.name }}</p>
    </div>
    <div v-else>
      <p>No puedo mostrar nombre</p>
    </div>

    <hr>
    <!-- <div>
      {{ tasks[0].title }}
    </div> -->
    <ul>
      <li v-for="task in tasks" v-bind:key="task">
        {{ task.title }}
      </li>
    </ul>

    <hr>
    <h1>Two way data binding</h1>
    <h2>Directiva v-model</h2>
    <p>La directiva v-model permite linkear las cosa que puede escribir el usuario por medio de un input con las propiedades que tenemos en data</p>
    <input type="text" v-model="user.name">

    <button type="button"
      v-on:click="saludar(user.name)">
      CLICK ME
    </button>

    <hr>
    <h2>Directiva v-on:keyup.enter</h2>
    <p>Evento que escucha cuando el usuario da enter en nuestro input</p>
    <!-- Cuando usuario escriba y de enter ejecuta la funcion typing -->
    <input type="text" v-on:keyup.enter="typedEnter">

    <h2>Directiva v-on:keyup</h2>
    <p>Evento que escucha cuando el usuario va tecleando en nuestro input</p>
    <!-- Cuando usuario escriba y de enter ejecuta la funcion typing -->
    <input type="text" v-on:keyup.enter="typing">

    <!-- fullname se creó usando Computed properties -->
    <hr>
    <h3>Computed properties</h3>
    <h3>Se generan a partir de valores de otras propiedades</h3>
    <div>
      {{ fullName }}
    </div>


  </div>


</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello Vue',
        user: {
          name: 'Juan',
          lastName: 'Perez'
        },
        myHtml: '<h3>Good morning Vue</h3>',
        showName: false,
        tasks: [
          {title: 'eat'},
          {title: 'dinner'},
          {title: 'play'},
          {title: 'sing'}
        ]
      }
    },

    methods: {
      saludar(name) {
        alert(`GOOD MORNING ${name}`)
      },
      typedEnter(e) {
        // console.log(e)
        // console.log(e.target.value)

        // 13 es enter
      //   if (e.target.keyCode === 13) {
      //     console.log("presiono enter")
      // }
      console.log(e)
      console.log("DIO ENTER")
    },
    typing(e) {
      console.log(e)
      console.log(e.target.value)
    }
   },

  computed: {
    fullName() {
      return `${this.user.name} ${this.user.lastName}`
    }
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
