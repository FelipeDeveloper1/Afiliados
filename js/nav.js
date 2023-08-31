class sidebar {
    constructor(lista, menu, dropmenu) {
        this.lista = document.querySelectorAll(lista)
        this.menu = document.querySelector(menu)
        this.dropmenu = document.querySelector(dropmenu)
    }
    handleclick = () => {
        this.dropmenu.addEventListener('click', () => {
            this.animaLinks()
            this.menu.classList.toggle('active')
        })
    }
    animaLinks = () => {
        this.lista.forEach((values, index) => {
            values.style.animation ? values.style.animation = "" : values.style.animation = `bringlinks ${index / 5 + 0.8}s ease forwards 0.1s`
        })
    }
    init = () => {
        if (this.dropmenu) {
            this.handleclick()

        }
    }
}

const menu = new sidebar('.nav_items', "nav", ".dropmenu")
menu.init()