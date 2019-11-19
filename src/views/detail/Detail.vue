<template>
  <div id='detail'>
   <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods" ></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

import {getDetail,Goods,Shop} from 'network/detail'

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  name: 'Detail',
  props: {},
  data() {
    return {
      iid: null,
      topImages: {
        type: Array,
        default(){
          return []
        }
      },
      goods: {},
      shop: {},
    };
  },
  watch: {},
  computed: {
    
  },
  methods: {},
  created() {
    console.log('详情页初始化');
    
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const data = res.result
      
      this.topImages =data.itemInfo.topImages
      console.log(this.topImages)
      
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
       console.log('============');
        console.log(new Shop(data.shopInfo) );
      this.shop = new Shop(data.shopInfo)
      console.log('============');
      console.log(this.shop );
      
      
      
      
    })
  },
  mounted() {}
};
</script>
<style  scoped>
</style>