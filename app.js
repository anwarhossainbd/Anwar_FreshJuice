//Nav
const nav =document.querySelector(".nav-menu")
const navigation =document.querySelector(".navigation")
const openBtn=document.querySelector(".hamburger")
const closeBtn=document.querySelector(".close")

const navleft= nav.getBoundingClientRect().left;
openBtn.addEventListener("click",()=>{
    if (navleft<0){
        navigation.classList.add("show")
        nav.classList.add("show")
        document.body.classList.add("show")
    }
})

closeBtn.addEventListener("click",()=>{
    if (navleft<0){
        navigation.classList.remove("show")
        nav.classList.remove("show")
        document.body.classList.remove("show")
    }
})

// Fixed Nav
const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
})


//Preloader

window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 2000)
})

// Smooth Scroll
const scrollLinks = [...document.querySelectorAll(".scroll-link")];

scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        const id = e.target.getAttribute("href").slice(1);

        const element = document.getElementById(id);

        const position = element.offsetTop;


        window.scrollTo({
            left: 0,
            top: position,
        });
        nav.classList.remove("show");
        navigation.classList.remove("show");
        document.body.classList.remove("show");
    });
});


















