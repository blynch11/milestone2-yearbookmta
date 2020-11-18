function sendMail(contactForm){
    emailjs.send("service_i3na386" ,"contact_form" , {
        "user_name": contactForm.name.value,
        "user_email": contactForm.emailaddress.value,
        "message": contactForm.enquiry.value
    })
    .then(
        function(response){
            console.log("thanks!", response);
        },
        function(error){
            console.log("Failed", error);
        });
   return false; 
}