<template>
  <div class="sign-box">
    <div class="wrapper">
      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <el-step title="会员注册账号"></el-step>
        <el-step title="提交审核"></el-step>
        <el-step title="小二认证"></el-step>
      </el-steps>
      <router-view v-model="active"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sign",
    data() {
      return {
        active: 0,
      }
    }
  }
</script>

<style lang="less">
  .step-box {
    padding: 20px 10px;
  }
</style>
