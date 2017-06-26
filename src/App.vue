<template>
    <div id="app">
        <HeaderNav></HeaderNav>
        <el-row>
            <el-col :span="24">
                <router-view class="router-view"></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import HeaderNav from './components/HeaderNav.vue'
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            HeaderNav
        }
    }
</script>

<style>

</style>
