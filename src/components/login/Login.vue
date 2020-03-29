<template>
  <div class="Logon-content">
    <!-- 绘制Login的页面 -->
    <div class="Login-box">
      <div class="Avatare-box">
        <img src="../../assets/imgs/log.png" />
      </div>
      <!-- from 表单 -->
      <el-form
        :model="LoginForm"
        :rules="Loginrules"
        ref="LoginForm"
        label-width="0"
        class="Login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model=" LoginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 咪猫 -->
        <el-form-item prop="password">
          <el-input type="password" v-model=" LoginForm.password" prefix-icon="el-icon-view"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="gogLogin">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LoginForm: {
        username: "",
        password: ""
      },
      Loginrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 6,
            max: 8,
            message: "长度在  6到 8 个数字或者字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    gogLogin() {
      this.$refs.LoginForm.validate(valid => {
        console.log(valid); // 返回布尔值
        if (!valid) return;
        this.$http.get("login", this.LoginForm).then(data => {
          let res = data;
          if (res.status === 200) {
            this.$message.success("登录成功！");
            console.log(res);
            sessionStorage.setItem("token", res.data.token);
            this.$router.push("/home");
          }
        });
        //   .catch(error => {
        //     this.$message.error("用户登录失败！", error);
        //   });
      });
    },
    resetLoginForm() {
      this.$refs.LoginForm.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.Logon-content {
  background: url("../../assets/imgs/zm.png") lightblue;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .Login-box {
    position: relative;
    width: 450px;
    height: 400px;
    background: #fff;
    border-radius: 10px;
    .Avatare-box {
      width: 120px;
      height: 120px;
      background: pink;
      position: absolute;
      top: -50px;
      left: 160px;
      border: 5px solid #fff;
      box-shadow: 2px 2px 2px #888888;
      border-radius: 50px;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-around;
  }
  .Login_form {
    position: absolute;
    bottom: 60px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
</style>