document.addEventListener("DOMContentLoaded", () => {
    const curPath = location.pathname;
    const links = document.querySelectorAll("nav a");

    for(let i = 0; i < links.length; i++) {
        if(links[i].getAttribute("href").startsWith(curPath)) {
            links[i].classList.add("active");
            break;
        }
    }
});