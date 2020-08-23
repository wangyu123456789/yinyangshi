<template>
  <div class>
    <el-card class="box-card">
      <breadcrumb>
        <span slot="main">工作信息</span>
        <span slot="main_a">工作经历</span>
      </breadcrumb>
      <!-- 工作信息整体 -->
      <div class="box_work">
        <!-- 添加 -->
        <el-button type="primary" @click="dialogVisible = true">添加工作经历</el-button>
        <!-- 工作信息 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column prop="entryname" label="项目名称" width="220"></el-table-column>
          <el-table-column prop="date" label="时间周期" width="130">时间有点忘</el-table-column>
          <el-table-column prop="describe" label="功能描述"></el-table-column>
          <el-table-column prop="address" label="地址" width="200">地址不一，尚不了解</el-table-column>
          <el-table-column prop="button" label="删除" width="150">
            <!-- 删除 -->
            <template slot-scope="scope">
              <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <!-- 添加对话框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <!-- 添加内容 -->
      <span>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="项目名称">
            <el-input v-model="form.entryname"></el-input>
          </el-form-item>
          <el-form-item label="功能描述">
            <el-input v-model="form.describe"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      form: {
        entryname: "",
        date: "",
        describe: "",
        address: ""
      }
    };
  },
  created() {
    this.fn();
  },
  methods: {
    fn() {
      let res = JSON.parse(localStorage.getItem("res"));
      this.tableData = res;
    },
    async del(id) {
      this.tableData = await this.$axios.delete(`/assets/${id}`);
      this.$message({
        showClose: true,
        message: "恭喜你，删除成功",
        type: "success"
      });
      this.fn();
    },
    async onSubmit(content) {
      // let content = content,
      console.log(content);
      console.log(content.date);

      try {
        this.tableData = await this.$axios.post("/assets", {
            entryname: content.entryname,
            describe: content.describe,
        });
        this.$message({
          showClose: true,
          message: "恭喜你，添加成功",
          type: "success"
        });
      } catch (err) {
        console.log(err);
      }
      this.dialogVisible = false;
      this.fn();
    }
  }
};
</script>

<style scoped lang='less'>
.box_work {
  width: 100%;
  height: 700px;
  border: 5px solid #cccccc;
  box-shadow: 5px 5px 0 0 #cccccc;
  border-radius: 15px;
  overflow: hidden;
  .el-button {
    margin: 15px 0 0 15px;
  }
}
.el-table {
  margin: 20px;
}
</style>
