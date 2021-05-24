<template>
    <div>
        <h3>Login</h3>
        <label>username </label>
        <input v-model="userName">
        <br><br>
        <label>password </label>
        <input v-model="Password">
        <br><br>
        <button @click="loginMasuk">login</button>
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
    // const header = {
    //     username
    //     password
    // }
    axios.get('http://localhost:3000/user')
    .then(result=>{
      this.user = result.data
    })
  },
  methods:{
    loginMasuk: function(){
        let loginUser = {username: this.userName, password: this.Password}
        axios.post('http://localhost:3000/userAuth',loginUser)
    }
  }
}
</script>