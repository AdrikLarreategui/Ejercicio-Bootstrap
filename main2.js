// Mostrar usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");
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

     //Agregar un evento al botón "Limpiar localStorage"     
     let clearLocalStorageButton = document.getElementById("clearLocalStorage");     
    clearLocalStorageButton.addEventListener("click", function () {         
    // Limpiar el localStorage         
    localStorage.clear();     
    });
