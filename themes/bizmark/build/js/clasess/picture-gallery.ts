import lightGallery from 'lightgallery';

export class PictureGallery {
    selector: string
    constructor() {
        this.selector = '[picture-gallery]'
        this.init()
    }
    init() {
        document.querySelectorAll(this.selector).forEach(item => {
            let lg:any = item
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
        })
    }
}
