function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_t5c180u", "contact_form", parms)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email Sent Successfully!");
    })
    .catch(function(error) {
        console.log("FAILED...", error);
        alert("Failed to send email: " + JSON.stringify(error));
    });
}
