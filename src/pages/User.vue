<template>
  <div class="box">
    <el-card class="box-card">
      <breadcrumb>
        <span slot="main">个人资料</span>
        <span slot="main_a">个人资料显示</span>
      </breadcrumb>
      <!-- 个人信息 -->
      <div class="box_user">
        <!-- 头像 -->
        <div class="login">
          <img src="../img/toux.jpg" alt />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang='less'>
.box_user {
  width: 100%;
  height: 500px;
  border: 1px solid #cccccc;
  box-shadow: 10px 10px 0 0 #cccccc;
  border-radius: 15px;
  .login {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: aqua;
    margin: 0 auto;
    margin-top: 20px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
  }
}
</style>
