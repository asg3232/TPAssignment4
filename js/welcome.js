/* Code for the slider adjusting the number of pain the patient is feeling */
let slider = document.getElementById("health")
let output = document.getElementById("healthValue")

output.innerHTML = slider.value;

slider.oninput = function () { output.innerHTML = this.value; };

/* Get the current date */
const today = new Date();

/* Formatting the date */
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

/* Displaying the date */
document.getElementById('date').textContent = formattedDate;

const inputs = [
    { id: "firstName", cookieName: "firstName" },
    { id: "middleInitial", cookieName: "middleInitial" },
    { id: "lastName", cookieName: "lastName" },
    { id: "email", cookieName: "email" },
    { id: "phoneNumber", cookieName: "phoneNumber" },
    { id: "dateOfBirth", cookieName: "dateOfBirth" },
    { id: "ssn", cookieName: "ssn" },
    { id: "address", cookieName: "address" },
    { id: "city", cookieName: "city" },
    { id: "zip", cookieName: "zip" },
    { id: "userID", cookieName: "userID" },
]

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

/* Greets user with their name + welcome message if the cookie is set */
var firstName = getCookie("firstName");

if (firstName) {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!</br>";
    document.getElementById("welcome2").innerHTML = "<a href='#' id='newUser'>Not " + firstName + "? Click here to start a new form. </a>";
    document.getElementById("newUser").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}