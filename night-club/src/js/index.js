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
    let eventsSliderSlide = 0;
    
    const eventsSliderDOM = document.querySelector(".events-slider");
    const eventsSliderControlsDOM = document.querySelector(".events-slider-controls");

    const eventsSliderLoopFunc = () => {
        eventsSliderActiveDOM.classList.remove("active");

        eventsSliderSlide++;
        if(eventsSliderSlide >= eventsSliderControlsDOM.children.length) eventsSliderSlide = 0;
        eventsSliderActiveDOM = eventsSliderControlsDOM.children[eventsSliderSlide];

        eventsSliderActiveDOM.classList.add("active");
        eventsSliderDOM.style.transform = `translateX(-${eventsSliderSlide * 100}%)`;
    };

    const MONTHS = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    await fetch("http://localhost:4000/events")
    .then((e) => e.json())
    .then((e) => {
        for(let i = 0; i < e.length; i++) {
            const date = new Date(e[i].eventDate);

            const eventsSliderItemTemplate = `
            <div class="events-slider-item">
                <article class="event-post">
                    <section class="event-post-upper">
                        <img src="/assets/img/content/reastaurant_1.jpg">
                        <div class="event-post-cover">
                            <a href="/book" class="event-post-book">Book Now</a>
                        </div>
                        <div class="event-post-info">
                            <h2 class="event-post-title">${e[i].eventName}</h2>
                            <p>${e[i].eventDescription}</p>
                        </div>
                    </section>
                    <section class="event-post-lower">
                        <p class="event-post-date">${date.getDate()} ${MONTHS[date.getMonth()]}</p>
                        <p class="event-post-time">${date.getHours() <= 12 ? date.getHours() : date.getHours() - 12}:${date.getMinutes().toString().length == 1 ? "0" : ""}${date.getMinutes()} ${date.getHours() <= 12 ? "AM" : "PM"}</p>
                        <p class="event-post-location">${e[i].location}</p>
                    </section>
                </article>
            </div>
            `;

            eventsSliderDOM.innerHTML += eventsSliderItemTemplate;


            if(i % 2 == 0) {
                eventsSliderControlsDOM.innerHTML += `<div class="slider-button events-slider-button ${i / 2 == 0 ? "active" : ""}" data-val="${i / 2}"></div>`;
            }
        }
    });

    let eventsSliderActiveDOM = document.querySelector(".events-slider-button.active");

    eventsSliderControlsDOM.addEventListener("click", (e) => {
        if(e.target.classList.contains("events-slider-button")) {
            clearInterval(eventsSliderLoop);

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

    let eventsSliderLoop = setInterval(eventsSliderLoopFunc, 1000 * 5);


    //-- Section 6, slider --//
    let testimoniesSliderSlide = 0;
    
    const testimoniesSliderDOM = document.querySelector(".testimonies-slider");
    const testimoniesSliderControlsDOM = document.querySelector(".testimonies-slider-controls");

    const testimoniesSliderLoopFunc = () => {
        testimoniesSliderActiveDOM.classList.remove("active");

        testimoniesSliderSlide++;
        if(testimoniesSliderSlide >= testimoniesSliderControlsDOM.children.length) testimoniesSliderSlide = 0;
        testimoniesSliderActiveDOM = testimoniesSliderControlsDOM.children[testimoniesSliderSlide];

        testimoniesSliderActiveDOM.classList.add("active");
        testimoniesSliderDOM.style.transform = `translateX(-${testimoniesSliderSlide * 100}%)`;
    };

    await fetch("http://localhost:4000/testemonials")
    .then((e) => e.json())
    .then((e) => {
        for(let i = 0; i < e.length; i++) {
            const testimoniesSliderItemTemplate = `
            <div class="testimonies-slider-item">
                <article class="testimony-post">
                    <img src="http://localhost:4000/file-bucket/testimonial_${i + 1}.jpg">
                    <p class="testimonies-name">${e[i].name}</p>
                    <p>${e[i].content}</p>

                    <div class="testimonies-social-media">
                        <a href="${e[i].facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a href="${e[i].twitter}"><i class="fab fa-twitter"></i></a>
                    </div>
                </article>
            </div>
            `;

            console.log(e[i]);

            testimoniesSliderDOM.innerHTML += testimoniesSliderItemTemplate;


            testimoniesSliderControlsDOM.innerHTML += `<div class="slider-button testimonies-slider-button ${i == 0 ? "active" : ""}" data-val="${i}"></div>`;
        }
    });

    let testimoniesSliderActiveDOM = document.querySelector(".testimonies-slider-button.active");

    testimoniesSliderControlsDOM.addEventListener("click", (e) => {
        if(e.target.classList.contains("testimonies-slider-button")) {
            clearInterval(testimoniesSliderLoop);

            testimoniesSliderActiveDOM.classList.remove("active");

            testimoniesSliderActiveDOM = e.target;

            testimoniesSliderSlide = parseInt(testimoniesSliderActiveDOM.dataset.val);
            testimoniesSliderActiveDOM.classList.add("active");

            testimoniesSliderDOM.style.transform = `translateX(-${testimoniesSliderSlide * 100}%)`;
        }
    });

    let testimoniesSliderLoop = setInterval(testimoniesSliderLoopFunc, 1000 * 5);


    //-- Finished loading --//
    finishedLoading = true;
    document.querySelector(".hero").classList.add("animate");
});