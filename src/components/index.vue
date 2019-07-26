<template>
    <el-container class="my-box">
  <el-header class="my-top">
      
  </el-header>
  <el-container>
    <el-aside class="my-left" width="200px"></el-aside>
    <el-main class="my-right"></el-main>
  </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .my-box{
    height: 100%;
    .my-top{
        background-color: #b3c0d1;
    }
    .my-right{
        background-color:#e9eef3;
    }
    .my-left{

    }
  }
</style>
