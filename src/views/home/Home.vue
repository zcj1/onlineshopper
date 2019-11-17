<template>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="nav-center">购物街</div>
      </nav-bar>
      <home-swiper :banners='banners'></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']"
       class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods['pop'].list"></goods-list>
    </div>
</template>

<script>
//----------------组件导入
//推荐信息
import RecommendView from './childComps/RecommendView'
//本周流行
import FeatureView from './childComps/FeatureView'

//----------------公共组件
//底部导航栏组件
import NavBar from 'components/common/navbar/NavBar'
//轮播图组件
import HomeSwiper from 'views/home/childComps/HomeSwiper'
//tab页组件
import TabControl from 'components/content/tabcontrol/TabControl'
//商品显示页
import GoodsList from 'components/content/goods/GoodsList'
//----------------网络请求
//获取首页信息
import {getHomeMultidataReq,getHomeGoodsReq} from 'network/home'


export default {
    name: 'Home',
    props: {

    },
    data() {
        return {
            //请求数据接收
            banners: [],
            dKeyword: [],
            keywords: [],
            recommends: [],
            goods: {
                'pop': {'page': 0, 'list': []},
                'new': {'page': 0, 'list': []},
                'sel;': {'page': 0, 'list': []},
            }
          
        };
    },
    computed: {

    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
    },
    mounted() {

    },
    watch: {

    },
    methods: {
      //----------事件监听方法
      tabClick(index) {
        console.log(index);
        
      },


      //----------网络请求相关
      getHomeMultidata() {
          getHomeMultidataReq().then(res => {
          
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          });
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
          getHomeGoodsReq(type,1).then(res =>{
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          })
      },

    },
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList
      
    },
};
</script>

<style scoped >
    .home-nav {
        background-color: var(--color-tint);
        color: aliceblue;
        
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .tab-control {
        position: sticky;
        top: 44px;
        background-color: #fff;
        z-index: 9
    }
  
</style>
