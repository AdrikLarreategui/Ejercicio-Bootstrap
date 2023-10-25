
  document.getElementById("user-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const contrasena1 = document.getElementById("contrasena1").value;
        const contrasena2 = document.getElementById("contrasena2").value;

        // Validaciones
        if (nombre === "" || correo === "" || contrasena1 === "" || contrasena2 === "") {
            showAlert("Por favor, rellena todos los campos.", "danger");
        } else if (!isValidEmail(correo)) {
            showAlert("Por favor, introduce un correo válido.", "danger");
        } else if (contrasena1 !== contrasena2) {
            showAlert("Las contraseñas no coinciden.", "danger");
        } else if (contrasena1.length < 6) {
            showAlert("La contraseña debe tener al menos 6 caracteres.", "danger");
        } else {
            // Almacenar el usuario en localStorage
            const user = { nombre, correo };
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            showAlert("Usuario creado correctamente.", "success");
            clearForm();
        }
    });

    // Función para mostrar alertas
    function showAlert(message, type) {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type} mt-3`;
        alert.textContent = message;
        document.getElementById("crear-usuario").appendChild(alert);

        setTimeout(function () {
            alert.remove();
        }, 3000);
    }

    // Función para limpiar el formulario
    function clearForm() {
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena1").value = "";
        document.getElementById("contrasena2").value = "";
    }

    // Función para validar el formato del correo
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Mostrar usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("user-list");
    users.forEach(function (user) {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-3";
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.nombre}</h5>
                    <p class="card-text">${user.correo}</p>
                </div>
            </div>
        `;
        userList.appendChild(card);
    });
