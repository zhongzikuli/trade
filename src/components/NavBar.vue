<template>
  <div class="nav-bar">
    <div class="wrapper">
      <el-row :gutter="0">
        <el-col :span="6" style="text-align: left">
          <router-link to="/home">
            <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536645594477032646.png" alt=""><br>
            <span>全球好货源 采买第一站</span>
          </router-link>
        </el-col>
        <el-col :span="8">
          <ul class="user-nav">
            <li v-for="(nav,index) in navList" :key="index" @click="cartHandle(nav)"
                :class="{active:current==index+1}">
              <img :src="nav.img" :alt="nav.text"><br>
              <span v-if="current!=index+1">{{nav.text}}</span>
            </li>
          </ul>
        </el-col>

        <el-col :span="10">
          <Search></Search>
        </el-col>
      </el-row>
    </div>
    <LoginTip></LoginTip>
  </div>
</template>

<script>
  import Search from "./Search"
  import LoginTip from "./LoginTip"

  export default {
    name: "navBar",
    data() {
      return {
        current: 0,
        navList: [
          {
            href: "",
            img: "https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536657948418005554.png",
            text: "订单"
          },{
            href: "",
            img: "https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536657948438035697.png",
            text: "客户"
          },{
            href: "",
            img: "https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536657948478009044.png",
            text: "帐户"
          },{
            href: "",
            img: "https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536657948426006805.png",
            text: "进货单"
          }
        ]
      }
    },
    methods: {
      cartHandle(nav) {
        this.$store.commit('switchDialog')
      }
    },
    components: {
      Search,LoginTip
    }
  }
</script>

<style scoped lang="less">
  .nav-bar {
    padding: 15px 0;
    .el-row {
      .el-col-6 {
        img {
          width: 124px;
          height: 50px;
        }
        span {
          font-size: 18px;
          color: #7E7E7E;
          font-family: STXinwei;
        }
      }
      .user-nav {
        display: flex;
        justify-content: space-around;
        li {
          cursor: pointer;
          width: 75px;
          height: 75px;
          text-align: center;
          &:hover{
            background: #F2F2F2;
          }
          img {
            width: 45px;
            height: 45px;
          }
          span {
            color: #020202;
          }
          &.active {
            line-height: 75px;
            background: #F2F2F2;
            img {
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

</style>
