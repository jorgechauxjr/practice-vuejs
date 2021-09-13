<template>
  <div>
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
    <p>La directiva v-model permite linkear las cosa que puede escribir el usuario por medio de un input con las propiedades que tenemos en data
</p>
    <input type="text" v-model="user.name">

    <button type="button" 
      v-on:click="saludar(user.name)">
      CLICK ME
    </button>
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
      }
    }
  }
</script>

<style media="screen">

</style>
