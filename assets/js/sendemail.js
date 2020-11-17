$(document).ready(function(){sendMail(contactForm) {
    emailjs.send("gmail", "brendan", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "your_message": contactForm.message.value
    })
     .then(alert("Thank you, your message has been received and we will get back to you soon!"));

  $("#contact-form").text();
};