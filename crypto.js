//Criptografia
function criptografarTexto() {
  let textoCapturado = document.getElementById("input-texto").value;

  let arrayTexto = textoCapturado.split("");
  let textoCriptografado;

  for (var i = 0; i < arrayTexto.length; i++) {
    if (arrayTexto[i] == "a") {
      arrayTexto[i] = "ai";
    }
    if (arrayTexto[i] == "e") {
      arrayTexto[i] = "enter";
    }
    if (arrayTexto[i] == "i") {
      arrayTexto[i] = "imes";
    }
    if (arrayTexto[i] == "o") {
      arrayTexto[i] = "ober";
    }
    if (arrayTexto[i] == "u") {
      arrayTexto[i] = "ufat";
    }
  }

  textoCriptografado = arrayTexto.join("");

  let exibeCripto = document.getElementById("msg");

  exibeCripto.value = textoCriptografado;
}

//evento de click do botão criptografar
let btnCripto = document.getElementById("btn-cripto");

btnCripto.addEventListener("click", function (e) {
  e.preventDefault();

  criptografarTexto();
});

/******** Tratamendo de Descriptografia *********/
function converteTexto(textoCapturado) {
  return textoCapturado
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("ims", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  /*
     return textoCapturado.replace(/ai/g,'a').replace(/enter/g,'e').replace(/ims/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');*/
}

/* evento de click do botão descriptografar */
let btnDescriptografar = document.getElementById("btn-descripto");

btnDescriptografar.addEventListener("click", function (e) {
  e.preventDefault();

  let textoCapturado = document.getElementById("input-texto").value;

  let exibeDesCripto = document.getElementById("msg");
  //console.log(exibeDesCripto)
  exibeDesCripto.value = converteTexto(textoCapturado);
});

/*****  função copiar ******/
var btnCopy = document.getElementById("btn-copy");

btnCopy.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("msg").select();
  document.execCommand("copy");
});
