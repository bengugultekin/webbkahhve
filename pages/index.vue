<template>
  <div>
    
    <Slider/>
    <PopularProduct/>
    <Nuxt />
  </div>
</template>
<script>

import Slider from "../components/Slider"
import PopularProduct from '../components/PopularProduct.vue'
export default {
  components:{
  Slider,
  PopularProduct
  
}
}
</script>
<style>

</style>
