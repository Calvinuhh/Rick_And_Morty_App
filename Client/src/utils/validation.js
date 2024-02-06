export default function validation(inputs) {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=\w*\d)\S{6,10}$/;
  const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

  if (!regexEmail.test(inputs.username)) {
    errors.username = "Debe ser correo electronico";
  }
  if (!inputs.username) {
    errors.username = "El usuario no puede estar vacio";
  }
  if (inputs.username.length > 35) {
    errors.username = "Debe tener menos de 35 caracteres";
  }

  if (!regexNumber.test(inputs.password)) {
    errors.password = "La contrasena debe tener un numero";
  }
  if (!regexPassword.test(inputs.password)) {
    errors.password = "Debe tener entre 6 y 10 caracteres";
  }
  return errors;
}
