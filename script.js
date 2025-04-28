var swiper = new Swiper('#slideshow0', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function toggleMenu() { 
    let menu = document.getElementById("nav-menu");

    menu.classList.toggle("open");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalCount;
}

document.addEventListener("DOMContentLoaded", updateCartCount);

// DOM => Document Object Model
// BOM => Browser Object Model

let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function () {
    
    let scrollTop = window.scrollY

    let documentHeight = document.body.clientHeight

    let windowHeight = window.innerHeight

    let scrollPercent = scrollTop / (documentHeight - windowHeight)

    let scrollPercentRounded = Math.round(scrollPercent * 100)

    customScroll.style.width = scrollPercentRounded + '%'

    console.log(scrollPercentRounded);
})