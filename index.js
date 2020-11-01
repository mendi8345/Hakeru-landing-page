var body = document.querySelector("#body");
var cancel = document.querySelector("#cancel");
var alert = document.querySelector("#sixth");
var backdrop = document.querySelector("#toggle");
var mobileLinks = document.querySelector(".first-section__mobile-links");
var mobileLinkInsideNav = document.querySelectorAll(".mpm")

var desktopLinkInsideNav = document.querySelectorAll(".main-links__li")
var desktopInsideMenu = document.querySelectorAll(".main-links__li__inside-nav")

var mobileLinkInsideNav = document.querySelectorAll(".mpm")
var mobileInsideMenu = document.querySelectorAll(".inside-menu")


backdrop.addEventListener("click", (event) => {

    console.log(backdrop)
    backdrop.classList.contains('open') ? backdrop.classList.remove('open') : backdrop.classList.add('open');

    mobileLinks.classList.contains('open') ?
        mobileLinks.classList.remove('open') :
        mobileLinks.classList.add('open');


})

for (let index = 0; index < desktopLinkInsideNav.length; index++) {
    desktopLinkInsideNav[index].addEventListener("click", (event) => {

        desktopInsideMenu.forEach(element => {
            if (element.classList.contains('open') && element !== desktopInsideMenu[index])
                element.classList.remove('open');

        });
        desktopInsideMenu[index].classList.contains('open') ?
            desktopInsideMenu[index].classList.remove('open') :
            desktopInsideMenu[index].classList.add('open');

    })
}
for (let index = 0; index < mobileLinkInsideNav.length; index++) {
    mobileLinkInsideNav[index].addEventListener("click", (event) => {
        mobileInsideMenu[index].classList.contains('open') ?
            mobileInsideMenu[index].classList.remove('open') :
            mobileInsideMenu[index].classList.add('open');

    })
}
body.addEventListener("load", bodyOnLoad(event))

function bodyOnLoad(event) {
    alert.classList.add("open");
    console.log("loading", event)
        // body.styls
}

cancel.addEventListener("click", () => { alert.classList.remove("open") })