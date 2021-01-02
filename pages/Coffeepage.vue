<template>
    <div>
        <section class="text-center mb-5" style="background-image:linear-gradient(to right, rgba(198, 88, 0, 0.3) 0%, rgba(198, 88, 0, 0.7) 50%, rgba(198, 88, 0, 0.3) 100%), url('https://kahhve.com/zeplin/img/kahveler_background.jpg'); background-size: cover; padding: 20px 0;">
            <h1 class="text-white">KAHVE ÇEŞİTLERİ</h1>
            <p class="text-white" style="max-width: 90%; margin: auto;">Taze ve kaliteli kahve çekirdeklerini bulabileceğiniz Türkiyenin en büyük online kahve mağazası.</p>
            <img src="https://kahhve.com/zeplin/img/icon_kategoriler.png" style="width: 700px; max-width: 95%;">
        </section>
        <b-container fluid>
            <b-row>
                <div class="col-md-3">
                    <Sidebar @filterMarka="filterMarka" @filterOrigin="filterOrigin" @filterTat="filterTat" @filterEkipman="filterEkipman"/>
                </div>
                <div class="col-md-9">
                    <div class="yukleniyor" v-if="loading"></div>
                    <b-container v-else>
                        <b-row>
                            <nuxt-link v-for="(p,i) in filteredProducts" :key="i" class="col-md-4 col-xs-6 urunlinki"  :to="'/product/'+p._source.urun.id">
                                <div class="productItem">
                                    <img :src="p._source.urun.urun_resmi" style="width:100%;"/>
                                    <p class="name">{{p._source.urun.urun_ismi}}</p>
                                    <p class="marka">{{p._source.urun.marka}}</p>
                                    <div class="comments">
                                        <div class="commnetsOff">
                                            <div class="commnetsOn" :style="'width:'+(20*p._source.urun.puan)+'%;'"></div>
                                        </div>
                                        <div class="commnetsCount">({{p._source.urun.yorum_sayisi}})</div>
                                    </div>
                                    <p class="price"> <span class="oldprice" v-if="p._source.urun.eski_fiyat">{{p._source.urun.eski_fiyat}} TL <div class="line"></div></span>{{p._source.urun.fiyat}} TL</p>
                                </div>
                            </nuxt-link>
                        </b-row>
                    </b-container>
                </div>
            </b-row>
        </b-container>
        <Nuxt />
    </div>
</template>
<script>
import Sidebar from "../components/Sidebar";

export default {
    data() {
        return {
            productsList:[],
            filteredProducts:[],
            loading:true,
        };
    },
    components: {
        Sidebar
    },
    methods:{
        filterMarka(marka){
            this.filteredProducts = this.productsList.filter(product=>product._source.marka.includes(marka))
        },
        filterOrigin(origin){
            this.filteredProducts = this.productsList.filter(a=>a._source.hasOwnProperty('origin_filtre')).filter(v=>v._source.origin_filtre.includes(origin))
        },
        filterTat(tat){
            this.filteredProducts = this.productsList.filter(a=>a._source.hasOwnProperty('tat_filtre')).filter(v=>v._source.tat_filtre.includes(tat))
        },
        filterEkipman(ekipman){
            this.filteredProducts = this.productsList.filter(a=>a._source.hasOwnProperty('ekipman_filtre')).filter(v=>v._source.ekipman_filtre.includes(ekipman))
        },
    },
    mounted(){
        try {
            let refa = this.$fireModule.database().ref('/0/products/')
            refa.on('value', snapshot=> {
                this.productsList = snapshot.val().filter(product=>product._source.kategoriler.includes("kahveler"))
                this.loading = false;
                this.filteredProducts = this.productsList;
                console.log(this.filteredProducts);
            });
            
        } catch (e) {
            console.log(e);
        }
    }
};
</script>
<style>

.yukleniyor{
    background: url('https://kahhve.com/zeplin/img/yukleniyor.gif') no-repeat top;
    width: 100%;
    height: 100%;
}
.productItem{
    padding: 0 25px 30px 25px;
    text-align: center;
}
.productItem .comments{

}
.urunlinki:hover{
    text-decoration: none;
}
.productItem .comments .commnetsOff{
    background-image:url('https://kahhve.com/zeplin/img/star_secilidegil.png');
    background-size: 21px;
    width: 105px;
    height: 14px;
    margin: auto;
    display: inline-block;
}
.productItem .comments .commnetsOff .commnetsOn{
    background-image:url('https://kahhve.com/zeplin/img/star_secili.png');
    background-size: 21px;
    width: 94px;
    height: 14px;
}
.productItem .comments .commnetsCount {
    display: inline-block;
    vertical-align: top;
    color: #603813 !important;
    font-size: 12px;
}
.productItem img{
    border: solid 2px #c65800;
}
.productItem .marka{
    color: #a2a2a2;
    font-size: 16px;
    height: 22px;
    overflow: hidden;
    text-transform: uppercase;
    margin-bottom: 5px
}
.productItem .price .oldprice{
    color: #a2a2a2 !important;
    position: relative;
}
.productItem .price .oldprice .line{
    border-top: 2px solid #c65800;
    left: -3px;
    position: absolute;
    transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    -ms-transform-origin: 42% 52%;
    -webkit-transform: rotate(-3deg);
    -webkit-transform-origin: 42% 52%;
    transform-origin: 42% 52%;
    width: 75px;
    top: 16px;
}

.productItem .price{
    color: #603813;
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;
}
.productItem .name{
    color: #c65800;
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    text-transform: uppercase;
    margin-bottom: 0;
    height: 40px;
}
/* .productsList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 15%;
    padding-right: 20%;
    align-items: center;
    width: 100%;
}
.productArea {
    height: 300px;
    width: 29%;
    margin-bottom: 10%;
    border-style: solid;
    border-width: medium;
    border-color: #c65800;
    text-align: center;
    align-items: center;
} */
</style>
