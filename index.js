let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

document.querySelector("#login-btn").onclick = () => {
    document.querySelector(".login-form-container").classList.toggle("active");
}

document.querySelector("#close-login-form").onclick = () => {
    document.querySelector(".login-form-container").classList.toggle("active");
}

window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }

    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}
 var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween:20,
    loop:true,
    grabCursor:true,
    autoplay:{
        delay: 9500,
        disableOnInteraction:false,
    },
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        0:{slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {slidesPerView: 3,
        },
    },
 });
 //featured section inicio//

 var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween:20,
    loop:true,
    grabCursor:true,
    autoplay:{
        delay: 9500,
        disableOnInteraction:false,
    },
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        0:{slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {slidesPerView: 3,
        },
    },
 });
 //featured section fin//