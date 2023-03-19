<template>
    <div>
        <el-header class="header">
            <div class="title">通用管理系统</div>
            <div>{{name}}</div>
        </el-header>
    </div>
</template>
<script>
import {getToken} from '@/utils/setToken.js'
export default{
    data(){
        return{
            name:""
        }
    },
    created(){
        this.name=getToken('username')
    }
}
</script>
<style lang="scss" scoped>
.header{
   background:#409eff;
   color:white;
   line-height: 60px;
   display:flex;
   justify-content: space-between;

}
.title{
 width:200px;
 font-size:24px   
}
</style>