<template>
    <div class="sidenav vl">
        <div class="px-5">
            <span class="a1" href="#" style="margin-top: 0;">MARKA</span>
            <a class="a2" @click="filterMarka('beanofme')">Beanofme(4)</a>
            <a class="a2" @click="filterMarka('bianco')">Bianco(3)</a>
            <a class="a2" @click="filterMarka('caffe-fresco')">Caffe Fresco(8)</a>
            <a class="a2" @click="filterMarka('caffe-vergnano')">Caffe Vergnano(10)</a>
            <a class="a2" @click="filterMarka('coffee-sapiens')">Coffee Sapiens(3)</a>
            <a class="a2" @click="filterMarka('coffeemamma')">Coffeemamma(4)</a>
            <a class="a2" @click="filterMarka('coffeerem')">Coffeerem(7)</a>
            <a class="a2" v-if="!markavis" @click="markavis=true">...</a>
            <div v-if="markavis">
                <a class="a2" @click="filterMarka('cool-beans')">Cool Beans(12)</a>
                <a class="a2" @click="filterMarka('federal-coffee')">Federal Coffee(3)</a>
                <a class="a2" @click="filterMarka('jacobs')">Jacobs(4)</a>
                <a class="a2" @click="filterMarka('kahhvecom')">KahhveCom(2)</a>
                <a class="a2" @click="filterMarka('kronotrop')">Kronotrop(3)</a>
                <a class="a2" @click="filterMarka('petra')">Petra(2)</a>
                <a class="a2" @click="filterMarka('punctum-coffee')">Punctum Coffee(3)</a>
                <a class="a2" @click="filterMarka('shorts-coffee')">Shorts Coffee(5)</a>
                <a class="a2" @click="filterMarka('taft-coffee')">Taft Coffee(1)</a>
                <a class="a2" @click="filterMarka('tonino-lamborghini-caffe')">Tonino Lamborghini Caffe(3)</a>
                <a class="a2" @click="filterMarka('urban-grind')">Urban Grind(17)</a>
            </div>
        </div>

        <div class="px-5">
            <span class="a1">ORİGİN</span>
            <a class="a2" @click="filterOrigin('blend')">Blend(38)</a>
            <a class="a2" @click="filterOrigin('brazil')">Brazil(5)</a>
            <a class="a2" @click="filterOrigin('colombia')">Colombia(6)</a>
            <a class="a2" @click="filterOrigin('costa Rica')">Costa Rica(4)</a>
            <a class="a2" @click="filterOrigin('el Salvador')">El Salvador(1)</a>
            <a class="a2" @click="filterOrigin('ethiopia')">Ethiopia(7)</a>
            <a class="a2" @click="filterOrigin('guatemala')">Guatemala(6)</a>
            <a class="a2" v-if="!originvis" @click="originvis=true">...</a>
            <div v-if="originvis">
                <a class="a2" @click="filterOrigin('indonesia')">Indonesia(2)</a>
                <a class="a2" @click="filterOrigin('kenya')">Kenya(2)</a>
                <a class="a2" @click="filterOrigin('mexico')">Mexico(1)</a>
                <a class="a2" @click="filterOrigin('nicaragua')">Nicaragua(1)</a>
                <a class="a2" @click="filterOrigin('peru')">Peru(3)</a>
            </div>
        </div>

        <div class="px-5">
            <span class="a1">TAT</span>
            <a class="a2" @click="filterTat('aromalı-kahve')">Aromalı Kahve(6)</a>
            <a class="a2" @click="filterTat('meyvemsi-/-az-kavrulmuş')">Meyvemsi/Az Kavrulmuş(13)</a>
            <a class="a2" @click="filterTat('orta-yumuşak-/-dengeli')">Orta Yumuşak/Dengeli(44)</a>
            <a class="a2" @click="filterTat('yoğun-/-sert')">Yoğun/Sert(18)</a>
        </div>

        <div class="px-5">
            <span class="a1">EKİPMAN</span>
            <a class="a2" @click="filterEkipman('decaf-kahve')">Decaf Kahve(3)</a>
            <a class="a2" @click="filterEkipman('espresso-kahve')">Espresso Kahve(13)</a>
            <a class="a2" @click="filterEkipman('filtre-kahve')">Filtre Kahve(65)</a>
            <a class="a2" @click="filterEkipman('kapsül-kahve')">Kapsül Kahve(5)</a>
            <a class="a2" @click="filterEkipman('soğuk-kahve')">Soğuk Kahve(12)</a>
            <a class="a2" @click="filterEkipman('türk-kahvesi')">Türk Kahvesi(5)</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            markavis:false,
            originvis:false,
            tatvis:false,
            ekipman:false
        }
    },
    methods:{
        filterMarka(marka){
            this.$emit('filterMarka',marka)
        },
        filterOrigin(origin){
            this.$emit('filterOrigin',origin)
        },
        filterTat(tat){
            this.$emit('filterTat',tat)
        },
        filterEkipman(ekipman){
            this.$emit('filterEkipman',ekipman)
        },
        

    }
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@400;700&family=Roboto:wght@300;400;500;700;900&display=swap');

.a1 {
    color: #c65800;
    font-size: 34px;
    display: block;
    font-weight: bolder;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;

}
.a2 {
    color: #603813;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;

}

.vl {
    border-right: 4px solid #c65800;
}
</style>