<template>
  <div>
    <el-button type="info" @click="Logout">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Logout() {
      sessionStorage.clear();
      this.$router.push("/Login");
    }
  }
};
</script>

<style lang="less" scoped>
</style>