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


    finishedLoading = true;
    document.querySelector(".hero").classList.add("animate");
});