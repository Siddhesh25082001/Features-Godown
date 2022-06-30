function sendMail() {
    let mail_to = document.getElementById('mail_to').value;
    let subject = document.getElementById('subject').value;
    let mail_body = document.getElementById('mail_body').value;
    Email.send({
        Host: "smtp.elasticemail.com",
        Port:2525,
        Username : "shettyrohit268@gmail.com",
        Password : "961CCBA491B80A118101899A82CBD6217988",
        To : `${mail_to}`,
        From : "shettyrohit268@gmail.com",
        Subject : `${subject}`,
        Body : `${mail_body}`,
        })
        .then(
            message => {
                if(message == "OK") {
                    console.log(message)
                    alert("Mail Sent SuccessFully")
                }
                else{
                    console.log(message)
                    alert("Error ",message)
                }
            }
        )
        .catch(err => {
            alert("Error " + err)
    });	
}