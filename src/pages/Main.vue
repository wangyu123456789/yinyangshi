<template>
  <el-container>
    <!-- 头部 -->
    <el-header style="height: 80px;">
      <div class="logo">
        <img src="../img/logo.png" alt />
        <span>My personal Center</span>
      </div>
      <div class="user_logo">
        <img src="../img/logo.png" alt />
      </div>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边 -->
      <el-aside :width="isCollapse? '64px':'200px'">
        <!-- 切换侧边栏的宽度 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边1 -->
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          class="el-menu-vertical-demo"
          :collapse-transition="false"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span slot="title">个人资料</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/user">个人资料显示</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-comment"></i>
              <span slot="title">工作信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/work">工作经历</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span slot="title">参与项目</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/project">项目经验</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-connection"></i>
              <span slot="title">我的分享</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/share">个人分享</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容 -->
      <el-main>
        <!-- 二级出口 -->
        
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 定义侧边栏的伸缩
      isCollapse: false
    };
  },
  created(){
    this.fn()
  },
  methods: {
    //获取用户信息
     async fn(){
      let res = await this.$axios.get('/assets')
      // console.log(res.data);
      localStorage.setItem('res',JSON.stringify(res.data))
      
    },
    // 点击按钮切换菜单的折叠和展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373f41;
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: center;
  color: #ffffff;
  .logo {
    height: 100%;
    display: flex;
    img {
      display: flex;
      width: 200px;
      height: 100%;
    }
    span {
      display: flex;
      font-size: 30px;
      align-items: center;
      padding-left: 10px;
      color: aqua;
    }
  }
  .user_logo {
    width: 50px;
    height: 50px;
    padding-right: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
}
.el-aside {
  background-color: #545c64;
  .el-menu {
    border: none;
  }
}

.el-main {
  background-color: #e9eef3;
}
.toggle-button {
  background-color: #4a5064;
  color: white;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
