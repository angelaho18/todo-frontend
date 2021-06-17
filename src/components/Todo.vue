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
  created: function(){
    const username = localStorage.getItem('usr')
    const password = localStorage.getItem('pwd')
    axios.get('http://localhost:3000/todo',{headers:{username,password}})
    .then(result=>{
      this.todos = result.data
    })
  },
  methods:{
    tambahkan: function(){
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')
      let newItem = {catatan: this.myText}
      axios.post('http://localhost:3000/todo', newItem, {headers:{username,password}})
      .then(()=>{
          this.todos.push(newItem)
          this.myText=""
      })
      
    },
    hapus:function(id,idx){
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')
      axios.delete(`http://localhost:3000/todo/${id}`,{headers:{username,password}});
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