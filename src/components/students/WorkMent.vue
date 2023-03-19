<!-- 组件化思想，比如分页这个功能可也单独写一个组件，别的地方使用只需要传参调用就可以了 -->
<template>
    <div class="workMent">
        <el-table :data="tableData" border style="width: 100%" v-loading="loading">
            <el-table-column prop="id" label="用户id" align="center"></el-table-column>
            <el-table-column prop="userId" label="所属班级" align="center"></el-table-column>
            <el-table-column prop="title" label="作业名称" align="center"></el-table-column>
            <el-table-column prop="completed_text" label="完成情况" align="center"></el-table-column>
        </el-table>
        <Page :total="total" :url="url"/>
    </div>
</template>
<script>
import Page from '../common/Pageing.vue'
// import { getTableData } from '@/utils/table'
export default {
    components:{
        Page,
    },
    data() {
        return {
            tableData: [],
            total:0,
            loading:true,
            url:'/works'
        }
    },
}
</script>
<style>

.el-pagination{
        text-align:left;
        margin-top:20px;
    }
</style>