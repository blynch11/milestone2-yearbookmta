function sendMail(contactForm) {
    emailjs.send("service_w1cd9y7","template_gkz3d2p", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response){
            alert('Great! We\'ll be in touch soon');
            window.location.replace("/");
            console.log(response)

        },
        function(error){
            alert('Oops! Somethings wrong!');
        });
        return false;
}   