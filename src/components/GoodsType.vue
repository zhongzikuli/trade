<template>
  <div class="goods-type">
    <div class="type-title">
      <el-row type="flex" justify="/space-between">
        <el-col :span="12" class="left">
          <h3>热销爆款</h3>
        </el-col>
        <el-col :span="12" class="right">
          <a href="">更多商品<i class="el-icon-arrow-right"></i></a>
        </el-col>
      </el-row>
    </div>
    <div class="goods-wrapper">
      <Goods></Goods>
    </div>
  </div>
</template>

<script>
  import Goods from '@/components/Goods'

  export default {
    name: "GoodsType",
    data() {
      return {}
    },
    components: {
      Goods
    }
  }
</script>

<style scoped lang="less">
  .goods-type {
    margin-top: 30px;
    .type-title {
      .el-row {
        .left {
          h3 {
            font-size: 18px;
            padding: 0 10px;
            border-left: 3px solid #ff6187;
            color: #ff6187;
          }
        }
        .right {
          text-align: right;
          a {
            color: #666;
            font-size: 12px;
            height: 60px;
            line-height: 60px;
            &:hover {
              color: #ff6187;
            }
          }
        }
      }

    }
  }
</style>
