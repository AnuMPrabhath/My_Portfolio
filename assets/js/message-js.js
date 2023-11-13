function sendEmail() {
    // Replace the following variables with your own values
    var to = "anushkaprabhath15@gmail.com";
    var subject = $("#feedback-subject").val();
    var name = $("#feedback-name").val();
    var email = $("#feedback-email").val();
    var message = $("#feedback-message").val();

    var body = "name:"+name+"email:"+email+"message:"+message;
    console.log(body);
    // Create a mailto link
    var mailtoLink = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Open the user's default email client with the pre-filled content
    window.location.href = mailtoLink;
}

// Call the function when, for example, a button is clicked
document.getElementById("sendBtn").addEventListener("click", sendEmail);
