var scrollingRow = document.querySelector("#scrolling-row");
var body = document.querySelector("#body");
var cancel = document.querySelector("#cancel");
var alert = document.querySelector("#alert");
var backdrop = document.querySelector("#toggle");
var mobileLinks = document.querySelector(".first-section__mobile-links");
var mobileLinkInsideNav = document.querySelectorAll(".mpm")

var desktopLinkInsideNav = document.querySelectorAll(".main-links__li")
var desktopInsideMenu = document.querySelectorAll(".main-links__li__inside-nav")

var mobileLinkInsideNav = document.querySelectorAll(".mpm")
var mobileInsideMenu = document.querySelectorAll(".inside-menu")

var scroll = window.requestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}


window.addEventListener("scroll", loop())


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
body.addEventListener("load", bodyOnLoad())

function bodyOnLoad() {
    alert.classList.add("open");
    var left = 50;

    // body.styls

}

cancel.addEventListener("click", () => { alert.classList.remove("open") })

scrollingRow.addEventListener("load", scrollRow())

function scrollRow() {
    var left = 1;
    // while () {
    //     left += 1
    //     scrollingRow.style.left = left + "px"
    //     console.log("loading", scrollingRow.style.left);
    //     if (left < 2000)
    //         left = 1

    // }
}

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}