<template>
  <el-dialog style="text-align: left" title="提示" :visible.sync="$store.state.loginTip.show"
             width="30%" :before-close="handleClose">
    <span>该功能需登录后可用，是否立即登录？</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">先逛逛</el-button>
        <el-button type="primary" @click="goLogin">去登录</el-button>
      </span>
  </el-dialog>
</template>

<script>
  export default {
    name: "loginTip",
    data() {
      return {}
    },
    methods: {
      goLogin() {

      },
      handleClose() {
        this.$store.commit('switchDialog')
      }
    }
  }
</script>

<style scoped>

</style>
