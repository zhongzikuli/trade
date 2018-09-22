<template>
  <div class="right-nav">
    <ul>
      <li v-for="(item,index) in rightList" :key="index" @click="cartHandle(item)" @mouseover="changeImg(item.icon,0)"
          @mouseout="changeImg(item.icon,1)" :class="item.icon">
        <img :src="item.out" :alt="item.text" :ref="item.icon">
        <span>{{item.text}}</span>
      </li>
      <!-- <li @mouseover="changeImg('img-fw',0)" @mouseout="changeImg('img-fw',1)">
         <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180912-1536740869659082629.png" alt=""
              class="img-fw">
         <span>服务热线</span>
         <div class="telephone">
           0571-88610083
         </div>
       </li>

       <li style="margin-top: 60px" @mouseover="changeImg('img-mp',0)" @mouseout="changeImg('img-mp',1)">
         <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180912-1536740869628036535.png" alt=""
              class="img-mp">
         <span>小程序</span>
         <div class="wechat">
           <img src="/src/assets/icon-mpqrcode.jpg" style="width: 100%" alt=""/><br>
           <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180911-1536645809550050897.png"
                style="width: 21px;height: 21px;vertical-align: middle;margin-right: 5px">南圈小程序<br>
           扫一扫,下单更便捷！
         </div>
       </li>
       <li @click="backTop" @mouseover="changeImg('img-bt',0)" @mouseout="changeImg('img-bt',1)">
         <img src="https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180912-1536740869619095034.png" alt=""
              class="img-bt">
         <span>返回顶部</span>
       </li>-->
    </ul>
  </div>
</template>

<script>
  export default {
    name: "right-nav",
    data() {
      return {
        rightList: [{
          icon: 'img-jhd',
          text: '进货单',
          in: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180913-1536803420260007919.png',
          out: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180912-1536740869602048933.png'
        },{
          icon: 'img-fw',
          text: '服务热线',
          in: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180913-1536803420270069793.png',
          out: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180912-1536740869659082629.png'
        },{
          icon: 'img-mp',
          text: '小程序',
          in: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180913-1536803420345076730.png',
          out: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180912-1536740869628036535.png'
        },{
          icon: 'img-bt',
          text: '返回顶部',
          in: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180913-1536803420282026717.png',
          out: 'https://nqtown-prod.oss-cn-hangzhou.aliyuncs.com/20180912-1536740869619095034.png'
        }]
      }
    },
    methods: {
      cartHandle() {

      },
      changeImg(str,num) {
        let self = this;
        if (num == 0) {//移入
          this.rightList.forEach((item,index) => {
            if (item.icon == str) {
              self.$refs[str].src = item.in
            }
          })
        } else {//移出
          this.rightList.forEach((item,index) => {
            if (item.icon == str) {
              self.$refs[str].src = item.out
            }
          })
        }
      },
      getCookie(name) {
        var arr,reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);
        else return null;
      },
      handleClose(done) {
        this.dialogVisible = false
      },
      goLogin() {
        this.dialogVisible = false;
        window.location.href = "/login.html"
      },
      backTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }
</script>

<style scoped lang="less">
  .right-nav {
    position: fixed;
    z-index: 2111;
    bottom: 66px;
    right: 5px;
    background: #fff;
    ul {
      li {
        width: 60px;
        height: 60px;
        cursor: pointer;
        color: #030303;
        > img {
          margin-top: 3px;
          margin-left: 14px;
          width: 33px;
          height: 33px;
        }
        > span {
          display: inline-block;
          text-align: center;
          font-size: 12px;
          line-height: 20px;
          height: 18px;
          width: 54px;
          margin: 0 3px;
          border-bottom: 1px solid #ddd;
        }
        &.img-mp {
          margin-top: 60px;
        }
        &:hover {
          color: #ffffff;
          background: #D70221;
        }
        &:last-of-type {
          span {
            border-bottom: none;
          }
        }
      }
    }
  }

  .right-nav ul li:hover .telephone {
    display: block;
    position: absolute;
    top: 75px;
    right: 65px;
    height: 36px;
    line-height: 36px;
    width: 140px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #D71F33;
    background: #fff;
    border: 1px solid #FEFDFD;
  }

  .right-nav ul li div {
    width: 0;
    height: 0;
    transition: width .5s;
    overflow: hidden;
  }

  .right-nav ul li:hover .wechat {
    display: block;
    position: absolute;
    bottom: 60px;
    right: 65px;
    width: 120px;
    height: 170px;
    padding: 5px;
    text-align: center;
    background: #fff;
    color: #040404;
    font-size: 12px;
    border: 1px solid #FEFDFD;
  }
</style>
