<template>
  <el-container class="my-box">
    <el-header class="my-top">
      <img src="../assets/logo.png" alt />
      <h2>电商后台管理平台</h2>
      <a class="logout" href="#">退出</a>
    </el-header>
    <el-container>
      <el-aside class="my-left" width="200px"></el-aside>
      <el-main class="my-right"></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less">
.my-box {
  height: 100%;

  .my-top {
    height: 60px;
    background-color: #b3c0d1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
      color: #fff;
      
    }
    .logout{
      color: orange;
    }
  }
  .my-right {
    background-color: #e9eef3;
  }
  .my-left {
  }
}
</style>
