import { Swiper } from "swiper";
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation]);

export class LastWorksSlider {
    slider : HTMLElement
    constructor() {
        this.slider = document.querySelector('#last-works-slider')
        this.init()
    }
    init() {
        const slider = new Swiper(this.slider, {
            loop: false,
            slidesPerView: 1,
            navigation: {
                nextEl: "#last-works-slider-wrap .next-slide-button",
                prevEl: "#last-works-slider-wrap .prev-slide-button",
            }
        })
    }
}
