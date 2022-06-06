const header = document.createElement('h1')
const funcDom = () => {
    header.textContent = 'Работа с DOM'
    document.body.before(header)
}

const main = document.getElementById('main')
const funcSt = () => {
    const a = document.createElement('a')
    a.textContent = 'Ссылка на статью Дом'
    a.href = 'https://javascript.ru/tutorial/dom/intro'
    main.append(a)
}

const color = (parametr) => {
    document.body.style.backgroundColor = (parametr)
}

const list = document.getElementById('list')

const funcText = (text) => {
    let liLink = document.createElement('li')
    liLink.textContent = (text)
    list.append(liLink)
}
const copyrigth = document.getElementById('copyright')

const remove = (parr) => {
parr.remove()
}
