<template>
  <div class="main">
    <Head></Head>
    <NavBar></NavBar>
    <RightNav></RightNav>
    <div class="content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
  import Head from '@/components/Head'
  import NavBar from '@/components/NavBar'
  import Foot from '@/components/Foot'
  import RightNav from '@/components/RightNav'

  export default {
    name: "index",
    data() {
      return {
        path: ''
      }
    },
    watch: {
      $route(to,from) {
        console.log(to.path);
      }
    },
    components: {
      Head,NavBar,Foot,RightNav
    }
  }
</script>

<style lang="less">

</style>
