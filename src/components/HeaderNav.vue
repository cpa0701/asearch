<template>
    <div id="headerNav">
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                         @select="handleSelect">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">话题</el-menu-item>
                    <el-menu-item index="3">问答</el-menu-item>
                    <el-submenu index="4">
                        <template slot="title" style="color: #fff">行情</template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                        <el-menu-item index="4-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">交易</template>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                        <el-menu-item index="5-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">发现</template>
                        <el-menu-item index="6-1">选项1</el-menu-item>
                        <el-menu-item index="6-2">选项2</el-menu-item>
                        <el-menu-item index="6-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="7">
                        <el-input v-model="input" icon="search" placeholder="请输入内容"></el-input>
                    </el-menu-item>

                </el-menu>
            </el-col>
        </el-row>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
