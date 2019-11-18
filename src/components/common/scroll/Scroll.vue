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
  props: {},
  data() {
    return {
      scroll: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    scrollTo(x,y,time) {
      
      this.scroll.scrollTo(x,y,time)
    }
  },
  created() {},
  mounted() {
  
    this.scroll = new BScroll(this.$refs.wrapper, {
      
    })
     this.scroll.scrollTo(0,0)
    
  }
};
</script>
<style  scoped>

</style>