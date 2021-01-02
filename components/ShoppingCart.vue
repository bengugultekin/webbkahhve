<template>
    <div class="alan">
        <h2 style="color: #C65800">
            <b-icon icon="cart4" style="color: #C65800"></b-icon> Sepetiniz
        </h2>
        <hr />
        <div>
            <i> KahhveCom Kahhve Tanışma Seti</i><i class="zsd"> 124.99 TL </i>
        </div>

        <hr color="#C65800" size="4" />
        <div>
            <strong style="color: #603813 " class="col-md-2"> Toplam </strong>
            <strong class="zsd">124,99 TL</strong>
        </div>
        <div>
            <button class="sppgnbtn">ALIŞVERİŞE DEVAM ET</button>
            <button class="crtbtn">SEPETE GİT</button>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {};
</script>

<style>
.alan {
    width: 400px;
}
.sppgnbtn {
    background-color: #603813;
    color: white;
    border-radius: 10px;
    right: 0;
    position: absolute;
    left: 123px;
    border: #603813;
}

.crtbtn {
    background-color: #c65800;
    color: white;
    border-radius: 10px;
    position: absolute;
    left: 300px;
    border: #c65800;
}
.zsd {
    position: absolute;
    left: 323px;
}
</style>