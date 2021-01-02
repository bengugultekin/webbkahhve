<template>
    <div class="ornek" style="background-color:#ebebeb; margin: auto;">
        <div>
            <div style="font-size:80px;  padding-left:26%;  color:#C65800">
                <b-icon icon="cart4" style="color: #C65800;"/> SEPETİNİZ
                <h6>
                    Siparişinizi hemen tamamlayabilirseniz ürünleriniz yarın (Pazartesi) kargoda.
                    <b-icon icon="info-circle-fill" style="color: #C65800;"/>
                </h6>
            </div>
            <hr style="width:52%;text-align:center;background-color:#C65800;border-width: 3px;"/>
            <img src="https://kahhvecom.imgix.net/urunler/92_1604665685_IpH.jpg?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=61c4196082c042619077e9fee599c617" alt="" width="210px" class="sola-kaydir"/>
        </div>
        <div>
            <h1 style="color:#C65800; font-size:40px; text-align: left;">KAHHVE TANIŞMA SETİ</h1>
            <table style="font-size:40px">
                <tr>
                    <td style="color: #603813;">KahhveCom</td>
                    <td style="width: 10px;"></td>
                    <td style=" color: #a2a2a2">- 750 gr</td>
                </tr>
            </table>

            <select style="width: 18%; font-size:25px; color: #603813; border-color:#603813;background-color:#ebebeb" v-model="selectedType">
                <option v-for="option in options" :value="option.number" :key="option.number">
                    {{ option.text }}
                </option>
            </select>
            <select style="width: 6%; font-size:25px; color: #603813; border-color:#603813;background-color:#ebebeb" v-model="selectedquantity">
                <option v-for="count in counts" :value="count.number" :key="count.number">
                    {{ count.text }}
                </option>
            </select>

            <button style="color: #603813; font-size:15px ;padding-top:10px;">
                <img src="../assets/static/image/x.png" alt="" />
            </button>
            <table style="font-size:30px; color: #603813">
                124.99 TL
            </table>
            <hr style="width:52%;text-align:center;background-color:#C65800;border-width: 3px;"/>
            <td class="sola-kaydir" style="color: #C65800; border:#ebebeb; font-size:35px">
                Kargo Ücreti:
            </td>
            <td style="color: #603813; border:#ebebeb; font-size:35px">
                ÜCRETSİZ
            </td>
            <td>
                <img src="../assets/static/image/ucanyazi.png" alt="" style="margin-left:270px" height="70px"/>
            </td>
            <hr style="width:52%;text-align:center;background-color:#C65800;border-width: 3px;"/>
            <input class="w3-input sola-kaydir" type="text" style="border-color:black;  width:16%; height: 50px; font-size:20px" placeholder="Promosyon kodunuz varsa giriniz"/>
            <button style=" border-radius:10px;width:100px; height:50px;margin-left:20px ;background-color:#603813; color:white; border:#C65800">
                KULLAN
            </button>
            <hr style="width:52%;text-align:center;background-color:#C65800;border-width: 3px;"/>
            <textarea class="sola-kaydir" style="border-color:black; height:150px; width:370px"/>
            <span>
                <td class="sola-kaydir " style="color: #C65800; border:#ebebeb; font-size:40px; margin-left:150px">
                    TOPLAM
                </td>

                <td class="saga-kaydir" style="color: #603813; border:#ebebeb; font-size:40px">
                    124.99 TL
                </td>
            </span>

            <button style=" border-radius:10px;width:200px; height:50px;margin-left:100px; margin-top:10px; margin-bottom:0px;background-color:#603813; color:white; border:#C65800; padding-top:10px">
                SİPARİŞ VER
            </button>
            <input class="sola-kaydir" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label style="font-size:15px">Siparişimin
                <label style="color:#C65800">
                  hediye paketi
                </label> hediye paketi olarak gönderilmesini istiyorum.
                <label style="color:#C65800">
                  (9.99TL)
                </label>
            </label>
            <label class="sola-kaydir " style="border-color:#ebebeb; font-size:13px; margin-left:530px">Hediye paketi seçili siparişlerde fatura gönderilmez.</label>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {
    name: "ShoppingBasket",
    data() {
        return {
            counter: 1,
            number: 1,
            selectedType: 1,
            selectedquantity: 1,
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
                { number: 12, text: "Syphon" }
            ],
            counts: [
                { number: 1, text: "1 Adet" },
                { number: 2, text: "2 Adet" },
                { number: 3, text: "3 Adet" },
                { number: 4, text: "4 Adet" },
                { number: 5, text: "5 Adet" },
                { number: 6, text: "6 Adet" },
                { number: 7, text: "7 Adet" },
                { number: 8, text: "8 Adet" },
                { number: 9, text: "9 Adet" },
                { number: 10, text: "10 Adet" },
                { number: 11, text: "11 Adet" },
                { number: 12, text: "12 Adet" },
                { number: 13, text: "13 Adet" },
                { number: 14, text: "14 Adet" },
                { number: 15, text: "15 Adet" },
                { number: 16, text: "16 Adet" },
                { number: 17, text: "17 Adet" },
                { number: 18, text: "18 Adet" },
                { number: 19, text: "19 Adet" },
                { number: 20, text: "20 Adet" },
                { number: 21, text: "21 Adet" },
                { number: 22, text: "22 Adet" },
                { number: 23, text: "23 Adet" },
                { number: 24, text: "24 Adet" },
                { number: 25, text: "25 Adet" }
            ]
        };
    }
};
</script>

<style >
ast {
    font-size: 40px;
}
.ornek {
    margin: auto;
}
.saga-kaydir {
    float: right;
    padding: 0 860px 0 0px;
}

.sola-kaydir {
    float: left;
    padding: 0 0 0 0;
    border: 3px solid #c65800;
    margin-left: 500px;
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
.bottombttn {
    background-color: white;
    color: #c65800;
    border-radius: 10px;
    border: #a2a2a2;
    width: 550px;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>