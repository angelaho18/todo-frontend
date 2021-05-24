<template>
  <div>
    <div class="bg">
      <router-link class="nav" to="/">Auth</router-link>
      <router-link class="nav" to="/user">User</router-link>
      <router-link class="nav" to="/todo">Todo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .bg{
    background: rgb(60, 24, 160);
    margin:0 auto;
    padding: 10px 0px;
  }
  .nav{
    text-decoration: none;
    margin: 0px;
    padding: 10px 20px;
    color: wheat;
  }
  .nav:hover{
    color: white;
    background: #000;
  }
</style>