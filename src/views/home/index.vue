<template>
    <el-container id="home" style="height: 722px">
        <!--侧边导航菜单-->
        <!--问题：这里菜单展开时出现X方向的滚动条-->
        <el-aside width="200px" style="height: 722px; overflow-x: hidden">
            <Navigation/>
        </el-aside>

        <el-container>
            <!--top tags-->
            <el-header style=" font-size: 12px">
                <el-breadcrumb separator="/" class="myBreadcrumb">
                    <el-breadcrumb-item :to="{path: '/Home'}">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>客户管理</el-breadcrumb-item>
                </el-breadcrumb>
                <!--<el-dropdown style="margin-left: 900px;width: 50px">
                    <i class="el-icon-setting"></i>
                </el-dropdown>-->
                <span style="margin-left: 900px">vue_bs</span>
            </el-header>
            <!--main content-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>


    /*.menu-title{
        padding-left: 0;
    }*/
    #home .el-header {
        background-color: #ebeef5;
        line-height: 60px;
        cursor: pointer;
    }
    #home .el-header .myBreadcrumb{
        float: left;
        line-height: inherit;
        width: 150px;
    }


</style>

<script>

    import Navigation from "../../components/Navigation/index";

    export default {
        name:'Home',
        components: {Navigation},
        comments:{

        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };

            return {
                isCollapse:true,
                tableData: Array(20).fill(item)
            }
        },
        created() {
            console.log(window.screen.width )
            console.log(window.screen.height )
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

