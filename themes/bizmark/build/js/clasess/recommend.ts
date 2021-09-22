import lightGallery from 'lightgallery';

export class RecommendGallery {
    selector : string
    constructor() {
        this.selector = '#recommend-slider .swiper-wrapper'
        this.init()
    }
    init() {
        let lg:HTMLDivElement = document.querySelector(this.selector)
        if(lg) {
            lightGallery(lg, {
                download: false,
                selector: 'a'
            })

            lg.addEventListener('lgBeforeClose', (event) => {
                document.querySelector('body').style.overflowY = ''
            });

            lg.addEventListener('lgBeforeOpen', (event) => {
                document.querySelector('body').style.overflowY = 'hidden'
            });
        }
    }
}
