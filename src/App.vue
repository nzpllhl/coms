<template>
  <div id="app">
    <!-- 路由占位符 -->
    <!-- <router-link to="/Login"></router-link> -->
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style>
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s linear;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 1s linear;
}
.v-leave-to {
  opacity: 0;
}
</style>
