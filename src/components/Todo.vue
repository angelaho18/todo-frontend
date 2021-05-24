<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>Berikut daftar kerja kita:</div>
    <ul>
      <li v-for="(item,idx) in todos" :key="item.id">{{item.catatan}}  <button @click="hapus(item.id,idx)">Delete</button></li>
    </ul>
    <input v-model="myText">
    <button @click="tambahkan">Klik Me</button>
  </div>
</template>

<script>

import axios from 'axios'

export default{
  data:()=>{
    return {
      todos:[],
      myText:''
    }
  },
  mounted: function(){
    axios.get('http://localhost:3000/todo')
    .then(result=>{
      this.todos = result.data
      // alert(JSON.stringify(result.data))
    })
  },
  methods:{
    tambahkan: function(){
      let newItem = {catatan: this.myText}
      axios.post('http://localhost:3000/todo', newItem)
      this.todos.push(newItem)
    },
    hapus:function(id,idx){
      axios.delete(`http://localhost:3000/todo/${id}`);
      this.todos.splice(idx,1);
    }
  }
}
</script>
<style scoped>
  ul li{
    margin-top: 10px;
  }
</style>