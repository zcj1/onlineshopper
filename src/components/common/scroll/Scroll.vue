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
  methods: {},
  created() {},
  mounted() {
  
    this.scroll = new BScroll(this.$refs.wrapper, {
      
    })
    
    
  }
};
</script>
<style  scoped>
</style>