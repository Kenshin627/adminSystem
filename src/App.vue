<template>
  <div id="app">
    <div class="topMenu">
     <el-row>
       <el-menu
         :default-active="activeIndex2"
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         background-color="#545c64"
         text-color="#d0d0d0"
         active-text-color="#ffd04b">
         <el-menu-item index="6" class="BroadLogo">AdminManager</el-menu-item>
         <el-submenu index="1">
           <template slot="title">个人中心</template>
           <el-menu-item index="1-1">基本资料</el-menu-item>
           <el-menu-item index="1-2">修改密码</el-menu-item>
           <el-menu-item index="1-3">注销</el-menu-item>
         </el-submenu>
         <el-menu-item index="2">处理中心</el-menu-item>
         <el-submenu index="3">
           <template slot="title">我的工作台</template>
           <el-menu-item index="3-1">选项1</el-menu-item>
           <el-menu-item index="3-2">选项2</el-menu-item>
           <el-menu-item index="3-3">选项3</el-menu-item>
           <el-menu-item index="3-3">选项4</el-menu-item>
         </el-submenu>
         <el-menu-item index="4">消息中心</el-menu-item>
         <el-menu-item index="5">订单管理</el-menu-item>
       </el-menu>
     </el-row>
    </div>
    <div>
      <el-row class="tac">
        <el-col :span="3">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" style="min-height: 867px">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">导航五</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">导航六</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-setting"></i>
              <span slot="title">导航七</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-setting"></i>
              <span slot="title">导航八</span>
            </el-menu-item>
            <el-menu-item index="9">
              <i class="el-icon-setting"></i>
              <span slot="title">导航九</span>
            </el-menu-item>
            <el-menu-item index="10">
              <i class="el-icon-setting"></i>
              <span slot="title">导航十</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="21">
          <div class='content'>
            <productList></productList>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import productList from './components/productList'
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components:{productList}
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu--horizontal>.el-menu-item{
  float: right;
}

.el-menu--horizontal>.el-submenu{
  float: right;
}
  .BroadLogo{
    float: left !important;
    font-size: 30px;
    margin-left: 17px !important;
    font-family: "华文行楷";
  }
.content{
min-height: 861px;
  margin: 3px;
  background-color: rgba(184, 184, 185, 0.99);
}
.el-menu--horizontal{
  border-bottom: none;
}
  body{
    margin:0;
  }

</style>
