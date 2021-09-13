<template lang=html>
  <div class="users">
    <h1>User component</h1>
    <ul>
      <li v-for="user in users"
        v-bind:key="user.email">
        {{ user.name }} - {{ user.email }}
        <button v-on:click="deleteUser()">X</button>
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
          
        ],
        newUser: {}
      }
    },
    // this.newUser={} es para limpiar la info en el input
    methods: {
      
      addUser() {
        this.users.push(this.newUser)
        this.newUser= {}
      },
      deleteUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
      }
    },

    created() {
      // console.log("componente creado========")
      // $http lo puedo usar porque instale la dependencia vue-resorces
      // $http.get() me permite traer datos, en este caso de jsonplaceholoder
      /*this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res))*/

      // asigno a mi arreglo users el resultado de los datos con la propiedad ".body" de la response
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.users = res.body)
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
