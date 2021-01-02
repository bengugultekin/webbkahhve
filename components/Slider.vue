<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide img-src="//st1.myideasoft.com/idea/bs/42/myassets/slider_pictures/pictures_3_7.jpg?revision=1605008358" ></b-carousel-slide>
            <b-carousel-slide img-src="//st1.myideasoft.com/idea/bs/42/myassets/slider_pictures/pictures_3_4.jpg?revision=1605008358"></b-carousel-slide>
            <b-carousel-slide img-src="https://st3.myideasoft.com/idea/bs/42/myassets/slider_pictures/pictures_3_6.jpg?revision=1607073239"></b-carousel-slide>
            <b-carousel-slide img-src="//st1.myideasoft.com/idea/bs/42/myassets/slider_pictures/pictures_3_7.jpg?revision=1605008358"></b-carousel-slide>
            <b-carousel-slide img-src="//st2.myideasoft.com/idea/bs/42/myassets/slider_pictures/pictures_3_5.jpg?revision=1605008358"></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    }
};
</script>

<style>
.carousel-indicators li {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: unset;
    border: 1px solid white;
    opacity: 1;
}
.carousel-indicators li.active{
    background-color: white;
}
.carousel-control-prev,.carousel-control-next{
    opacity: 1;
    transition: all ease .5s;
}
.carousel-control-prev .carousel-control-prev-icon,.carousel-control-next .carousel-control-next-icon{
    width: 30px;
    height: 30px;
    transition: all ease .5s;
}
.carousel-control-prev:hover .carousel-control-prev-icon{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23c65900' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
    transition: all ease .5s;
}
.carousel-control-next:hover .carousel-control-next-icon{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23c65900' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
    transition: all ease .5s;
}
</style>