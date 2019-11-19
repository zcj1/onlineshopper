<template>
  <div id='detail'>
   <detail-nav-bar></detail-nav-bar>
    
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
  components: {
    DetailNavBar
  },
  name: 'Detail',
  props: {},
  data() {
    return {
         iid: null
    };
  },
  watch: {},
  computed: {
    
  },
  methods: {},
  created() {
    console.log('详情页初始化');
    
    this.iid = this.$route.params.iid
  },
  mounted() {}
};
</script>
<style  scoped>
</style>