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
  mounted: function(){
    axios.get('http://localhost:3000/user')
    .then(result=>{
      this.user = result.data
    })
  },
  methods:{
    tambahUser: function(){
      let newUser = {username: this.userName, password: this.Password}
      axios.post('http://localhost:3000/user', newUser)
      this.user.push(newUser)
    },
    hapusUser:function(userid,idx){
      axios.delete(`http://localhost:3000/user/${userid}`);
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