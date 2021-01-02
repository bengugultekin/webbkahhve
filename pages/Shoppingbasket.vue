<template>
    <div>
       <ShoppingBasket/> 
       <Nuxt />
       
    </div>
    
    
</template>
<script>
import ShoppingBasket from "../components/ShoppingBasket"
export default {
    components:{
        ShoppingBasket
    }
}
</script>