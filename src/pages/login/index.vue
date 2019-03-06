<template>
  <div class="login-container">
        <h1 class="tittle">登陆</h1>
        <el-form :label-position="labelPosition" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="password"></el-input>
          </el-form-item>
           <el-button type="primary" @click="login">登陆</el-button>
        </el-form>
       
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        labelPosition: 'right',
        username:'',
        password:''
      };
    },
    methods:{
        login(){
            console.log('11234');
            if(!this.username.trim() || !this.password.trim())
            return this.$message({
                   message: '请输入用户名或密码',
                   type: 'warning'
                 });
            this.$axios.post('/user/login', {
               username:this.username,
               password:this.password
             })
             .then(result => {
                 console.log(result)
                 //登陆成功提醒用户 将Token 存储到localstorage
                 localStorage.serItem("token",result.data.data.token);
                 //登陆成功跳转到首页
             })
             //登陆成功，跳转到首页
             this.$router.push('/home')
             //.then函数有两个， 第一个是成功 第二个是失败
             //但是如果失败了也会报错
             .catch(error => {
                 console.dir(error);
                 this.$message.error(err.response.data.errMsg)
             });   
        }
    }
  }
</script>

<style lang="less" scoped>
    .login-container{
        width: 500px;
        margin:100px auto;
        border:1px solid #ccc;
        border-radius: 5px;
        padding:30px;
        .tittle{
            font-size:24px;
            margin-bottom: 10px;
        }
    }
</style>