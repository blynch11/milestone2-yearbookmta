function sendMail(contactForm) {
    emailjs.send("service_7x14q8s","template_65f2opj", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response){
            alert('Great! We\'ll be in touch soon');
            window.location.replace("/");

        },
        function(error){
            alert('Oops! Somethings wrong!');
        });
        return false;
}