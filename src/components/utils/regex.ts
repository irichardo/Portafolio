const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex = /^[a-zA-Z,]{3,100}$/;
const messageRegex = /^[a-zA-Z,.\s]{10,}$/;
// const resmessage = {emailInvalid: 'Agrega un correo invalido', nameInvalid:'Agrega un nombre Valido, no uses caracteres especiales',textInvalid:'Agrega un texto valido.' }

export const Verification = (email: string, message: string, from: string) => {
  if (!correoRegex.test(email)) return "Agrega un correo válido.";
  if (!nameRegex.test(from)) return "Agrega un nombre válido.";
  if (!messageRegex.test(message)) return "Agrega un texto valido.";
  else {
    return true;
  }
};
