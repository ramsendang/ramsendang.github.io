

var btn = document.querySelector('.Hamburger')
var navmenu_small_screen = document.querySelector('.navmenu_small_screen');

btn.addEventListener('click', function(){
    if (navmenu_small_screen.className === "navmenu_small_screen") {
        navmenu_small_screen.classList.add("responsive");
    } else {
        navmenu_small_screen.classList.remove("responsive");
    }
});
    
