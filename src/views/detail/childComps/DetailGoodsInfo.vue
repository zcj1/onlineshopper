<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info" >
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" @load="imgLoad" :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  watch: {
    detailInfo() {
      tihs.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  },
  computed: {},
  methods: {
    imgLoad() {
      if(++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
      }
    }
  },
  created() {
   
    
    
  },
  mounted() {}
};
</script>
<style  scoped>

  .info-list img{
    width: 50%;
  }
</style>