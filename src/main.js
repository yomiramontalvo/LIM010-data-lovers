/* Manejo del DOM */
const ingresar = document.getElementById("ingresar");
const escribe = document.getElementById("escribe");
ingresar.addEventListener('click',() =>{
    const escribe= document.getElementById("escribe")
    if (escribe == "LABORATORIA"){
        document.getElementById("error").innerHTML="Bienvenido pudiste ingresar sin problemas" } });


/*function dar_click(){
    const n = llamar.value;
    alert("Hola " + n +" ! Haz clic en inicio");
  }

  const verificar = document.getElementById("verificar");
let intentos = 0;
verificar.addEventListener('click', () => {
  const contraseña = document.getElementById("pass").value;
  if (contraseña == "LABORATORIA") {
    document.getElementById("pantalla1").classList.add("hide");
    document.getElementById("pantalla2").classList.remove("hide");
  }
  else {
    intentos = intentos + 1;
    document.getElementById("falla").innerHTML = "Ups! Contraseña incorrecta, intente otra vez";


    if (intentos == 3) {
      document.getElementById("falla").innerHTML = "Ya utilizaste todos tus intentos, en este momento no podrás ingresar";
      document.getElementById('verificar').disabled = true;
      document.getElementById("pass").disabled = true;
    }
  }
}); */