document.querySelector(".btn--menu").addEventListener('click', function() {
    document.querySelector(".navbar__menu").classList.toggle("show--menu");
})

document.querySelector(".btn--close").addEventListener('click', function() {
    document.querySelector(".navbar__menu").classList.toggle("show--menu");
})

document.querySelector(".btn--dark").addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
    const i = document.querySelector("#dark");
    if (document.documentElement.classList.contains('dark')) {
        // localStorage.setItem('dark-mode','true')
        i.classList.add('fa-sun')
        i.classList.remove('fa-moon')
    }else{
        // localStorage.setItem('dark-mode','false')
        i.classList.remove('fa-sun')
        i.classList.add('fa-moon')
    }
})