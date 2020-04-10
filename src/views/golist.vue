<template>
  <div>
    <el-button type="warning" @click="dj">点击</el-button>
    <transition name="slide-fade">
      <div class="box" v-show="isShow"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "HOME",
      isShow: true
    };
  },
  methods: {
    dj() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  height: 500px;
  color: aqua;
  background: pink;
  margin: 0 auto;
  border-radius: 100%;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>