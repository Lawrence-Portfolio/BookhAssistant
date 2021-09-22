const ModalVideo = require('modal-video');

export class VideoModal {
    selector : string
        constructor(selector = '[video-modal-btn]') {
        this.selector = selector
        this.init()
    }
    init() {
        new ModalVideo(this.selector)
    }
}
