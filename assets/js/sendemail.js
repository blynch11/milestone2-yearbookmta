function sendMail(contactForm) {
    emailjs.send("service_7x14q8s","template_65f2opj", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response){
            console.log("Success", response);
        },
        function(error){
            console.log("Failed", error);
        });
        return false;
}