<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>Berikut daftar kerja kita:</div>
    <ul>
      <li v-for="item in todos" :key="item.id">{{item.catatan}}</li>
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
      let newItem = {todo: this.myText}
      axios.post('http://localhost:3000/todo', newItem)
      this.todos.push({catatan: this.myText})
    }
    // hapus: function(id){
    //   axios.delete('http://localhost:3000/todo/${id}')
    //   //belum ada
    //   //tugas delete
    //   //menghapus tampilan yang didelete
    // }
  }
}
</script>
