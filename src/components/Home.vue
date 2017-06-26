<template>
    <div id="home">
        <el-row>
            <el-col>
                <div class="ad">
                    <el-row>
                        <el-col :push="5" :span="19">
                            <el-button type="warning">IOS</el-button>
                            <el-button type="info">Android</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="9" :push="5">
                <el-row>
                    <el-col>fasdfasdfsdfasd</el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane :key="editableTabs2.name"
                                         :label="editableTabs2.title"
                                         :name="editableTabs2.name" v-html="editableTabs2.content"></el-tab-pane>
                            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="bg-purple" :span="5" :push="5">
                fsdfsdfsdfsdsdf
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>

</style>
<script>
    export default {
        data() {
            return {
                activeName: 'first',
                editableTabs2: {
                    title: 'Tab 1',
                    name: '1',
                    content: '555'
                }
            };
        },
        methods: {
            handleClick(tab, event) {
                this.editableTabs2.content='<p>dsfasfsdfasfasdfasd</p>';
            }
        },mounted:function(){
            console.log('sb');
        }
    }
</script>