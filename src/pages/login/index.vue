<template>
  <div class="login-box">
    <div class="wrapper">
      <el-tabs v-model="activeLogin" type="border-card">
        <el-tab-pane label="手机号登录" name="phone">
          <phoneLogin></phoneLogin>
        </el-tab-pane>
        <el-tab-pane label="邮箱登录" name="mail">
          <mailLogin></mailLogin>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/Head'
  import Foot from '@/components/Foot'
  import phoneLogin from "./phoneLogin";
  import mailLogin from "./mailLogin";

  export default {
    name: "login",
    data() {
      return {
        activeLogin: "phone"
      }
    },
    components: {
      Head,Foot,phoneLogin,mailLogin
    }
  }
</script>

<style lang="less">
  .login-box {
    width: 100%;
    height: 600px;
    background: url(http://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180717-1531793379396059446.jpg) no-repeat 50%;
    .wrapper {
      position: relative;
      .el-tabs {
        width: 400px;
        height: 380px;
        position: absolute;
        right: 0;
        top: 100px;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        .el-tabs__header {
          margin: 0;
          background: #263c49;
          .el-tabs__nav {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .el-tabs__item {
              flex: 1;
              text-align: center;
              color: #fff;
              &.is-active {
                color: #020202;
              }
            }
          }
        }
        .login-form {
          p {
            color: #fff;
            font-size: 40px;
            line-height: 50px;
            height: 50px;
            text-align: center;
            margin: 0 0 15px 0;
          }
          .form-btn {
            .el-form-item__content {
              text-align: center;
            }
          }
        }
      }
    }
  }

</style>
