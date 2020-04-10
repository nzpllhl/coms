<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu router text-color="pink" :default-active="$route.path">
          <el-menu-item index="/Rights/user/add">用户添加</el-menu-item>
          <el-menu-item index="/Rights/user/list">用户列表</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "用户列表"
    };
  }
};
</script>

<style lang="less" scoped>
</style>