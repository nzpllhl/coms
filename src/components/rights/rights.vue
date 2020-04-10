<template>
  <div>
    <el-header>
      <!-- <router-link to="/Rights/golist">首页</router-link>
      <router-link to="/Rights/user">用户</router-link>
      <router-link to="/Rights/profile">个人中心</router-link>-->
      <el-row>
        <el-col :span="4">
          <img src alt />
        </el-col>
        <el-col :span="20">
          <el-menu
            router
            mode="horizontal"
            background-color="#2a2a2a"
            active-text-color="#ffd04b"
            :default-active="$route.path"
          >
            <el-menu-item index="/Rights/golist">首页</el-menu-item>
            <el-menu-item index="/Rights/user">首用户</el-menu-item>
            <el-menu-item index="/Rights/profile">个人中心</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
      <router-view name="logo"></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background: #2a2a2a;
  color: #fff;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.el-footer {
  background: #2a2a2a;
  color: #fff;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.el-main {
  min-height: calc(100vh - 120px);
  color: #fff;
}
</style>