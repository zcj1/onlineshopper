<template>
  <div >
     <nav-bar >
       <div slot='nav-left' class='back' @click='backClick'>
         <img src="~assets/img/common/back.svg" alt="">
       </div>
      <div slot="nav-center" class='title'>
        <div v-for='(item,index) in titles' class='title-item' :class="{active: index === currentIndex}" @click="titleClick(index)"> {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  },
  name: 'DetailNavBar',
  props: {},
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    };
  },
  watch: {},
  computed: {
    
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
  .title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }

  .back img {
    width: 35%;
    margin-top: 10px;
  }
</style>