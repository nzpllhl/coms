<template>
  <div class="bannerBox">
    <h1 style="color:pink;margin-right:20px;">{{msg}}</h1>
    <div class="lunbo-box">
      <el-carousel indicator-position="none">
        <el-carousel-item class="lunbo-box-item" v-for="(item,index) in abc_img" :key="index">
          <img :src="item.src" class="lunbotu" alt="轮播图" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
//import Himg from "../../assets/imgs/hl.png";
export default {
  data() {
    return {
      msg: "欢迎来到海丽项目！",
      abc_img: [
        { src: require("../../assets/imgs/hl.png") },
        { src: require("../../assets/imgs/ngg.png") },
        { src: require("../../assets/imgs/pch.png") }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.bannerBox {
  background: url("../../assets/imgs/zm.png") lightblue;
}
.lunbotu {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>