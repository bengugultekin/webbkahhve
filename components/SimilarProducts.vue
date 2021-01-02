<template>
    <div>
        <div class="BenzerUrunlerContainer">
            <p class="baslik">BENZER ÜRÜNLER</p>
            <div class="satirpad">
                <div class="row">
                <div class="col-sm-3">
                    <div class="urun">
                        <img class="urunImg" src="https://kahhvecom.imgix.net/urunler/448_1565686841_2nX.jpg?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=e9fa9696eb8a47e2a643645eda308d22" alt="">
                    </div>
                    <p class="markaAdı">Acme</p>
                    <p class="urunAdı">Petra</p>
                    <p class="fiyat">58.99 TL</p>
                </div>
                <div class="col-sm-3">
                    <div class="urun">
                        <img class="urunImg" src="https://kahhvecom.imgix.net/urunler/796_1603712633_TGb.png?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=99033a67784423aa44d6be330195f270" alt="">
                    </div>
                    <p class="markaAdı">All Day Blend</p>
                    <p class="urunAdı">Caffe Fresco</p>
                    <p class="fiyat">34.99 TL</p>
                </div>
                <div class="col-sm-3">
                    <div class="urun">
                        <img class="urunImg" src="https://kahhvecom.imgix.net/urunler/615_1589354732_SAO.jpg?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=22c536601bce2b9a518389abacb24f5d" alt="">
                    </div>
                    <p class="markaAdı">Colombia Supremo</p>
                    <p class="urunAdı">Urban Grind</p>
                    <p class="fiyat">49.99 TL</p>
                </div>
                <div class="col-sm-3">
                    <div class="urun">
                        <img class="urunImg" src="https://kahhvecom.imgix.net/urunler/795_1603712422_C8e.png?h=750&ixlib=php-1.0.6&lossless=1&w=750&s=e941e7b5242cdd2d242599ea0407070f" alt="">
                    </div>
                    <p class="markaAdı">Breakfast Blend</p>
                    <p class="urunAdı">Caffe Fresco</p>
                    <p class="fiyat">29.99 TL</p>
                </div>
            </div>
            </div>
            
            

        </div>
    </div>
</template>

<script>
export default {
    name:"SimilarProduct"
}
    
</script>

<style>
    .satirpad{
        padding-left: 70px;
    }
    .BenzerUrunlerContainer{
        background-color: #EBEBEB;
        width: 90%;

    }
    .baslik{
        text-align: center;
        font-size: 28px;
        color:  #C65800;
    }
    .urun{
        width: 300px;
        height: 300px;
        border: 2px solid #C65800;
    }
    .markaAdı{
        color: #C65800;
        font-weight: bold;
        text-align: center;
        align-items: center;
        padding-left: 110px;
    }
    .urunAdı{
        color: gray;
        font-size: 16px;
        text-align: center;
        align-items: center;
        padding-left: 115px;
        opacity: 60%;
    }
    .urunImg{
        width: 296px;
        height: 296px;
    }
    .fiyat{
        font-weight: bold;
        padding-left: 120px;
        color: #603813;
        opacity: 90%;
    }
</style>