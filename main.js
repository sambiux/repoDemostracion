const saludo= document.querySelector(".saludo");



saludo.addEventListener("click", () =>{

    const Nombre= document.querySelector(".recibirNombre").value;
    const apellido= document.querySelector(".recibirApellido").value;
    alert(`Hola como estas ${Nombre} ${apellido}`)
});