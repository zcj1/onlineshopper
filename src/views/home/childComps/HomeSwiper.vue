<template>
    <div>
     
       <swiper :options="swiperOption" class='home-swiper'>
        <swiper-slide v-for="(slide, index) in banners" :key="index">
            <a :href="slide.link">
                <img :src="slide.image" alt="" class='nav-swpier-img' @load="imageLoad">
            </a> 
        </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    data() {
        return {
           swiperOption: {
            pagination: {
            el: '.swiper-pagination'
            },
            isLoad: false
          },
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
      imageLoad() {
        console.log("------");
        if(!this.isLoad) {
          this.isLoad=true;
          this.$emit('swiperImageLoad')
        }
        
      }
    },
    components: {
      swiper,
      swiperSlide,
    },
};
</script>

<style scoped >
  .home-swiper {
        width: 100%;
        height: 150px;
    }
    .nav-swpier-img {
        width: 100%;

    }
</style>
