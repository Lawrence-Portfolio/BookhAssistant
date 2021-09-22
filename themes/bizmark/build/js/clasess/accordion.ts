let AccordionJS = require('accordion-js');

export class Accordion {
    selector: string
    constructor() {
        this.selector = '[accordion-container]'
        this.init()
    }
    init() {
        document.querySelectorAll(this.selector).forEach(item => {
            new AccordionJS(item);
        })
    }
}
