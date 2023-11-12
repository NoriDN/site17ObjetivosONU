const email = document.getElementById("exampleInputEmail1");
const name = document.getElementById("Name");

var emails = [];
var nomes = [];

function submitEmail() {
    var userEmail = email.value;
    var userName = name.value;


    if (userEmail && userName) {
        emails.push(userEmail);
        nomes.push(userName);

        console.log("Emails:", emails);
        console.log("Names:", nomes);


        email.value = "";
        name.value = "";
    } else {
        console.log("Please enter both email and name.");
    }
}