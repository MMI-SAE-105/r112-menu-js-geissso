const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("#mainNav");

toggle.addEventListener("click",(evt)=>{
const isOpen = toggle.ariaExpanded === "true";
const isClosed = !isOpen;
console.log("isOpen : ", isOpen, "isClosed :", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
});