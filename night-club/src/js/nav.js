document.addEventListener("DOMContentLoaded", () => {
    let curPath = location.pathname;
    const links = document.querySelectorAll("nav a");
    
    curPath = curPath.slice(0, curPath.length - 1);

    for(let i = 0; i < links.length; i++) {
        if(links[i].getAttribute("href").startsWith(curPath)) {
            links[i].classList.add("active");
            break;
        }
    }
});