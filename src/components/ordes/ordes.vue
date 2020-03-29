<template>
  <div>
    <!-- 头部 面包屑导航-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- table -->
      <el-table :data="rightsList" border>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="权限名称" prop="name"></el-table-column>
        <el-table-column label="路径" prop="luj"></el-table-column>
        <el-table-column label="权限等级" prop="vip"></el-table-column>
      </el-table>
    </el-card>
  </div>
  <!-- 卡片视图 -->
</template>

<script>
export default {
  data() {
    return {
      rightsList: []
    };
  },
  created() {
    this.getrightsList();
  },
  methods: {
    getrightsList() {}
  }
};
</script>

<style lang="less" scoped>
</style>