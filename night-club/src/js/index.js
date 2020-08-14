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

        const controlChildren = (document.documentElement.clientWidth >= 700) ? eventsSliderControlsDOM.querySelectorAll(".slider-button:not(.max-hide)") : eventsSliderControlsDOM.children;

        eventsSliderSlide++;
        if(eventsSliderSlide >= controlChildren.length) eventsSliderSlide = 0;
        eventsSliderActiveDOM = controlChildren[eventsSliderSlide];

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
                        <img src="http://localhost:4000/file-bucket/event-thumb${i + 1}.jpg">
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


            eventsSliderControlsDOM.innerHTML += `<div class="slider-button events-slider-button ${i == 0 ? "active" : ""} ${ i >= e.length / 2 ? "max-hide" : ""}" data-val="${i}"></div>`;
        }
    });

    window.addEventListener("resize", (e) => {
        if(document.documentElement.clientWidth >= 640) {
            eventsSliderActiveDOM.classList.remove("active");

            eventsSliderSlide = 0;
            eventsSliderActiveDOM = eventsSliderControlsDOM.children[0];
            eventsSliderActiveDOM.classList.add("active");

            eventsSliderDOM.style.transform = `translateX(0)`;
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


    //-- Section 3, gallery --//
    const galleryContainerDOM = document.querySelector(".gallery-container");
    const lightboxDOM = document.querySelector(".lightbox");
    const lightboxImageDOM = document.querySelector(".lightbox-image");
    const lightboxTitleDOM = document.querySelector(".lightbox-title");
    const lightboxTextDOM = document.querySelector(".lightbox-text");
    const lightboxPostDOM = document.querySelector(".lightbox-post");


    // Load gallery
    let lightboxPosts = [];

    const ASSETS = await fetch("http://localhost:4000/assets/").then((e) => e.json());

    await fetch("http://localhost:4000/gallery-photos")
    .then((e) => e.json())
    .then(async (e) => {
        for(let i = 0; i < e.length; i++) {
            galleryContainerDOM.innerHTML += `
            <div class="gallery-item" data-item="${i}">
                <img src="${ASSETS[e[i].asset - 1].url}">
                <div class="gallery-item-cover"></div>
            </div>
            `;

            lightboxPosts.push({ url: ASSETS[e[i].asset - 1].url });
        }

        return e;
    });


    const galleryItemsDOM = galleryContainerDOM.querySelectorAll(".gallery-item");
    const galleryItemsImgDOM = galleryContainerDOM.querySelectorAll(".gallery-item img");

    const resizeImageGallery = () => {
        const result = partition_layout(galleryItemsImgDOM, {
            containerWidth: document.documentElement.clientWidth,
            idealElementHeight: 200,
            spacing: 0,
        });
        
        if(isNaN(result.height)) {
            setTimeout(resizeImageGallery, 100);
        } else {
            galleryContainerDOM.style.height = result.height + "px";
        
            for(let i = 0; i < galleryItemsDOM.length; i++) {
                galleryItemsDOM[i].style.left = result.positions[i].x + "px";
                galleryItemsDOM[i].style.top = result.positions[i].y + "px";
                galleryItemsDOM[i].style.width = result.positions[i].width + "px";
                galleryItemsDOM[i].style.height = result.positions[i].height + "px";
            }
        }
    }
    resizeImageGallery();

    // Animate
    window.addEventListener("scroll", () => {
        if(!galleryContainerDOM.classList.contains("animate") && galleryContainerDOM.getBoundingClientRect().top - document.documentElement.clientHeight <= 0) {
            galleryContainerDOM.classList.add("animate");
        }
    });

    // Lightbox
    let currentLightboxSlide = 0;

    galleryContainerDOM.addEventListener("click", (e) => {
        if(e.target.classList.contains("gallery-item-cover")) {
            lightboxDOM.classList.add("visible");
            lightboxImageDOM.setAttribute("src", e.target.parentNode.children[0].getAttribute("src"));
            currentLightboxSlide = parseInt(e.target.parentNode.dataset.item);
        }
    });

    let lightboxSlideAnimationA, lightboxSlideAnimationB;

    lightboxDOM.addEventListener("click", (e) => {
        if(e.target.classList.contains("lightbox")) {
            lightboxDOM.classList.remove("visible");
        } else if(e.target.classList.contains("lightbox-left")) {
            clearTimeout(lightboxSlideAnimationA);
            clearTimeout(lightboxSlideAnimationB);
            lightboxPostDOM.classList.remove("in-right", "in-left", "animate", "left", "right");
            lightboxPostDOM.classList.add("animate", "left");

            currentLightboxSlide--;
            if(currentLightboxSlide < 0) {
                currentLightboxSlide = lightboxPosts.length - 1;
            }

            lightboxSlideAnimationA = setTimeout(() => {
                lightboxImageDOM.setAttribute("src", lightboxPosts[currentLightboxSlide].url);
                lightboxPostDOM.classList.remove("animate", "left");
                lightboxPostDOM.classList.add("in-right");

                lightboxSlideAnimationB = setTimeout(() => {
                    lightboxPostDOM.classList.remove("in-right");
                }, 250);
            }, 250);
        } else if(e.target.classList.contains("lightbox-right")) {
            clearTimeout(lightboxSlideAnimationA);
            clearTimeout(lightboxSlideAnimationB);
            lightboxPostDOM.classList.remove("in-right", "in-left", "animate", "left", "right");

            lightboxPostDOM.classList.add("animate", "right");
            
            currentLightboxSlide++;
            if(currentLightboxSlide >= lightboxPosts.length) {
                currentLightboxSlide = 0;
            }

            lightboxSlideAnimationA = setTimeout(() => {
                lightboxImageDOM.setAttribute("src", lightboxPosts[currentLightboxSlide].url);
                lightboxPostDOM.classList.remove("animate", "right");
                lightboxPostDOM.classList.add("in-left");

                lightboxSlideAnimationB = setTimeout(() => {
                    lightboxPostDOM.classList.remove("in-left");
                }, 250);
            }, 250);
        }
    });


    //-- Section 6, slider --//
    let testimoniesSliderSlide = 0;
    
    const testimoniesSliderDOM = document.querySelector(".testimonies-slider");
    const testimoniesSliderControlsDOM = document.querySelector(".testimonies-slider-controls");

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
                        <a href="${e[i].google ? e[i].google : "https://google.com"}"><i class="fab fa-google"></i></a>
                    </div>
                </article>
            </div>
            `;

            testimoniesSliderDOM.innerHTML += testimoniesSliderItemTemplate;


            testimoniesSliderControlsDOM.innerHTML += `<div class="slider-button testimonies-slider-button ${i == 0 ? "active" : ""}" data-val="${i}"></div>`;
        }
    });

    let testimoniesSliderActiveDOM = document.querySelector(".testimonies-slider-button.active");

    testimoniesSliderControlsDOM.addEventListener("click", (e) => {
        if(e.target.classList.contains("testimonies-slider-button")) {
            testimoniesSliderActiveDOM.classList.remove("active");

            testimoniesSliderActiveDOM = e.target;

            testimoniesSliderSlide = parseInt(testimoniesSliderActiveDOM.dataset.val);
            testimoniesSliderActiveDOM.classList.add("active");

            testimoniesSliderDOM.style.transform = `translateX(-${testimoniesSliderSlide * 100}%)`;
        }
    });


    //-- Finished loading --//
    finishedLoading = true;
    document.querySelector(".hero").classList.add("animate");
});