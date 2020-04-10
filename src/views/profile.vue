<template>
  <div id="lll">
    姓：
    <input type="text" v-model="firstName" />
    名：
    <input type="text" v-model="lastName" />
    <h1>{{fullName}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "龙",
      lastName: "海丽"
      //fullName: "龙海丽"
    };
  },
  // watch: {
  //   firstName(val) {
  //     this.fullName = val + " " + this.lastName;
  //   },
  //   lastName(val) {
  //     this.fullName = this.firstName + " " + val;
  //   }
  // },
  computed: {
    fullName() {
      return this.firstName + this.lastName;
    }
  }
};
</script>

<style lang="less" scoped>
#lll {
  color: red;
}
</style>