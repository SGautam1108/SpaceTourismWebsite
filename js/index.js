const navToggle = document.querySelector(".nav-toggle"),
primaryNav = document.querySelector(".primary-navigation");


const toggleNav = () => {
    primaryNav.classList.toggle("primary-navigation--open");
} 

navToggle.addEventListener("click", () => {
    toggleNav();

    let visibility = primaryNav.classList.contains("primary-navigation--open");

    if(visibility === true){
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        navToggle.setAttribute("aria-expanded", false);
    }
})