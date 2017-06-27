<template>
    <div id="home">
        <el-row>
            <el-col>
                <div class="ad">
                    <el-row>
                        <el-col :push="6" :span="18">
                            <el-button type="warning">IOS</el-button>
                            <el-button type="info">Android</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="50">
            <el-col :span="8" :push="6">
                <el-row>
                    <el-col>
                        12312313212123323
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane :key="item.name"
                                         :label="item.title"
                                         :name="item.name" v-html="item.content"
                                         v-for="(item,index) in tabs">
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="bg-purple" :span="4" :push="6">
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
                activeName: '0',
                tabs: [
                    {
                        title: '头条',
                        name: '0',
                        content: '我是头条'
                    },
                    {
                        title: '直播',
                        name: '1',
                        content: '我是直播'
                    },
                    {
                        title: '房产',
                        name: '2',
                        content: '我是房产'
                    },
                    {
                        title: '港股',
                        name: '3',
                        content: '我是港股'
                    },
                    {
                        title: '基金',
                        name: '4',
                        content: '我是基金'
                    },
                    {
                        title: '美股',
                        name: '5',
                        content: '我是美股'
                    },
                    {
                        title: '保险',
                        name: '6',
                        content: '我是保险'
                    },
                    {
                        title: '沪深',
                        name: '7',
                        content: '我是沪深'
                    }
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
//                this.editableTabs2.content = '<p>dsfasfsdfasfasdfasd</p>';
            }
        }, mounted: function () {
//            console.log('sb');
        }
    }
</script>