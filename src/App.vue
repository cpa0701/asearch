<template>
    <div id="app">
        <HeaderNav></HeaderNav>
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
