<template>
    <div>
        <h3>Create User Account</h3>
        <label>username </label>
        <input v-model="userName">
        <br><br>
        <label>password </label>
        <input v-model="Password">
        <br><br>
        <button @click="tambahUser">Add</button>
        <h2>Daftar</h2>
        <ul>
            <li v-for="(item,idx) in user" :key="item.userid">username: {{item.username}}, password: {{item.password}} <button @click="hapusUser(item.userid,idx)">Delete</button></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data:()=>{
    return {
      user:[],
      userName:'',
      Password:''
    }
  },
  created: function(){
    const username = localStorage.getItem('usr')
    const password = localStorage.getItem('pwd')
    axios.get('http://localhost:3000/user',{headers:{username,password}})
    .then(result=>{
      this.user = result.data
    })
  },
  methods:{
    tambahUser: function(){
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')
      let newUser = {username: this.userName, password: this.Password}
      axios.post('http://localhost:3000/user', newUser, {headers:{username,password}})
      .then(()=>{
        this.user.push(newUser)
      })
    },
    hapusUser:function(userid,idx){
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')
      axios.delete(`http://localhost:3000/user/${userid}`, {headers:{username,password}});
      this.user.splice(idx,1);
    }
  }
}
</script>

<style scoped>
  ul li{
    margin-top: 10px;
  }
</style>