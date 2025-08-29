const saludo= document.querySelector(".saludo");


saludo.addEventListener("click", () =>{

    const Nombre= document.querySelector(".recibirNombre").value;
    alert(`Hola como estas ${Nombre}`)
});