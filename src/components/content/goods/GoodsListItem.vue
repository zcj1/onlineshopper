<template>
    <div class='goods-item' @click="itemClick">
      <img :src="goodsItem.show.img" alt="">
      <div class="goods-info">
        <p class="goods-title">{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
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
      itemClick() {
        console.log('跳转详情页');
        this.$router.push('/detail/'+this.goodsItem.iid)
        
      }
    },
    components: {

    },
};
</script>

<style scoped >


  .goods-item {
    padding-bottom: 40px;
     position: relative; 
     width: 45%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

   .collect {
    position: relative;
    
  }

   .collect::before {
    display: block;
    content: '';
    position: absolute;
    left: -13px;
    top: -20%;
    width: 15px;
    height: 15px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
           
    
  }

</style>
