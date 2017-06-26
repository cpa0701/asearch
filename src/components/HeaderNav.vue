<template>
    <div id="headerNav">
        <el-row>
            <el-col :xs="13" :offset="5" :span="13">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                         @select="handleSelect">
                    <router-link to="/ss" active-class="active" tag="a" index="1" class="el-menu-item">

                    </router-link>
                    <router-link to="/home" tag="li" active-class="active" index="2" class="el-menu-item">
                        首页
                    </router-link>
                    <router-link to="/topic" tag="li" active-class="active" index="2" class="el-menu-item">
                        话题
                    </router-link>
                    <router-link to="/aAndS" tag="li" active-class="active" index="3" class="el-menu-item">
                        问答
                    </router-link>
                    <el-submenu index="4">
                        <template slot="title" style="color: #fff">行情</template>
                        <router-link to="/price1" tag="li" index="4-1" active-class="active" class="el-menu-item">
                            行情中心
                        </router-link>
                        <router-link to="/price2" tag="li" index="4-2" active-class="active" class="el-menu-item">
                            新股上市
                        </router-link>
                        <router-link to="/price3" tag="li" index="4-3" active-class="active" class="el-menu-item">
                            筛选器
                        </router-link>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">交易</template>
                        <router-link to="/trade1" tag="li" active-class="active" index="5-1" class="el-menu-item">
                            A股交易
                        </router-link>
                        <router-link to="/trade2" tag="li" active-class="active" index="5-2" class="el-menu-item">
                            港美股交易
                        </router-link>
                        <router-link to="/trade3" tag="li" active-class="active" index="5-3" class="el-menu-item">
                            蛋卷基金
                        </router-link>
                        <router-link to="/trade4" tag="li" active-class="active" index="5-4" class="el-menu-item">
                            私募中心
                        </router-link>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">发现</template>
                        <router-link to="/discover1" tag="li" active-class="active" index="6-1" class="el-menu-item">
                            买什么
                        </router-link>
                        <router-link to="/discover2" tag="li" active-class="active" index="6-2" class="el-menu-item">
                            找人
                        </router-link>
                        <router-link to="/discover3" tag="li" active-class="active" index="6-3" class="el-menu-item">
                            阡寻访谈
                        </router-link>
                    </el-submenu>
                    <el-menu-item index="7">
                        <el-input v-model="input" icon="search" placeholder="请输入内容"></el-input>
                    </el-menu-item>
                    <router-link to="/register" tag="li" active-class="active" index="8" class="el-menu-item">
                        没有账号，立即注册
                    </router-link>
                    <router-link to="/register" tag="li" active-class="active" index="9" class="el-menu-item">
                        <el-button icon="information">登录</el-button>
                    </router-link>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                input: ''
            };
        },
        methods: {
            handleSelect(key, keyPath) {

            }
        }
    }
</script>
