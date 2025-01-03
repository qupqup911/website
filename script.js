let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let messageField = document.getElementById("message");
let btn = document.getElementById("submitButton");
let list = document.getElementById("list");

btn.addEventListener("click", function (event) {
    event.preventDefault();

    let name = nameField.value.trim();
    let message = messageField.value.trim();

    if (!name || !message) {
        alert("請填寫完整的姓名與訊息！");
        return;
    }

    list.innerHTML += `
        <div class="news">
            <h3>${name}</h3>
            <p>${message}</p>
            <hr>
        </div>
    `;

    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
});
