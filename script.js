let especieSeleccionada = "Perro";

var clic = new Audio('audio/clic.mp3');

function iniciarSesion() {
    clic.currentTime = 0;
    clic.play();
    
    setTimeout(function() {
        window.location.assign('pantalla-principal.html');
    }, 500); 
}

function registrarAccion() {
    alert("Esta sección está en desarrollo.");
}

function agregarVacuna() {
    alert("Esta sección está en desarrollo.");
}

function agregarRutina() {
    alert("Esta sección está en desarrollo.");
}

function elegirEspecie(numeroEspecie, nombreEspecie) {
    clic.currentTime = 0;
    clic.play();
    
    especieSeleccionada = nombreEspecie;
    console.log("Especie seleccionada actual: " + especieSeleccionada);
    
    let tarjetasEspecie = document.querySelectorAll(".selector-especie .especie");
    for (let i = 0; i < tarjetasEspecie.length; i++) {
        tarjetasEspecie[i].classList.remove("activo");
    }
    
    document.getElementById('especie-' + numeroEspecie).classList.add('activo');
}

function aceptarMascota() {
    clic.currentTime = 0;
    clic.play();
    
    alert("¡Mascota registrada exitosamente en VetCare!");
    
    setTimeout(function() {
        window.location.assign('pantalla-principal.html');
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    
    let tareasCheckbox = document.querySelectorAll(".tarea input[type='checkbox']");
    for (let i = 0; i < tareasCheckbox.length; i++) {
        let checkbox = tareasCheckbox[i];
        let labelElement = checkbox.parentElement;
        
        if (checkbox.checked == true) {
            labelElement.style.opacity = "0.5";
        }

        checkbox.addEventListener("change", function(evento) {
            clic.currentTime = 0;
            clic.play();

            if (evento.target.checked == true) {
                labelElement.style.opacity = "0.5";
            } else {
                labelElement.style.opacity = "1";
            }
        });
    }

    let listaMascotas = document.querySelectorAll(".zona-mascotas .mascota:not(.añadir)");
    for (let i = 0; i < listaMascotas.length; i++) {
        let mascota = listaMascotas[i];
        
        mascota.addEventListener("click", function() {
            clic.currentTime = 0;
            clic.play();
            for (let j = 0; j < listaMascotas.length; j++) {
                listaMascotas[j].classList.remove("activa");
            }
            mascota.classList.add("activa");
            let nombreMascota = mascota.querySelector("span").textContent;
            console.log("Mascota activa: " + nombreMascota);
        });
    }
});