function openmenu() {
    document.getElementById("nav-bar").style.width = "70%";
    document.getElementById("nav-bar").style.animation = "mynav 1.0s ease";
    document.getElementById("nav-bar").style.display = "block";
    document.getElementById("sico").style.display = "flex";
    document.getElementById("bdy").style.overflow = "hidden";
}

function closemenu() {
    document.getElementById("nav-bar").style.width = "0%";
    document.getElementById("nav-bar").style.display = "none";
    document.getElementById("nav-bar").style.animation = "closemenu 2.8s ease ";
    document.getElementById("sico").style.display = "none";
    document.getElementById("bdy").style.overflow = "visible";
}
function loading() {
    document.getElementById("load").style.display = "none";
}

