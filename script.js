const menu = document.querySelector("button.menu");
const close = document.querySelector("button.close");
const nav = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-items")
menu.addEventListener("click", () => {
    navItems.classList.remove("hidden");
    menu.classList.add("hidden");
    close.classList.remove("hidden");
    nav.classList.add("full-view")
});
close.addEventListener("click", () => {
    toggleClose();
})

const navItemList = document.querySelectorAll(".nav-item");

navItemList.forEach((item) => {
    item.addEventListener("click", () => {
        toggleClose();
    })
})

function toggleClose() {
    navItems.classList.add("hidden");
    menu.classList.remove("hidden");
    close.classList.add("hidden");
    nav.classList.remove("full-view");
}