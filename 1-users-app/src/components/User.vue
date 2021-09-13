<template lang=html>
  <div class="users">
    <h1>User component</h1>
    <ul>
      <li v-for="user in users"
        v-bind:key="user.email">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
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
        ]
      }
    }
  }
</script>

<style lang="css">
  .users {
    background: blue;
  }
</style>
