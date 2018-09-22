<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <p>welcome</p>
    <el-form-item prop="phone" label="帐号：|" label-width="80px">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.phone" auto-complete="off"
                placeholder="请输入手机号">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password" label="密码：" label-width="80px">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password"
                auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
        <i slot="prefix" class="icon-mima"></i>
      </el-input>
    </el-form-item>

    <el-form-item class="form-btn">
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

  export default {
    name: "phone-login",
    data() {
      return {
        loginForm: {
          phone: "admin",
          password: "123456"
        },
        loginRules: {
          password: [
            {required: true,message: "请输入密码",trigger: "blur"},
            {min: 6,message: "密码长度最少为6位",trigger: "blur"}
          ]
        },
        passwordType: "password"
      };
    },

    methods: {
      showPassword() {
        this.passwordType == ""
          ? (this.passwordType = "password")
          : (this.passwordType = "");
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            /*this.$store.dispatch("LoginByUsername",this.loginForm).then(
              res => {
                this.$store.commit("ADD_TAG",this.tagWel);
                this.$router.push({path: this.tagWel.value});
              },
              error => {
                this.refreshCode();
              }
            );*/
          }
        });
      }
    }
  };
</script>

<style scoped lang="less">
  .login-form {

  }
</style>
