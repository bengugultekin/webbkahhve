<template>
    <b-container fluid>
        <b-row>
            <div class="upperNavbar">75TL ve üzeri ÜCRETSİZ KARGO!</div>
        </b-row>

        <b-row class="bg-light">
            <b-container>
                <b-navbar toggleable="md" type="light" variant="light" fixed="top" sticky>
                    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

                        <nuxt-link to="/">
                            <img class="logo" src="https://kahhve.com/zeplin/img/logo_mini.png" />
                        </nuxt-link>

                    <b-navbar-nav class="menuItemPadding">
                        <b-nav-item class="navItemMenu">
                            <nuxt-link to="/Coffeepage">KAHVELER</nuxt-link>
                        </b-nav-item>

                        <b-nav-item class="navItemMenu">
                            <nuxt-link to="#">EKİPMAN & AKSESUARLAR</nuxt-link>
                        </b-nav-item>

                        <b-nav-item class="navItemMenu">
                            <nuxt-link to="#"> TANIŞMA SETLERİ</nuxt-link>
                        </b-nav-item>

                        <b-nav-item-dropdown text="MARKALAR" right class="navItemMenu">
                            <b-dropdown-item href="#">Able</b-dropdown-item>
                            <b-dropdown-item href="#">Bianco</b-dropdown-item>
                            <b-dropdown-item href="#">Bravilor Bonamat</b-dropdown-item>
                            <b-dropdown-item href="#">Coffe Vergnano</b-dropdown-item>
                            <b-dropdown-item href="#">Bravilor Bonamat</b-dropdown-item>
                            <b-dropdown-item href="#">Caffe Vergnano</b-dropdown-item>
                            <b-dropdown-item href="#">Coffee Sapiens</b-dropdown-item>
                            <b-dropdown-item href="#">Coffeerem</b-dropdown-item>
                            <b-dropdown-item href="#">Delter</b-dropdown-item>
                            <b-dropdown-item href="#">Felicita</b-dropdown-item>
                            <b-dropdown-item href="#">Illy</b-dropdown-item>
                            <b-dropdown-item href="#">Kronotrop</b-dropdown-item>
                            <b-dropdown-item href="#">Puly Caff</b-dropdown-item>
                            <b-dropdown-item href="#">Shorts Coffee</b-dropdown-item>
                            <b-dropdown-item href="#">The Dripster</b-dropdown-item>
                            <b-dropdown-item href="#">Urban Tools</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item class="navItemMenu kultur">
                            <nuxt-link to="#">KÜLTÜR </nuxt-link>
                        </b-nav-item>
                        <b-nav-item class="navItemMenu">
                            <nuxt-link to="#">HEDİYELİKLER </nuxt-link>
                        </b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#" class="navItemMenu">
                            <nuxt-link to="/Loginpage" v-if="!this.$store.state.users.user">GİRİŞ</nuxt-link>
                            <nuxt-link to="/" v-else>HESABIM</nuxt-link>
                        </b-nav-item>
                        <b-nav-item href="#" class="menuItems">
                            <nuxt-link to="/Shoppingbasket">
                                <b-icon icon="search" style="color: #C65800"></b-icon>
                            </nuxt-link>
                        </b-nav-item>
                        <b-nav-item href="#" class="menuItems">    
                            <nuxt-link to="/Shoppingbasket">
                                <b-icon icon="heart" style="color: #C65800"></b-icon>
                            </nuxt-link>
                        </b-nav-item>
                        <b-nav-item href="#" class="menuItems" id="popover-target-1">
                            <nuxt-link to="/Shoppingbasket">
                                <b-icon icon="cart4" style="color: #C65800"/>
                            </nuxt-link>
                        </b-nav-item>
                        <b-popover target="popover-target-1" custom-class="myBasContainer" triggers="hover" placement="topleft">
                            <div v-for="(product,i) in this.$store.state.users.basket" :key="i">
                                <p><span style="float: left;">{{product.urun_ismi}}  <span v-if="product.type"> ({{product.type}})</span></span></p>
                                <p class="basketitem" style="text-align:right;"><span style="float: right;">{{product.quantity}}x{{product.price}} TL</span></p>
                            </div>
                            <div style="margin-bottom:20px;" v-if="this.$store.state.users.basket.length">
                                <span style="float: left;">Toplam</span> <span class="popupend">{{this.$store.state.users.basket.map(v=>v.price*v.quantity).reduce((a,b)=>a+b).toFixed(2)}} TL</span>
                            </div>
                            <div style="margin-bottom:20px;" v-else>
                                <span style="float: left;">Toplam</span> <span class="popupend">0 TL</span>
                            </div>

                            <div>
                                <nuxt-link to="/Shoppingbasket">
                                    <button class="popsppgnbtn">SEPETE GİT</button>
                                </nuxt-link>

                                <nuxt-link to="/Shoppingbasket">
                                    <button class="popcrtbtn">SİPARİŞİ TAMAMLA</button>
                                </nuxt-link>
                            </div>
                        </b-popover>
                    </b-navbar-nav>
                </b-navbar>
            </b-container>
        </b-row>
    </b-container>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import ShoppingCart from "./ShoppingCart";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {
    data() {
        return {
            isHovered: false
        };
    },
    methods: {
        handleHover(hovered) {
            this.isHovered = hovered;
        }
    },
    components: {
        ShoppingCart
    }
};
</script>

<style>
.navItemMenu a{
    color: #603813;
    font-size: 18px;
}
.dropDown {
    background-color: transparent;
    color: #603813;
    border-width: 0;
}
.logo {
    width: 70px;
}

.upperNavbar {
    background-color: #c65800;
    color: white;
    text-align: center;
        width: 100%;
}

.firstdiv {
    width: 200px;
}

.menuItems {
    color: #603813;
    font-size: 16px;
    font-family: sans-serif;
}

.kultur {
    color: #c65800;
    font-weight: bold;
    font-size: 18px;
    font-family: sans-serif;
}
.myBasContainer{
    width: 400px;
}
.popupend {
    color: #c65800;
    float: right;
    font-size: 20px;
}
.popsppgnbtn {
    background-color: #603813;
    color: white;
    width: 100%;
    border-radius: 10px;
    line-height: 40px;
    border: #603813;
    font-size: 13px;
}
.basketitem{
    border-bottom: 1px solid #c65800;
    line-height: 36px;
    height: 36px;
    clear: both;
}
.popcrtbtn {
    background-color: #c65800;
    color: white;
    margin-top: 5%;
    width: 100%;
    border-radius: 10px;
    line-height: 40px;
    border: #c65800;
    font-size: 13px;
}
</style>