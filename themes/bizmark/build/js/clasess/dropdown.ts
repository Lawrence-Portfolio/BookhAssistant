export class Dropdown {
    dropdownArray : NodeListOf<Element>
    constructor() {
        this.dropdownArray = document.querySelectorAll('[dropdown]')
        this.init()
    }
    init() {
        this.dropdownArray.forEach(item => {
            let button = item.querySelector('[dropdown-button]')
            let dropdownList = item.querySelector('[dropdown-list]')

            button.addEventListener('click', () => {
                item.classList.toggle('active')
                dropdownList.classList.toggle('show')
            })
            document.addEventListener('click', (e: any) => {
                let isClickOutside : boolean = !button.contains(e.target)
                if(isClickOutside) {
                    item.classList.remove('active')
                    dropdownList.classList.remove('show')
                }
            })
        })
    }
}
