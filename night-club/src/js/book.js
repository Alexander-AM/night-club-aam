document.addEventListener("DOMContentLoaded", () => {
    const tablePickerDOM = document.querySelector(".table-picker");

    for(let i = 1; i <= 15; i++) {
        tablePickerDOM.innerHTML += `
        <div class="table-wrapper">
            <img src="/assets/img/table_${(i % 5 == 0) ? 3 : ((i + 2) % 5 == 0 ? 2 : 1)}.png">
            <span class="table-number">${i}</span>
        </div>`;
    }

    finishedLoading = true;
});