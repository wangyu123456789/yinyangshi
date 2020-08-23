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
        <img src="../img/toux.jpg" alt />
        <!-- 信息展示 -->
        <div class="my_user">
          <ul>
            <li>
              姓名：
              <span>{{username}}</span>
            </li>
            <li>邮箱：
              {{email}}
            </li>
            <li>
              性别：
              <span>{{sex}}</span>
            </li>
            <li>
              城市：
              {{city}}
            </li>
            <li>
              工作年限：
              <span>{{work}}</span>
            </li>
            <li>
              电话号码：
              <span>{{number}}</span>
            </li>
          </ul>
        </div>
        <!-- 注意提醒 -->
        <br/>
        <h3>注意：以上信息为静态资源，“假”数据。。。。仅供参考！！</h3>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {},
  data() {
    return {
      username: "王宇", 
      email: "wangyu_123vip@sina.com",
      sex:"男",
      city:"上海",
      work:"2年",
      number:"1820179043",
      touxiang:""
    };
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang='less'>
.box-card{
  width: 100%;
}
.box_user {
  width: 100%;
  height: 700px;
  border: 1px solid #cccccc;
  box-shadow: 10px 10px 0 0 #cccccc;
  border-radius: 15px;
  position: relative;
    img {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 100px;
      left: 50%;
      transform: translate(-50%,-50%);
      border-radius: 50px;
  }
  .my_user{
    margin: 200px 10px 0 10px;
    height: 400px;
    border: 2px solid #00FFFF;
    box-shadow: 2px 2px 0 0 #00FFFF;
    ul{
      display: flex;
      justify-content:space-around;
      flex-wrap: wrap;
      li{
        margin-top:30px;
        width: 80%;
        // border: 1px solid #cccccc;
        font-size: 20px;
        font-weight: bold;
        span{
          font-family: "宋体";
        }
      }
    }
  }
}
h3{
  margin-left: 20px;
  color: red;
}
</style>
