<template>
  <div>
    <h1>{{msg}}</h1>
    <el-button type="primary" @click="go">返或</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "404"
    };
  },
  methods: {
    go() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
div {
  color: black;
}
</style>