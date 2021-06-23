let startButton = document.getElementById('start_btn')
let menuBtn = document.querySelector('.bi-menu-app')
let categories = document.querySelector('.categories')

menuBtn.onclick = function(){
    categories.classList.toggle('show')
}

startButton.onclick = function(){
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
}







