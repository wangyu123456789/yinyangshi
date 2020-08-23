<template>
  <div class>
    <el-card class="box-card">
      <breadcrumb>
        <span slot="main">参与项目</span>
        <span slot="main_a">项目经验</span>
      </breadcrumb>
      <!-- 项目 -->
      <div class="box_project">
        <el-carousel :interval="3000" type="card" height="550px">
          <el-carousel-item v-for="item in 5" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
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
.box_project {
  width: 100%;
  height: 700px;
  border: 1px solid #cccccc;
  box-shadow: 10px 10px 0 0 #cccccc;
  border-radius: 15px;
  position: relative;
}
.box_project .el-carousel {
  width: 100%;
  height: 600px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.el-carousel__item {
  height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
