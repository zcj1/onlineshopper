<template>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="nav-center">购物街</div>
      </nav-bar>

        <tab-control :title="['流行','新款','精选']"
        class="tab-control" @tabClick="tabClick" ref="tabControlRef" v-show="isTabShow"></tab-control>

      <scroll class='content' ref='scrollRef' :probe-type="3" 
      @scroll="contentScroll" @pullingUp='loadMore' :pull-up-load="true">
        <home-swiper :banners='banners' class='home-swiper' @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :title="['流行','新款','精选']"
        class="tab-control" @tabClick="tabClick" ref="tabControlRef" v-show="!isTabShow"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </scroll>
      <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    
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
//滚动组件
import Scroll from 'components/common/scroll/Scroll'
//回到顶部
import BackTop from 'components/content/backTop/BackTop'
//----------------网络请求
//获取首页信息
import {getHomeMultidataReq,getHomeGoodsReq} from 'network/home'
import { log } from 'util'


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
                'sell': {'page': 0, 'list': []},
            },
            currentType: 'pop',
            isShowBackTop: false,
            tabOffsetTop: 0,
            isTabShow: false,
            saveY: 0
           
        };
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
    },
    mounted() {
      const refresh= this.debounce(this.$refs.scrollRef.refresh)

    },
    watch: {

    },
    methods: {
      //----------事件监听方法
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if(timer) clearTimeout(timer) 
          timer = setTimeout(() => {
            func.apply(this,args)
          },delay)
        }
      },
       swiperImageLoad() {
          console.log(this.$refs.tabControlRef.$el.offsetTop);
          this.tabOffsetTop = this.$refs.tabControlRef.$el.offsetTop
        },

      tabClick(index) {
        console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1: 
            this.currentType = 'new'    
              break
          case 2: 
            this.currentType = 'sell'
            break
        }
        this.getHomeGoods(this.currentType) 
        console.log(this.currentType);
        
      },

      backTopClick() {
       
        this.$refs.scrollRef.scrollToa(0, 0, 500)
        
      },

      contentScroll(position) {
       
        this.isShowBackTop=position.y < -1000
       
        //吸顶
        if((-position.y) > this.tabOffsetTop) {
          this.isTabShow=true
        }else {
           this.isTabShow=false
        }
        
      },

      loadMore() {
        this.getHomeGoods(this.currentType);
         console.log('上拉加载更多');
         this.$refs.scrollRef.scroll.refresh()
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
          console.log('getHomeGoods');
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
           this.$refs.scrollRef.finishPullUp();
          })
      },

    },
    activated() {
      this.$refs.scrollRef.scrollToa(0,this.saveY,1000)
      this.$refs.scrollRef.refresh
      console.log('home activated');
      
    },
    deactivated() {
      console.log("home deactivated");
      
      this.saveY = this.$refs.scrollRef.getScrollY()
    },
    destroyed() {
      console.log("home destroyed");
    },
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
      
    },
};
</script>

<style scoped >
    .home-nav {
        background-color: var(--color-tint);
        color: aliceblue;
        
        /* position: fixed; */
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
    /* .home-swiper {
      padding-top: 70px
    } */
    .content {
      /* height: calc(100% - 200px); */
       height: 420px; 
      overflow: hidden;
      /* padding-bottom: 49px; 
     padding-top: 44px; 
     */
    
     /* top: 144px;
      bottom: 149px; */
      /* top: 44px;
      
      bottom: 49px;*/
    }
  
</style>
