<template>
  <div class="login">
    <div class="form-box">
        <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="txet" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button class="my-login" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {http} from '../api/http.js'
  export default {
    data() {
     
      
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur' },
            {min: 6, max: 12, message: '密码长度必须是 6 到 12 个字符', trigger: 'blur'}
          ],
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
             
             http.login(this.ruleForm).then(backData=>{
                // console.log(backData);
              
               localStorage.setItem('token',backData.data.data.tokey)
               if(backData.data.meta.status == 200){
                 //跳转到首页
                 this.$router.push('/index');
                 //弹出成功登陆
                 this.$message.success(backData.data.meta.msg)
               }else{
                 this.$message.error(backData.data.meta.msg)
               }
             })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      
    }
  }
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    padding: 40px;
    width: 500px;
    // height: 440px;
    background-color: #fff;
    border-radius: 8px;
    h2{
        padding-bottom: 22px;
    }
    .my-login{
        width: 100%;
    }
  }
}
</style>
