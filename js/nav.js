class sidebar {
    constructor(lista, menu, dropmenu) {
        this.lista = document.querySelectorAll(lista)
        this.menu = document.querySelector(menu)
        this.dropmenu = document.querySelector(dropmenu)
    }
    handleclick = () => {
        this.dropmenu.addEventListener('click', () => {
            this.menu.classList.toggle('active')
        })
    }
    init = () => {
        this.handleclick()
    }
}

const menu = new sidebar('.nav_items', "nav", ".dropmenu")
menu.init()