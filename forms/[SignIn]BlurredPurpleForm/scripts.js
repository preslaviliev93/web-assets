const UsernameField = document.getElementById("username");
const PasswordField = document.getElementById("password");

function handlePlaceholder(div_element){
    const placeholder = div_element.placeholder;

    div_element.addEventListener("focus", function(){
            this.placeholder = "";
    });

    div_element.addEventListener("blur", function(){
        this.placeholder = placeholder;
    });
}

const formErrorsDiv = document.querySelector(".form-errors");

function toggleFormErrors() {
    const errorItems = formErrorsDiv.querySelectorAll("ul > li");
    let hasErrors = false;

    errorItems.forEach(item => {
        if (item.textContent.trim() !== "") { // Check if <li> has non-empty text
            hasErrors = true;
        }
    });

    if (hasErrors) {
        formErrorsDiv.style.display = "block"; // Show the div if there are errors
    } else {
        formErrorsDiv.style.display = "none"; // Hide the div if no errors
    }
}

handlePlaceholder(UsernameField);
handlePlaceholder(PasswordField);
toggleFormErrors();