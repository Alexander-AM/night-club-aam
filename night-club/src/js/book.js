document.addEventListener("DOMContentLoaded", () => {
    //-- Form elements --//
    const bookFormDOM = document.querySelector("#book-form");
    const bookNameDOM = document.querySelector("#book-name");
    const bookTableDOM = document.querySelector("#book-table");
    const bookDateDOM = document.querySelector("#book-date");
    const bookEmailDOM = document.querySelector("#book-email");
    const bookGuestsDOM = document.querySelector("#book-guests");
    const bookNumberDOM = document.querySelector("#book-number");
    const bookCommentDOM = document.querySelector("#book-comment");

    //-- Add tables --//
    const tablePickerDOM = document.querySelector(".table-picker");

    for(let i = 1; i <= 15; i++) {
        tablePickerDOM.innerHTML += `
        <div class="table-wrapper">
            <img src="/assets/img/table_${(i % 5 == 0) ? 3 : ((i + 2) % 5 == 0 ? 2 : 1)}.png">
            <span class="table-number">${i}</span>
        </div>`;
    }

    //-- Table picking --//
    tablePickerDOM.addEventListener("click", (e) => {
        if(e.target.classList.contains("table-number")) {
            bookTableDOM.value = e.target.innerHTML;
        }
    });

    //-- Reserve --//
    const bookReserveDOM = document.querySelector("#book-reserve");

    const emailRegex = /(?:[^\s]+)@(?:[^\s\.]+)\.[A-z](?:[A-z]+)/;

    bookReserveDOM.addEventListener("click", async (e) => {
        e.preventDefault();

        const emailValid = emailRegex.test(bookEmailDOM.value);
        const emailExists = (bookEmailDOM.value != "");
        const nameExists = (bookNameDOM.value != "");
        const numberExists = (bookNumberDOM.value != "");
        const guestsExists = (bookGuestsDOM.value != "");
        const dateExists = (bookDateDOM.value != "");
        const tableExists = (bookTableDOM.value != "");

        let dateValid = true;
        let date;

        if(dateExists) {
            const reservations = await fetch("http://localhost:4000/reservations").then(e => e.json());
            date = new Date(bookDateDOM.value).toISOString();

            for(let i = 0; i < reservations.length; i++) {
                if(date == reservations[i].date) {
                    dateValid = false;
                    break;
                }
            }
        }


        if(emailValid && emailExists && nameExists && numberExists && guestsExists && dateExists && dateValid && tableExists) {
            const data = new URLSearchParams();

            for (const pair of new FormData(bookFormDOM)) {
                data.append(pair[0], pair[1]);
            }

            fetch("http://localhost:4000/reservations", {
                method: "POST",
                body: data
            })
            .then(() => {
                bookEmailDOM.value = "";
                bookNameDOM.value = "";
                bookNumberDOM.value = "";
                bookGuestsDOM.value = "";
                bookDateDOM.value = "";
                bookTableDOM.value = "";

                alert("Successfully reserved table.");
            });

            return;
        }

        if(!nameExists) alert("A name is required");
        
        if(!emailValid) alert("Invalid email");
        else if(!emailExists) alert("An email is required");

        if(!numberExists) alert("A contact number is required");
        if(!guestsExists) alert("Guest amount is required");

        if(!dateValid) alert("The selected date and table combination is not free");
        else if(!dateExists) alert("A date is required");

        if(!tableExists) alert("A table number is required");
    });


    //--- Finish loading ---//
    finishedLoading = true;
});