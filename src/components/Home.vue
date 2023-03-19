<template>
  <div class="home">
        <Header />
        <el-container class="content">
          <Menu />
          <el-container>
            <el-main>
              <Bread/>
              <div class="cont">
                <router-view></router-view>
              </div>
            </el-main>
            <el-footer><Footer /></el-footer>
          </el-container>
        </el-container>
  </div>
</template>

<script>
//home是主页面，不管是作业管理还是其他页面，都只是组件，而组件的使用首先要在home里面导入，注册，让后放入主页面里的<templte>里面
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
import Menu from './common/Menu.vue';
import Bread from './common/Breadcrumb.vue'//面包屑，即“首页>学生>学生管理”之类的标记当前所在页面的
export default {
    components:{
      Header,
      Footer,
      Menu,
      Bread,
    },
    data(){
      return{}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home{
width: 100%;
height: 100%;

}
.content{
  position:absolute;
  width:100%;
  top:60px;
  bottom: 0;
}
.cont{
  margin:20px 0;
}

</style>
