var finishedLoading = false;
const loaderDOM = document.querySelector("#loader");
const FPS = 1000 / 100;

const loop = () => {
    if(finishedLoading && !loaderDOM.classList.contains("remove")) {
        loaderDOM.classList.add("remove");
        setTimeout(() => {
            loaderDOM.remove();
        }, 2000);
    }

    if(!finishedLoading && !loaderDOM.classList.contains("remove")) {
        setTimeout(loop, FPS);
    }
};

setTimeout(loop, FPS);