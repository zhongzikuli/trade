<template>
  <div class="search-box">
    <el-form>
      <i class="el-icon-search" @click="searchResult"></i>
      <el-form-item>
        <el-input v-model.trim="keyword" placeholder="请输入商品名称或品牌" name="keyword"
                  autocomplete="off" @keyup.enter="searchResult" maxlength="100"></el-input>
        <el-button @click.prevent="searchResult()">搜索</el-button>
      </el-form-item>
    </el-form>
    <ul class="hot-search">
      <li style="margin-left: 0">热门搜索：</li>
      <li v-for="(item,index) in searchHot" @click="searchKey(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        keyword: '',
        hotSearch: ['牛奶','dw','澳新特卖','kfsdfhsd','lgjsgdfh','jsbvshbhs']
      }
    },
    computed: {
      searchHot() {
        return this.hotSearch.slice(0,5)
      }
    },
    methods: {
      searchResult() {

      },
      searchKey() {

      }
    }
  }
</script>

<style lang="less">
  .search-box {
    margin-left: 122px;
    margin-top: 5px;
    .el-form {
      width: 374px;
      padding: 3px 0;
      height: 34px;
      border: 2px solid #D80A25;
      display: flex;
      justify-content: space-between;
      .el-icon-search {
        height: 34px;
        line-height: 34px;
        width: 40px;
        text-align: center;
        border-right: 1px solid #F2F2F2;
        cursor: pointer;
      }
      .el-form-item {
        flex: 1;
        margin: 0;
        .el-form-item__content {
          height: 100%;
          line-height: 34px;
          display: flex;
          justify-content: space-between;
          .el-input {
            flex: 1;
            height: 100%;
            .el-input__inner {
              border: none;
              outline: none;
              height: 100%;
            }
          }
          .el-button {
            width: 80px;
            text-align: center;
            border-radius: 0;
            height: 40px;
            background: #D80A25;
            color: #fff;
            border: none;
            outline: none;
            margin-top: -3px;
            span {
              height: 40px;
              line-height: 40px;
              display: inline-block;
              margin-top: -12px;
            }
          }
        }
      }
    }
    .hot-search {
      max-width: 380px;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
      li {
        display: inline-block;
        font-size: 14px;
        margin-left: 10px;
        cursor: pointer;
        color: rgb(153, 153, 153);
        height: 20px;
        line-height: 20px;
        &:not(:first-of-type):hover {
          color: #020202;
        }
      }
    }
  }

</style>
