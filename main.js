const SUCCESS_CLASS_NAME = "success";
const ERROR_CLASS_NAME = "error";
const ENTER_CHAR_CODE = 13;

function main(user) {
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const message = document.getElementById("message");

    function submit() {
        const value = input.value;
        const isValid = isEmailValid(value);
        console.log(name);
        message.className = isValid ? SUCCESS_CLASS_NAME : ERROR_CLASS_NAME;
        message.innerHTML = isValid ? user + " your Email is OK" : user + " your Email is WRONG";
    }

    button.addEventListener("click", function(event) {
        submit();
    });

    input.addEventListener("keypress", function(event) {
        if (event.charCode === ENTER_CHAR_CODE) {
            submit();
        }
    });
}

window.onload = function() {
    var name = getInput();
    main(name);
};
