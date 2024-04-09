let users = [];
function sendForm(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const password2 = event.target.password2.value;
  const app = document.getElementById("app");
  if (password !== password2) {
    const error = document.createElement("p");
    error.textContent = "Las contraseñas no coinciden";
    app.appendChild(error);
    return;
  }
  const newUser = {
    Nombre: name,
    Apellido: lastName,
    Email: email,
    Contraseña: password,
    RepetirContraseña: password2
  };

  users.push(newUser);
  displayUsers();
  event.target.reset();
}
function displayUsers() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  users.forEach((user, index) => {
    const title = document.createElement("h1");
    title.innerHTML = `<h1 class="text-2xl title">Datos del usuario ${index + 1}</h1>`;
    app.appendChild(title);

    Object.keys(user).forEach(key => {
      const container = document.createElement("div");
      container.innerHTML = `
        <div class="container__item"> 
          <span class="item__label">${key}</span>
          <span class="item__value">${user[key]}</span>
        </div>`;
      app.appendChild(container);
    });
  });
}

displayUsers();