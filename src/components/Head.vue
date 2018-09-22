<template>
  <div class="header">
    <div class="wrapper">
      <el-row :gutter="0">
        <el-col :span="6" style="text-align: left">
          <span>欢迎来到南圈！</span>
        </el-col>
        <el-col :span="18" style="text-align: right">
          <router-link v-for="(item,index) in nav" :key="index" :to="'/'+item.href">{{item.text}}</router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nq-head',

    data() {
      return {
        nav: [{
          href: 'home',
          text: '南圈首页'
        },{
          href: 'login',
          text: '登录'
        },{
          href: 'sign',
          text: '注册'
        },{
          href: '',
          text: '南圈供应商后台'
        },{
          href: 'about',
          text: '关于南圈'
        }]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
  .header {
    text-align: center;
    font-size: 14px;
    background-color: #F2F2F2;
    border-bottom: 1px solid #ececec;
    box-sizing: content-box;
    .el-row {
      height: 30px;
      line-height: 30px;
      .el-col-18 {
        a {
          padding: 0 10px;
          border-left: 1px solid #ccc;
          display: inline-block;
          height: 20px;
          line-height: 20px;
          &:last-of-type {
            padding-right: 0;
          }
          &:first-of-type {
            border-left: none;
          }
          &:hover {
            color: #D71F33;
          }
        }
      }
    }
  }
</style>
