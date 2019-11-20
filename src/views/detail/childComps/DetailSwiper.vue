<template>
    <div>
      <swiper :options="swiperOption" class='detail-swiper'>
        <swiper-slide v-for="(slide, index) in topImages" :key="index">
         
              <img :src="slide" alt="" class='detail-swpier-img' >
          
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
    name: 'DetailSwiper',
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
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

    },
    components: {
      swiperSlide,
      swiper
    },
};
</script>

<style scoped >
  .detail-swiper {
    height: 300px;
  
  }
</style>
