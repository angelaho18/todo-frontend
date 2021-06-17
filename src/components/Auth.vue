<template>
    <div>
        <h3>Login</h3>
        <label>username </label>
        <input type="text" v-model="userName">
        <br><br>
        <label>password </label>
        <input type="password" v-model="Password">
        <br><br>
        <button @click="loginMasuk">login</button>
        &nbsp;&nbsp;
        <button @click="logout">logout</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data:()=>{
    return {
      userName:'',
      Password:''
    }
  },
  created: function(){
    this.userName = localStorage.getItem('usr')
    this.Password = localStorage.getItem('pwd')
  },
  mounted: function(){
    axios.get('http://localhost:3000/user')
    .then(result=>{
      this.user = result.data
    })
  },
  methods:{
    loginMasuk: function(){
        localStorage.setItem('usr', this.userName)
        localStorage.setItem('pwd', this.Password)
    },
    logout:function(){
      localStorage.removeItem('usr')
      localStorage.removeItem('pwd')
      this.userName = ""
      this.Password = ""
    }
  }
}
</script>