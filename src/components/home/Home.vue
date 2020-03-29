<template>
  <el-container class="Home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../../assets/imgs/lhl.png" alt style="width:50px;height:62px" />
        <span>电商后台管理系统</span>
      </div>
      <el-dropdown trigger="hover">
        <span style="color: white" class="el-dropdown-link userinfo-inner">
          <i class="iconfont icon-icon-user"></i>
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="getPassWord">修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="goPersonalCenter">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="goSetting">设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="Logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="'isCollapse ? 64px:200px '">
        <div class="toggbtn" @click="toggleCollase">|||</div>
        <!-- 侧边栏菜单 -->
        <el-menu
          background-color="cornflowerblue"
          text-color="#fff"
          active-text-color="hotpink"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 1级菜单 -->
          <el-submenu index="item.id" v-for="(item,i) in menuList" :key="i">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 动态的方式 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.autName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="(subItem,i) in item.children"
              :key="i"
              @click.native="saveNavState('/'+subItem.path)"
            >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subItem.autName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false, // 菜单是否折叠
      activePath: "", // 被激活的链接地址
      menuList: [],
      iconsObj: {
        //   "id" : "对应的图标地址"
        "125": "iconfont icon-user",
        "126": "iconfont icon-data",
        "127": "iconfont icon-acces",
        "127": "iconfont icon-collect",
        "128": "iconfont icon-add",
        "129": "iconfont icon-add"
      }
    };
  },
  created() {
    this.getmeuunList();
    this.activePath = sessionStorage.getItem("activePath");
  },
  methods: {
    exploit() {
      this.$message.error("暂时没有开发！");
    },
    getPassWord() {
      this.exploit();
    },
    goPersonalCenter() {
      this.exploit();
    },
    goSetting() {
      this.exploit();
    },

    Logout() {
      sessionStorage.clear();
      this.$router.push("/Login");
    },
    getmeuunList() {
      this.$http.get("/menuList").then(res => {
        console.log(res.data);
        this.menuList = res.data;
      });
    },
    // 点击头部的div切换菜单的折叠与展开
    toggleCollase() {
      this.isCollapse = !this.isCollapse;
    },
    // 动态保导航菜单的高亮状态:
    //1.点击二级菜单的时候的时候获取当前的链接
    //2.获取到链接后，把对应的值存到本地
    //3.完了后重新赋值

    saveNavState(activePath) {
      sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background: cornflowerblue;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  font-size: 20px;
  color: aliceblue;
  > div {
    display: flex;
    align-items: center;
    > span {
      margin-left: 30px;
    }
  }
}
.el-aside {
  background: cornflowerblue;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background: #ffff;
}
.Home-container {
  height: 100%;
}
.iconfont {
  margin-right: 10px;
}
.toggbtn {
  background: skyblue;
  font-size: 14px;
  text-align: center;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>