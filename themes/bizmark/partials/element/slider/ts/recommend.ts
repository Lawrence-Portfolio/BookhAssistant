import { Swiper } from "swiper";
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

export class RecommendSlider {
    slider : HTMLElement
    pagination : HTMLElement
    constructor() {
        this.slider = document.querySelector('#recommend-slider')
        this.pagination = document.querySelector('#recommend-slider-pagination')
        this.init()
    }
    init() {
        const slider = new Swiper(this.slider, {
            loop: false,
            slidesPerView: 6,
            pagination: {
                el: this.pagination,
                clickable: true,
            },
            navigation: {
                nextEl: "#recommend-slider-wrap .next-slide-button",
                prevEl: "#recommend-slider-wrap .prev-slide-button",
            }
        })
    }
}
