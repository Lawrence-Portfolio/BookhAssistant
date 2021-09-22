import Cleave from 'cleave.js';
import '../../../node_modules/cleave.js/dist/addons/cleave-phone.ru';

export class PhoneMask {
    selector: string
    constructor() {
        this.selector = 'input[type="tel"]'
        this.init()
    }
    init() {
        document.querySelectorAll(this.selector).forEach(item => {
            new Cleave(item, {
                phone: true,
                phoneRegionCode: 'ru'
            });
        })

    }
}
