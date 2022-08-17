//Funciones

//Funcion para encriptar las palabras

function palabraEncriptada() {
  let text = document.getElementById("txt").value;
  if (!/[A-Z]/g.test(text)) {
    document.getElementById("texto").innerHTML = text.replace(
      /[aeiou]/g,
      (toReplace) => encriptado[toReplace]
    );
  } else {
    alert("El texto solo deben ser minúsculas!");
  }
}

//Funcion para desencriptar las palabras

function palabraDesencriptada() {
  let text = document.getElementById("txt").value;
  document.getElementById("texto").innerText = text.replace(
    /enter|imes|ai|ober|ufat/g,
    (toReplace) => desencriptado[toReplace]
  );
}

// funcion para copiar las palabras

function copiar() {
  txt.select();
  document.execCommand("copy"); //execCommand obsoleto pero no hay alternativa actualmente
}

const encriptado = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
const desencriptado = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };
