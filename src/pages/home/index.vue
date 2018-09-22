<template>
  <div class="content">
    <Banner></Banner>
    <LeftNav></LeftNav>
  </div>
</template>

<script>
  import LeftNav from '@/components/LeftNav'
  import Banner from '@/components/Banner'

  export default {
    name: "home",
    data() {
      return {}
    },
    mounted() {

    },
    components: {
      LeftNav,Banner
    }
  }
</script>

<style scoped>

</style>
