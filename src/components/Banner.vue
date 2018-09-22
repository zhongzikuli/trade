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
          <el-menu-item index="2">保税直发</el-menu-item>
          <el-menu-item index="3">一般贸易</el-menu-item>
          <el-menu-item index="4">澳新特卖</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </div>
    </div>
    <div class="banners">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item v-for="(item,index) in banners" :key="index">
          <p style="height:100%;margin: 0">
            <a href="">
              <img :src="item.imageUrl" alt="" height="400">
            </a>
          </p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    data() {
      return {
        activeIndex: '1',
        dialogActive: false,
        banners: [{
          imageUrl: "https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/1537154976167.jpg",
          link: "https://www.nqtown.com/search?keyword=%u79CB%u5B63%u6DA6%u80A4"
        },{
          imageUrl: "https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/1537144612133.jpg",
          link: "https://www.nqtown.com/search?keyword=%u4FDD%u5065%u7279%u5356"
        }]
      }
    },
    methods: {
      handleSelect(key,keyPath) {
        console.log(key,keyPath);
      }
    }
  }
</script>

<style lang="less">
  .banner-box {
    .all-type {
      width: 100%;
      background: #ff6187;
      height: 40px;
      .wrapper {
        .el-menu--horizontal {
          background: #ff6187;
          .el-submenu {
            .el-submenu__title {
              height: 40px;
              line-height: 40px;
              color: #fff;
              i {
                color: #fff;
              }
            }
          }
          .el-menu-item {
            height: 40px;
            line-height: 40px;
            color: #fff;
          }
        }
      }
    }
    .banners {
      height: 400px;
      .el-carousel {
        height: 100%;
        .el-carousel__container {
          height: 100%;
          .el-carousel__item {
            height: 100%;

          }
        }
      }
    }
  }

</style>
