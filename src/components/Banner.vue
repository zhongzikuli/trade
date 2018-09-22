<template>
  <div class="banner-box">
    <div class="all-type">
      <div class="wrapper">
        <el-menu :default-active="activeIndex" class="el-menu"
                 mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">所有分类</template>
            <el-menu-item index="2-1">全部商品</el-menu-item>
            <el-menu-item index="2-2">母婴用品</el-menu-item>
            <el-menu-item index="2-3">食品保健</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">处理中心</el-menu-item>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    data() {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key,keyPath) {
        console.log(key,keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  .banner-box {
    .all-type {
      background: #D71F33;
      width: 100%;
      .wrapper {
        .el-menu {
          background: #D71F33;
          .el-submenu {
            .el-submenu__title {
              height: 40px;
              line-height: 40px;
            }
          }
          .el-menu-item {
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
</style>
