<template>
  <div>
    <ProductPage style="padding-left: 15%" />
    <br /><br />
    <div style="color: #603813; padding-left: 15%; padding-right: 10%; font-size: 25px">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint ut
      harum quas, porro voluptate optio iure rerum deserunt a id saepe modi et
      distinctio suscipit deleniti temporibus explicabo sapiente, error iste
      corporis repudiandae dolorem in? Incidunt officiis quis aperiam eum ea
      excepturi illum placeat necessitatibus porro expedita cum quasi iste
      adipisci tempora totam veritatis, cupiditate nihil, vel vitae odio debitis
      dolorum aliquam blanditiis? Atque facilis veritatis, harum quod veniam
      commodi quam consequuntur voluptatibus consectetur nihil corrupti magni a
      iusto voluptatem nostrum est molestiae cumque architecto reprehenderit
      recusandae exercitationem ex! Aspernatur sint velit enim, nostrum corrupti
      architecto repellendus ullam, quas atque optio ea. Natus aliquid vitae
      eveniet quasi nemo, laudantium debitis recusandae quaerat maiores hic, rem
      alias exercitationem molestias. Vero laborum neque, asperiores qui sed
      maiores aliquam quae optio accusantium dignissimos culpa itaque sequi
      omnis! Temporibus harum doloribus dolores explicabo quia optio. Doloremque
      neque atque officiis voluptatibus, veritatis deserunt dolorem id dolor
      vitae mollitia dicta sunt voluptates quisquam eius, quam ipsa est dolorum
      temporibus architecto sed harum. Quaerat eligendi vero ea dolor
      consectetur, ad ullam autem deleniti vitae earum reiciendis omnis nostrum
      incidunt corporis quam nam praesentium, commodi nobis quos, ex maxime.
      Corrupti, tempora eos molestiae nulla doloremque unde adipisci.
    
    </div>
    
    <SimilarProducts style="padding-left: 15%" />
    <Comments style="width: 200%" />
    <Nuxt />
  </div>
</template>
<script>
import ProductPage from "../components/ProductPage";
import SimilarProduct from "../components/SimilarProducts";
import Comments from "../components/Comments";
export default {
  components: {
    ProductPage,
    SimilarProduct,
    Comments,
  },
};
</script>
<style>
</style>