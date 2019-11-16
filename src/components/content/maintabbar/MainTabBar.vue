<template>
    <tab-bar >
      <tab-bar-Item path='/home' >
        <img src="~assets/img/tabbar/shouye.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/shouye-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-Item>
       <tab-bar-Item path='/cart' >
        <img src="~assets/img/tabbar/fenlei.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/fenlei-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-Item>
       <tab-bar-Item path='/category' >
        <img src="~assets/img/tabbar/gouwuche.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/gouwuche-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-Item>
       <tab-bar-Item path='/profile' >
        <img src="~assets/img/tabbar/wode.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/wode-active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-Item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name: 'MainTabBar',
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
      TabBar,
      TabBarItem
    },
};
</script>

<style scoped >

</style>
