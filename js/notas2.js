const NELEMENTOS = 10;
//crear un array de nombres

let nombres = ['Juan', 'Maria', 'Pedro', 'Luis', 'Ana', 'Carlos', 'Laura', 'Diego', 'Mateo', 'Mario'];

let apellidos = ['Gomez', 'Rodriguez', 'Fernandez ', 'Lopez', 'Martinez' ,'Perez', 'Villarroel', 'Garcia ', 'Espinoza ', 'Moreno '];

let nomape=[];

function generarNomape(){
    let nomal, apeal;

    for (let i = 0; i < NELEMENTOS; i++){
        nomal = nombres[Math.floor(Math.random()*nombres.length)];
        apeal = apellidos[Math.floor(Math.random()* apellidos.length)];
        nomape.push(nomal + " " + apeal);
    }
}
function imprimir(){
    nomape.forEach(persona=> {
        console.log(persona);
    }
    )
}

generarNomape();
imprimir();