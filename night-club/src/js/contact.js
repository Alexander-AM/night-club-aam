document.addEventListener("DOMContentLoaded", () => {
    //-- Contact --//
    const messageSubmitBtnDOM = document.querySelector("#message-input-submit");
    const messageInputEmailDOM = document.querySelector("#message-input-email");
    const messageInputNameDOM = document.querySelector("#message-input-name");
    const messageInputWebsiteDOM = document.querySelector("#message-input-website");
    const messageInputCommentDOM = document.querySelector("#message-input-comment");
    const messageFormDOM = document.querySelector("#message-form");

    const emailRegex = /(?:[^\s]+)@(?:[^\s\.]+)\.[A-z](?:[A-z]+)/;

    messageSubmitBtnDOM.addEventListener("click", (e) => {
        e.preventDefault();

        const emailValid = emailRegex.test(messageInputEmailDOM.value);
        const emailExists = (messageInputEmailDOM.value != "");
        const nameExists = (messageInputNameDOM.value != "");
        const websiteExists = (messageInputWebsiteDOM.value != "");
        const commentExists = (messageInputCommentDOM.value != "");

        if(emailValid && emailExists && nameExists && websiteExists && commentExists) {
            const data = new URLSearchParams();

            for (const pair of new FormData(messageFormDOM)) {
                data.append(pair[0], pair[1]);
            }

            fetch("http://localhost:4000/messages", {
                method: "POST",
                body: data
            })
            .then(() => {
                messageInputEmailDOM.value = "";
                messageInputNameDOM.value = "";
                messageInputWebsiteDOM.value = "";
                messageInputCommentDOM.value = "";
                alert("Successfully sent message.");
            });

            return;
        }

        if(!nameExists) alert("A name is required");
        if(!emailValid) alert("Invalid email");
        if(!emailExists) alert("An email is required");
        if(!websiteExists) alert("A website is required");
        if(!commentExists) alert("A comment is required");
    });



    finishedLoading = true;
});