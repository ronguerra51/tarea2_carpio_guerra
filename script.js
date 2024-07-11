document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dynamicForm");
    const inputContainer = document.getElementById("inputContainer");
    const addButton = document.getElementById("addButton");
    const removeButton = document.getElementById("removeButton");
    const message = document.getElementById("message");

    addButton.addEventListener("click", function() {
        const newInputGroup = document.createElement("div");
        newInputGroup.classList.add("input-group");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "inputField";
        newInput.classList.add("input-field");
        newInput.placeholder = "Enter text";
        newInputGroup.appendChild(newInput);
        inputContainer.appendChild(newInputGroup);
    });

    removeButton.addEventListener("click", function() {
        const inputGroups = inputContainer.getElementsByClassName("input-group");
        if (inputGroups.length > 1) {
            inputContainer.removeChild(inputGroups[inputGroups.length - 1]);
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let allValid = true;
        const inputFields = inputContainer.getElementsByClassName("input-field");
        message.textContent = "";
        
        for (let input of inputFields) {
            if (input.value.trim() === "") {
                input.classList.add("error");
                input.focus();
                allValid = false;
                break;
            } else {
                input.classList.remove("error");
            }
        }

        if (allValid) {
            message.textContent = "Formulario enviado correctamente!";
            message.style.color = "green";
            alert("Formulario enviado correctamente!");
        } else {
            message.textContent = "Por favor, completa todos los campos.";
            message.style.color = "red";
            alert("Por favor, completa todos los campos.");
        }
    });
});
