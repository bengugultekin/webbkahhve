
<template>
    <b-container>
        <pre v-if="loading">Yükleniyor</pre>
        <b-row v-else class="productDetail">
            <b-col cols="5">
                <img :src="product._source.urun.urun_resmi.replace('?h=250','?h=1000').replace('&w=250','&w=1000')" alt="" style="width:100%;">
            </b-col>
            <b-col cols="7">
                <h1 class="urunTitle">{{product._source.urun.urun_ismi}}</h1>
                
                <h2 class="urunmarka">{{product._source.urun.marka}}</h2>
                
                <div class="comments">
                    <div class="commnetsOff">
                        <div class="commnetsOn" :style="'width:'+(20*product._source.urun.puan)+'%;'"></div>
                    </div>
                    <div class="commnetsCount">({{product._source.urun.yorum_sayisi}})</div>
                </div>
                
                <p class="price"> <span class="oldprice" v-if="product._source.urun.eski_fiyat">{{product._source.urun.eski_fiyat}} TL <div class="lines"></div></span>{{product._source.urun.fiyat}} TL</p>
                
                <b-form-select class="skuSelect" v-model="selected" :options="options"></b-form-select>
                <b-row>
                    <b-col cols="6">
                        <b-form-spinbutton class="adetSelector" v-model="adetvalue" min="1" max="100"></b-form-spinbutton>
                        <div class="adetValue">Adet: <span style="color: #c65800 !important;">{{ adetvalue }}</span></div>
                    </b-col>
                    <b-col cols="6">
                        <b-row>
                            <b-col cols="auto" style="margin-right:0;">
                                <b-icon icon="heart" class="addtofav"></b-icon>
                            </b-col>
                            <b-col>
                                <b-button class="addtobasket" @click="addtobasket()">SEPETE EKLE</b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <img style="border:0" src="data:image/png;base64,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" alt="">
                    </b-col>
                </b-row>

            </b-col>

            <b-col cols="12">
                <p class="desc">{{product._source.urun.aciklama}}</p>
            </b-col>
            <!-- {{this.$route.params.id}} -->

            <!-- <pre>{{product._source.urun}}</pre> -->
            <Nuxt />
        </b-row>
    </b-container>
</template>
<script>

export default {
    data(){
        return{
            product:{},
            loading:true,
            selected: null,
            adetvalue:1,
            options:[{'value':null,text:'Öğütme Boyutu'},{value:'French Press',text:'French Press'},{value:'Chemex',text:'Chemex'},{value:'Metal Filtre',text:'Metal Filtre'},{value:'Kağıt Filtre',text:'Kağıt Filtre'},{value:'Hario V60',text:'Hario V60'},{value:'Aeropress',text:'Aeropress'},{value:'Moka Pot',text:'Moka Pot'},{value:'Espresso',text:'Espresso'},{value:'Soğuk Demleme',text:'Soğuk Demleme'},{value:'Çekirdek',text:'Çekirdek'},{value:'Syphon',text:'Syphon'}],
        }
    },
    methods:{
        addtobasket(){
            let tobasketdata = {
                'urun_resmi':this.product._source.urun.urun_resmi,
                'urun_ismi':this.product._source.urun.urun_ismi,
                'marka':this.product._source.urun.marka,
                'type':this.selected,
                'price':this.product._source.urun.fiyat,
                'quantity':this.adetvalue
            }
            this.$store
                .dispatch("users/addtobasketst", tobasketdata)
                .then(() => {
                   console.log('sepete eklendi');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted(){
        try {
            let refa = this.$fireModule.database().ref('/0/products/')
            refa.on('value', snapshot=> {
                this.product = snapshot.val().filter(prod=>prod._id==this.$route.params.id)[0]
                this.loading = false;
            });
            
        } catch (e) {
            console.log(e);
        }
    }
};
</script>
<style>
.addtofav{
    color: rgb(198, 88, 0);
    margin-top: 25px;
    font-size: 40px;
    padding: 0;
}
.addtobasket{
    background-color: #c65800 !important;
    border: 0;
    width: 100%;
    border-radius: 10px;
    color: white;
    padding: 8px 10px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 50px;
    letter-spacing: 2px;
    max-width: 300px;
}
.desc{
    margin-top: 30px;
    font-size: 24px;
    font-weight: 300;
}
.productDetail .skuSelect{
    font-size: 24px;
}
.adetValue{
    float: left;
    line-height: 40px;
    margin-left: 10px;
    margin-top: 24px;
    font-size: 32px;
    color: #603813 !important;
}
.adetSelector output{
    display: none;
}
.adetSelector button{
    border-radius: 5px !important   ;
    background-color: #603813 !important;
    color: white;
    padding: 10px;
    margin-right: 10px;
}
.adetSelector{
    width: 90px;
    float: left;
    border: 0;
    margin-top: 24px;
}
.productDetail{
    margin-top: 40px;
}
.productDetail .comments .commnetsOff{
    background-image:url('https://kahhve.com/zeplin/img/star_secilidegil.png');
    background-size: 21px;
    width: 105px;
    height: 14px;
    margin: auto;
    display: inline-block;
}
.productDetail .comments .commnetsOff .commnetsOn{
    background-image:url('https://kahhve.com/zeplin/img/star_secili.png');
    background-size: 21px;
    width: 94px;
    height: 14px;
}
.productDetail .comments .commnetsCount {
    display: inline-block;
    vertical-align: top;
    color: #603813 !important;
    font-size: 12px;
}
.productDetail .urunTitle{
    font-size: 64px;
    line-height: 54px;
    margin: 0;
    color: #c65800 !important;
}
.productDetail .urunmarka{
    font-size: 36px;
    display: inline;
    color: #603813 !important;
}
.productDetail img{
    border: solid 2px #c65800;
}
.productDetail .price .oldprice{
    color: #a2a2a2 !important;
    position: relative;
}
.productDetail .price .oldprice .lines{
    border-top: 5px solid #c65800;
    left: -3px;
    position: absolute;
    transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    -ms-transform-origin: 42% 52%;
    -webkit-transform: rotate(-3deg);
    transform-origin: 42% 52%;
    width: 175px;
    top: 36px;
}

.productDetail .price{
    color: #603813;
    font-size:48px;
    font-weight: normal;
    white-space: nowrap;
}
</style>