<template>
  <div>
    <h1>{{msg}}</h1>
    <el-form :model="userFrom" :rules="rulesFrom" class="Login_form" ref="userFromRef">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userFrom.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // 路由进入之前。没有this要在next的回掉里才能拿到实例
  beforeRouteEnter(to, from, next) {
    // 页面权限
    next(vm => {
      console.log(from);
    });
  },
  // 路由离开之前
  beforeRouteLeave(to, from, next) {
    if (this.userFrom.username && !this.off) {
      this.$confirm("你已经输入内容了确认离开吗？")
        .then(_ => {
          next();
        })
        .catch(_ => {});
    } else {
      next();
    }
  },
  data() {
    return {
      off: false,
      msg: "添加用户",
      userFrom: {
        username: ""
      },
      rulesFrom: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.userFromRef.validate(valid => {
        if (valid) {
          this.$message.success("通过！");
          this.off = true;
          this.$router.push("/Rights/user/list");
        } else {
          this.$message.error("没通过！");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
div {
  color: pink;
}
.Login_form {
  width: 200px;
}
</style>