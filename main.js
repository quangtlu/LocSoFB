const text = document.querySelector('#input')
const btn = document.querySelector('#button')
const darkBtn = document.querySelector('.icon-moon')
const body = document.body
const textarrea = document.querySelector('#input')
btn.onclick = function(){
    const newtext = text.value.replace(/[^0-9\r?\n|\r]/g,'')
    text.value = newtext

    text.select()
    text.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(text.value)
}

darkBtn.onclick = function(){
    body.classList.toggle('darkmode')
    textarrea.classList.toggle('darkmode')
}
