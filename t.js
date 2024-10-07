const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username: "premkumaronlinecenter@gmail.com",
        Password: "49856287B925A7EB0F21AACDA890FFFF67D0",
        To: 'premkumaronlinecenter@gmail.com',
        From: "premkumaronlinecenter@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
