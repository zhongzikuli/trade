<template>
  <div class="content">
    <Banner></Banner>
    <div class="wrapper goods-content">
      <LeftNav></LeftNav>
      <div class="goods-box">
        <GoodsType></GoodsType>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftNav from '@/components/LeftNav'
  import Banner from '@/components/Banner'
  import GoodsType from '@/components/GoodsType'

  export default {
    name: "home",
    data() {
      return {}
    },
    mounted() {

    },
    components: {
      LeftNav,Banner,GoodsType
    }
  }
</script>

<style scoped lang="less">
  .content {
    .goods-content {
      position: relative;
      .goods-box{
        padding-bottom: 30px;
      }
    }
  }
</style>
