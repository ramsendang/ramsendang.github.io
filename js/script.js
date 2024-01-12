// Typing Animation 
const typed = new Typed('.multiple-text', {
    strings: ['Student', 'QA Automation Engineer', 'Web Designer'],
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// for mobile navigation 
document.getElementById("menu_button").innerHTML = "<i class='fa fa-bars'></i>";
document.getElementById("menu_button").addEventListener("click", function(){
    mobile_nav_menu = document.getElementById("mobile_nav_menu");
    if (mobile_nav_menu.className === "mobile_nav_menu") {
        mobile_nav_menu.classList.add("responsive");
        document.getElementById("menu_button").innerHTML = "X";
    } else {
        mobile_nav_menu.classList.remove("responsive");
        document.getElementById("menu_button").style.display = "flex";
        document.getElementById("menu_button").innerHTML = "<i class='fa fa-bars'></i>";
    }

});