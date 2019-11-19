<template>
  <div class='wrapper' ref="wrapper">
    <div class='content'>
      <slot>

      </slot>
    </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  components: {
    BScroll
  },
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    scrollToa(x,y,time) {
      
      this.scroll.scrollTo(x,y,time)
    },

    finishPullUp() {
      this.scroll.finishPullUp()
    },

    getScrollY() {
      return this.scroll ? this.scroll.y :0
    }



  },
  created() {},
  mounted() {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      bounce: true,
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      },
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动
    this.scroll.on('scroll', (position) => {
     this.$emit('scroll',position)
      
    })
    //监听上拉事件
    this.scroll.on('pullingUp',() => {
     
      this.$emit('pullingUp')
      
    })
    this.scroll.refresh()

   
    
  }
};
</script>
<style  scoped>
 
  
</style>