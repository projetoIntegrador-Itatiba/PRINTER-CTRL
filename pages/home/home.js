function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html"
    }).catch(() => {
        alert('Erro ao fazer logout')
    })
}

let hamburguer = document.querySelector('.hamburguer')
let navLinks = document.getElementById('nav-links')
let links = document.querySelectorAll('.links')

hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('hide')
    hamburguer.classList.toggle('lines-rotate')
})

for (let i=0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        navLinks.classList.toggle('hide')
    })
}
