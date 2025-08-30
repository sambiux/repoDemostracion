const saludo= document.querySelector(".saludo");


saludo.addEventListener("click", () =>{

    const Nombre= document.querySelector(".recibirNombre").value;
    const pers= document.querySelector(".nomPer");

    const persIngresada= document.createElement("p");
    persIngresada.textContent= Nombre;

    
    
    
    pers.appendChild(persIngresada)
   

    
});