<template>
  <div class="ornek">
    <div>
      <img src="https://kahhvecom.imgix.net/urunler/92_1604665685_IpH.jpg?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=61c4196082c042619077e9fee599c617"
        alt="" width="457px" class="sola-kaydir"/>
    </div>
    <h1 style="color:#C65800; font-size:60px; margin-left: 507px">KAHHVE TANIŞMA SETİ </h1>
    <table style="margin-left: 507px; font-size:40px">
      <tr>
        <td style="color: #603813;margin-left: 507px;">KahhveCom</td>
        <td style="width: 10px;"></td>
        <td style=" color: #a2a2a2">- 750 gr</td>
      </tr>
    </table>
    <div style="margin-left: 507px">
      <table>
        <tr>
          <td>
            <div style="height: 19px; width: 128.334px; background: url('https://kahhve.com/zeplin/img/star_secili.png'); position: absolute; display: inline-block;"/>
            <div style="height: 19px; width: 150px; background: url('https://kahhve.com/zeplin/img/star_secilidegil.png'); display: inline-block;"/>
          </td>
          <td style="width: 10px"></td>
          <td style="color:#C65800;">(131 müşteri yorumu)</td>
      </tr>
    </table>

    <table style="font-size:60px; color: #603813" > 124.99 TL</table>
    <select style="width: 500px; font-size:21px; color: #603813; border-color:#603813" v-model="selected">
      <option v-for="option in options" :value="option.number" :key="option.number">
        {{ option.text }}
      </option>
    </select>
      <button style=" border-radius:10px;height:50px; width:40px " v-on:click="counter -= 1">-</button>
      <button style=" border-radius:10px;height:50px; width:40px; margin-left:20px" v-on:click="counter += 1">+</button>
      <ast style="margin-left:20px">Adet:</ast><ast>{{counter}}</ast>
      <ast style="margin-left:120px; color:#C65800;">
        <b-icon icon="heart" ></b-icon>
      </ast>
      <button style=" border-radius:10px;width:200px; height:50px;margin-left:20px ;background-color:#C65800; color:white; border:#C65800">Sepete Ekle</button>
      <div style="width:600px">
        <button class="bottombttn col-sm-3" >
          <i class="sola-kaydir" style="border-color:white">Aynı Gün <br> Kargoda </i>
          <img src="https://kahhve.com/zeplin/img/layout/kargo.svg" alt="" width="41px" height="34">
        </button>
        <i class="col-sm-1"></i>
        <button class="bottombttn col-sm-4" >
          <i class="sola-kaydir" style="border-color:white"> SiparişeÖzel <br> Öğütme </i>
          <img src="../assets/static/image/kahhvecekirdek.png" alt="" width="25px" height="34">
        </button>
        <i class="col-sm-1"></i>
        <button class="bottombttn col-sm-3"  >
          <i class="sola-kaydir" style="border-color:white"> Ücretsiz <br> Kargo </i> 
          <i style="font-size:22px"><b-icon icon="check2-square" ></b-icon> </i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {
  name: "ProductPage",
  data() {
    return {
      counter:1,
      number:1,
      selected:1,
      options: [
        { number: 1, text: "Öğütme Boyutu" },
        { number: 2, text: "French Press" },
        { number: 3, text: "Chemex" },
        { number: 4, text: "Metal Filtre" },
        { number: 5, text: "Kağıt Filtre" },
        { number: 6, text: "Hario V60" },
        { number: 7, text: "Aeropress" },
        { number: 8, text: "Moka Pot" },
        { number: 9, text: "Espresso" },
        { number: 10, text: "Soğuk Demleme" },
        { number: 11, text: "Çekirdek" },
        { number: 12, text: "Syphon" },
      ],
    };
  },
};
</script>

<style >
h1 {
  margin-left: 450px;
}
ast{
  font-size: 40px;
}
.ornek {
  margin: auto;
}
.saga-kaydir {
  float: right;
  padding: 0 0 10px 10px;
}

.sola-kaydir {
  float: left;
  padding: 0 0 0 0;
  border: 3px solid #C65800;
}

#strikethrough {
  position: relative;
}
#strikethrough:before {
  position: absolute;
  content: "";
  left: 75px;
  top: 50%;
  right: 0;
  border-top: 1px solid;
  border-color: inherit;

  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  -o-transform: rotate(-5deg);
  transform: rotate(-5deg);
  color: #a2a2a2;
}
.bottombttn{
  background-color:white;
  color:#C65800; 
  border-radius:10px;
  border: #a2a2a2;
  width: 550px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}



</style>