// some of the java stuff will go in here

//for hamburger menu
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('show');
}

//for the about popup
function OpenPopup() {
    document.getElementById("Popup").style.display = "block";
}
function ClosePopup() {
    document.getElementById("Popup").style.display = "none";
}