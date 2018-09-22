<template>
  <div class="footer">
    <div class="wrapper">
      <el-row :gutter="24" style="padding: 30px 0 40px;border-bottom: 1px solid rgba(0, 0, 0, 0.2)">
        <el-col :span="6">
          <div class="top-content flex">
            <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536635061542050140.png" alt="">
            <div class="right">
              <h2>正品保障</h2>
              <p>全球货源 品牌直供</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top-content flex">
            <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536635060934075126.png" alt="">
            <div class="right">
              <h2>天天特惠</h2>
              <p>低价保证 超值优惠</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top-content flex">
            <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536635060934007127.png" alt="">
            <div class="right">
              <h2>极速物流</h2>
              <p>闪电发货 全程跟踪</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top-content flex">
            <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536635060934030840.png" alt="">
            <div class="right">
              <h2>售后无忧</h2>
              <p>专业专注 服务至上</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" style="padding: 30px 0 50px">
        <el-col :span="5">
          <div class="grid-content" style="width: 172px">
            <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536645594477032646.png" alt=""
                 style="width: 100%"><br>
            <div style="display: flex;justify-content: space-around;margin-top: 15px;position: relative">
              <span style="line-height: 34px">关注我们</span>
              <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536645809533040641.png" alt=""
                   style="width: 34px;height: 34px;vertical-align: middle;cursor: pointer"
                   @mouseover="changeImg('wx',0)" @mouseout="changeImg('wx',1)">
              <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536645809550050897.png" alt=""
                   style="width: 34px;height: 34px;vertical-align: middle;cursor: pointer"
                   @mouseover="changeImg('mp',0)" @mouseout="changeImg('mp',1)">
              <img src="/src/assets/qrcode.png" alt="" ref="mp" class="qrcode mpqrcode"/>
              <img src="/src/assets/wxcode.png" alt="" ref="wx" class="qrcode"/>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <h2>南圈商品</h2>
            <a href="">保税仓直供</a><br>
            <a href="">一般贸易</a><br>
            <a href="">海外直邮</a><br>
            <a href="">商品税率表</a>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <h2>下单交易</h2>
            <a href="">下单问题</a><br>
            <a href="">支付问题</a><br>
            <a href="">银行到账时间</a><br>
            <a href="">优惠券问题</a>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <h2 style="text-align: center">售后服务</h2>
            <div style="display: flex;justify-content: space-between">
              <span class="left">
                <a href="">售后保障</a><br>
                <a href="">取消订单</a><br>
                <a href="">退换货处理时效</a><br>
                <a href="">售后问题处理标准</a>
              </span>
              <span class="right">
                <a href="">退换货凭证要求</a><br>
                <a href="">退货运费说明</a><br>
                <a href="">憋罐赔偿判断参考标准</a><br>
                <a href="">其他</a>
              </span>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <h2>关于我们</h2>
            <a href="">关于南圈</a><br>
            <a href="">联系我们</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" style="text-align: center">
            <img src="http://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180516-1526458101873074837.png" alt=""
                 style="width: 50px;height: 42px"><br>
            客服电话
            <p style="font-weight:600;color: #DE0014;margin-top: 5px">0571-88610083</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="full-width">
      浙江汇融源实业有限公司 澳大利亚汇融源国际贸易有限公司 版权所有<br/>
      地址：浙江省杭州市余杭区文一西路恒生科技园39幢15楼<br/>
      增值电信业务经营许可证：浙B2-20170610 浙ICP备15029842号
    </div>
  </div>
</template>

<script>
  export default {
    name: "nq-foot",
    data() {
      return {}
    },
    methods: {
      changeImg(str,num) {

      }
    }
  }
</script>

<style scoped lang="less">
  .nqfooter {
    text-align: center;
    color: #333333;
    background-color: #ffffff;
    position: absolute;
    font-size: 14px;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);
  }

  .top-content {
    justify-content: space-between;
    width: 175px;
    margin: 0 auto;
    img {
      width: 50px;
      height: 50px;
    }
    .right {
      color: #030303;
      flex: 1;
      margin-left: 6px;
      h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        margin: 0;
      }
      p {
        margin: 0;
        font-size: 14px;
      }
    }
  }

  .grid-content {
    text-align: left;
    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    a {
      line-height: 26px;
      font-size: 14px;
      color: #030303;
      font-family: Source Han Sans CN;
    }
  }

  .full-width {
    text-align: center;
    background: #1B1B1B;
    padding: 30px 0;
    color: #ffffff;
    line-height: 24px;
  }

  .qrcode {
    width: 160px;
    background: #fff;
    height: 170px;
    display: none;
    position: absolute;
    top: 45px;
    left: 15px;
  }

  .mpqrcode {
    left: 65px;
  }
</style>
