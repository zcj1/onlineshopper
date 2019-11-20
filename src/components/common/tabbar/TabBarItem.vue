<template>
    <div @click="itemClick" class='tab-bar-item'>
      <div>
        <div v-if="!isActive" >
          <slot name="item-icon" ></slot>
        </div>
         <div v-else>
          <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle" class="item-text-font">
          <slot name="item-text"></slot>
        </div>

      </div>
    </div>
</template>

<script>
import { log } from 'util';
export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
        return {
          
        };
    },
    computed: {
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      },
      isActive() {
        return this.$route.path.indexOf(this.path) !==-1
      }
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      itemClick() {
        console.log("itemClick");
        
        this.$router.replace(this.path).catch((e) => {})
      }
     
    },
    components: {

    },
};
</script>

<style scoped >
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 7px;
  }

  .item-text-font {
    font-size: 13px;
  }

</style>
