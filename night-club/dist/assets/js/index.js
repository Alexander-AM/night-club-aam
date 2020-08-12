document.addEventListener("DOMContentLoaded", async () => {
    //-- Endpoint reset --//
    await fetch("http://localhost:4000/reset");

    //-- Newsletter subscription --//
    const newsletterSubscribeBtnDOM = document.querySelector("#newsletter-input-subscribe");
    const newsletterInputEmailDOM = document.querySelector("#newsletter-input-email");
    const newsletterFormDOM = document.querySelector("#newsletter-form");

    const emailRegex = /(?:[^\s]+)@(?:[^\s\.]+)\.[A-z](?:[A-z]+)/;

    newsletterSubscribeBtnDOM.addEventListener("click", (e) => {
        e.preventDefault();
        
        if(emailRegex.test(newsletterInputEmailDOM.value)) {
            const data = new URLSearchParams();

            for (const pair of new FormData(newsletterFormDOM)) {
                data.append(pair[0], pair[1]);
            }

            fetch("http://localhost:4000/newsletters", {
                method: "POST",
                body: data
            })
            .then(() => {
                newsletterInputEmailDOM.value = "";
                alert("Succesfully signed up.");
            });
        } else {
            alert("Invalid email");
        }
    });


    //-- Section 2, slider --//
    let eventsSliderActiveDOM = document.querySelector(".events-slider-button.active");
    let eventsSliderSlide = 0;
    
    const eventsSliderDOM = document.querySelector(".events-slider");
    const eventsSliderControlsDOM = document.querySelector(".events-slider-controls");

    eventsSliderControlsDOM.addEventListener("click", (e) => {
        if(e.target.classList.contains("events-slider-button")) {
            clearInterval(eventsSliderLoop);
            eventsSliderLoop = setInterval(eventsSliderLoopFunc, 1000 * 5);    

            eventsSliderActiveDOM.classList.remove("active");

            eventsSliderActiveDOM = e.target;

            eventsSliderSlide = parseInt(eventsSliderActiveDOM.dataset.val);
            eventsSliderActiveDOM.classList.add("active");

            eventsSliderDOM.style.transform = `translateX(-${eventsSliderSlide * 100}%)`;
        }
    });

    eventsSliderDOM.addEventListener("mouseenter", () => {
        clearInterval(eventsSliderLoop);
    });

    eventsSliderDOM.addEventListener("mouseleave", () => {
        eventsSliderLoop = setInterval(eventsSliderLoopFunc, 1000 * 5);    
    });

    const eventsSliderLoopFunc = () => {
        eventsSliderActiveDOM.classList.remove("active");

        eventsSliderSlide++;
        if(eventsSliderSlide >= eventsSliderControlsDOM.children.length) eventsSliderSlide = 0;
        eventsSliderActiveDOM = eventsSliderControlsDOM.children[eventsSliderSlide];

        eventsSliderActiveDOM.classList.add("active");
        eventsSliderDOM.style.transform = `translateX(-${eventsSliderSlide * 100}%)`;
    };

    let eventsSliderLoop = setInterval(eventsSliderLoopFunc, 1000 * 5);
    

    //-- Finished loading --//
    finishedLoading = true;
    document.querySelector(".hero").classList.add("animate");
});