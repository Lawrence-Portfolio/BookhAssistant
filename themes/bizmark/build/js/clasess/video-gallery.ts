import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';

export class VideoGallery {
    selector : string
    constructor() {
        this.selector = '[video-gallery]'
        this.init()
    }
    init() {
        document.querySelectorAll(this.selector).forEach((item) => {
            let lg:any = item

            lightGallery(lg, {
                plugins: [lgVideo],
                download: false
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
