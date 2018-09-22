<template>
  <div class="step-box">
    <el-form :model="signForm" method="post" status-icon :rules="rules" ref="signForm" label-width="150px"
             class="sign-form">
      <!--<el-form-item label="手机号码:" prop="telephone">
        <el-select class="nation-code" v-model="signForm.nationCode" @change="getNation" filterable placeholder="国家区号"
                   style="margin-left: 0;">
          <el-option v-for="(i,index) in countrySelector" :label="i.name+'(+'+i.code+')'" :value="i.code"
                     :key="index"></el-option>
        </el-select>

        <el-input v-model.number="signForm.telephone" placeholder="请填9位数字，例如 412345678" style="width:210px"
                  @change="signForm.msgCode='' disabled=true" v-if="signForm.nationCode==61"></el-input>

        <el-input v-model.number="signForm.telephone" style="width:210px" @change="signForm.msgCode='' disabled=true"
                  v-if="signForm.nationCode!=61" auto-complete="off" placeholder="请输入手机号码"></el-input>
      </el-form-item>

      <el-form-item label="验证码:" prop="codeImg">
        <el-input v-model="signForm.codeImg" style="width:260px" auto-complete="off" placeholder="请输入验证码"></el-input>
        <span @click="getCode">
          <RandomCode ref="codeRend" class="codeImg"></RandomCode>
        </span>
      </el-form-item>

      <el-form-item label="短信验证码:" prop="msgCode">
        <el-input v-model="signForm.msgCode" style="width:260px" @change="handleSellweb(1)"></el-input>
        <el-button type="primary" style="margin-left:14px" @click="handleSendMsg" :disabled="msgCodeDisabled">
          <span v-if="!status" v-html="sendMsg"></span>
          <span v-if="status">({{setInt}}s)</span>
        </el-button>
      </el-form-item>

      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="signForm.password" style="width:360px" auto-complete="off"
                  placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item label="确认密码:" prop="checkPass">
        <el-input type="password" v-model="signForm.checkPass" style="width:360px" auto-complete="off"
                  placeholder="请再次输入密码"></el-input>
      </el-form-item>-->

      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="signForm.email" style="width:240px" @change="signForm.mailCode=''"></el-input>
        邮箱可用于登录和密码找回
      </el-form-item>

      <el-form-item label="邮箱验证码 :" prop="mailCode">
        <el-input v-model="signForm.mailCode" style="width:260px" @blur="checkMail"
                  @change="handleSellweb(2)"></el-input>
        <el-button type="primary" style="margin-left:14px" @click="handleSendMail"></el-button>
      </el-form-item>

      <el-form-item label="您了解南圈的渠道:" prop="channel">
        <el-select v-model="signForm.channel" placeholder="请选择活动区域">
          <el-option label="搜索引擎" value="6"></el-option>
          <el-option label="南圈公众号" value="4"></el-option>
          <el-option label="朋友推荐" value="5"></el-option>
          <el-option label="墨尔本淘好货" value="7"></el-option>
          <el-option label="今日墨尔本" value="8"></el-option>
          <el-option label="亿忆网" value="9"></el-option>
          <el-option label="华人店铺" value="10"></el-option>
          <el-option label="地推" value="11"></el-option>
          <el-option label="网推" value="12"></el-option>
          <el-option label="商场展台" value="13"></el-option>
          <el-option label="大学社团" value="14"></el-option>
          <el-option label="旅行社" value="15"></el-option>
          <el-option label="其它" value="16"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="推荐人:" prop="refereeName">
        <el-input v-model="signForm.refereeName" style="width:360px"></el-input>
      </el-form-item>

      <el-form-item label="" prop="type">
        <el-checkbox label="我已阅读并接受" v-model="signForm.type"></el-checkbox>
        <router-link to="/protocol" style="text-decoration: underline">《南圈服务协议》</router-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="submitForm('signForm')">提交注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import RandomCode from '@/components/RandomCode';

  export default {
    name: "step1",
    data() {
      /*var checkPhone = (rule,value,callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        if (!Number(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (/^\d{3,}$/.test(value)) {
            callback();
          } else {
            callback(new Error('请输入有效手机号'));
          }
        }
      };
      var checkoldtel = (rule,value,callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        /!*唯一性校验*!/
        this.$http.get("/tradeweb/member/checkFiledOnlyOneByTypeAndFiledType?nationCode=" + this.signForm.nationCode + "&type=2&filedType=1&filed=" + this.signForm.telephone).then((res0) => {
          if (!res0.data.status) {
            callback(new Error(res0.data.reason));
          } else {
            callback();
          }
        }).catch((err) => {
          this.$message({
            message: '未请求到服务！',
            type: 'warning'
          });
        })
      };
      var checkMsgCode = (rule,value,callback) => {
        if (value === '' || value === null) {
          callback(new Error('请输入短信验证码！'));
        } else if (value.length == 6) {
          callback();
        } else {
          callback(new Error('验证码输入有误，请输入6位验证码！'));
        }
      };
      var checkPsw = (rule,value,callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          let reg = /^(?![\d]+$)(?![a-zA-Z]+$)[\da-zA-Z]{8,20}$/;
          if (reg.test(value)) {
            if (this.signForm.checkPass !== '') {
              this.$refs.signForm.validateField('checkPass');
            }
            callback();
          } else {
            callback(new Error('请输入8-20数字字母组成的密码'));
          }
        }
      };
      var checkPsw2 = (rule,value,callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          if (value !== this.signForm.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        }
      };
      var checkCode = (rule,value,callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value.toLowerCase() !== this.codeRend.toLowerCase()) {
          callback(new Error('验证码错误！'));
        } else {
          callback();
        }
      };
      var checkCheckbox = (rule,value,callback) => {
        if (!value) {
          callback(new Error('请阅读'));
        } else {
          callback();
        }
      };*/
      return {
        signForm: {
          email: '',
          mailCode: '',
          nationCode: '86',//国家
          telephone: '',
          codeImg: '',
          msgCode: '',
          password: '',
          checkPass: '',
          type: null,
          channel: null,
          refereeName: null
        },
        rules: {
          /*telephone: [{required: true,validator: checkPhone,trigger: 'change'}],
          telephone: [{required: true,validator: checkoldtel,trigger: 'blur'}],
          codeImg: [{required: true,validator: checkCode,trigger: 'blur'}],
          msgCode: [{required: true,validator: checkMsgCode,trigger: 'change'}],
          password: [{required: true,validator: checkPsw,trigger: 'blur'}],
          checkPass: [{required: true,validator: checkPsw2,trigger: 'blur'}],
          type: [{required: true,validator: checkCheckbox,trigger: 'blur'}],
          channel: [{required: true,message: '请选择渠道',trigger: 'blur'}]*/
        }
      }
    },
    components: {
      RandomCode
    },
    methods: {
      submitForm() {

      },
      getCode() {

      },
      getNation() {

      },
      handleSellweb() {

      },
      checkMail() {

      },
      handleSendMail() {

      }
    }
  }
</script>

<style scoped>

</style>
