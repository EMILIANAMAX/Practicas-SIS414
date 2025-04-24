const form = document.getElementById('formulario-usuario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const edad = document.getElementById('edad');
const lista = document.getElementById('lista-usuarios');
const error = document.getElementById('error');
const total = document.getElementById('total-usuarios');

let usuarios = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!nombre.value || !email.value || !edad.value) {
    error.textContent = 'Todos los campos son obligatorios';
    return;
  }
  error.textContent = '';
  const usuario = {
    nombre: nombre.value,
    email: email.value,
    edad: edad.value,
  };
  usuarios.push(usuario);
  actualizarLista();
  form.reset();
});

function actualizarLista() {
  lista.innerHTML = '';
  usuarios.forEach((user, index) => {
    const li = document.createElement('li');
    li.textContent = `${user.nombre} (${user.email}, ${user.edad} años)`;
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.className = 'eliminar';
    btn.onclick = () => {
      usuarios.splice(index, 1);
      actualizarLista();
    };
    li.appendChild(btn);
    lista.appendChild(li);
  });
  total.textContent = `Total: ${usuarios.length}`;
}
