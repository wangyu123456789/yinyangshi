<template>
  <div class>
    <el-card class="box-card">
      <breadcrumb>
        <span slot="main">我的分享</span>
        <span slot="main_a">个人分享</span>
      </breadcrumb>
      <!-- 个人分享 -->
      <div class="box_share">
        <el-row>
          <el-tooltip class="item" effect="dark" content="微信" placement="top">
            <el-button type="primary" class="iconfont icon-wechat">微信</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="QQ" placement="top">
            <el-button type="success" class="iconfont icon-qq">QQ</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="码云" placement="top">
            <el-button type="info" class="iconfont icon-gitee-fill-round">码云</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="CSDN" placement="top">
            <el-button type="warning" class="iconfont icon-csdn">CSDN</el-button>
          </el-tooltip>
        </el-row>
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
.box_share {
  width: 100%;
  height: 700px;
  border: 1px solid #cccccc;
  border-radius: 15px;
  .el-row {
    display: flex;
    justify-content: space-around;
    margin-top: 350px;
    .iconfont {
      font-size: 18px;
    }
  }
}
</style>
