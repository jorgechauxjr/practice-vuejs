<template lang=html>
  <div class="users">
    <h1>User component</h1>
    <ul>
      <li v-for="user in users"
        v-bind:key="user.email">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <!-- .prevent es para que no se refresque la pagina al enviar datos del formulario -->
    <!-- newUser.name es para agregar name al ojeto newUser -->
    <!-- newUser.email es para agregar email al ojeto newUser -->
    <form v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Name"> 
      <input type="email" v-model="newUser.email" placeholder="Email"> 
      <button type="submit">
        Add 
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: [
          {
            name: 'Joe',
            email: 'joe@myemail.com',
            contacted: false
          },
          {
            name: 'Ryan',
            email: 'ryan@myemail.com',
            contacted: false
          },
          {
            name: 'Donna',
            email: 'donna@myemail.com',
            contacted: true
          }
        ],
        newUser: {}
      }
    },
    // this.newUser={} es para limpiar la info en el input
    methods: {
      
      addUser() {
        this.users.push(this.newUser)
        this.newUser= {}
      }
    }
  }
</script>

<style lang="css">
  .users {
    background: black;
    color: white;
    padding: 20px;
  }
</style>
