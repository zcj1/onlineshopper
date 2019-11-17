<template>
    <div class ="nav-bar">
      <div class="nav-left"><slot name="nav-left"></slot></div>
      <div class="nav-center" ><slot name="nav-center"></slot></div>
      <div class="nav-right"><slot name="nav-right"></slot></div>
    
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
      
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

    },
    components: {

    },
};
</script>

<style scoped >
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgb(100,100,100,0.2)
  }

  .nav-left, .nav-right {
    width: 60px;
  }

  .nav-center {
    flex: 1;
  }
</style>
