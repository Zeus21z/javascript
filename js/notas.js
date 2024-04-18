let notas = [
    {nombre: 'Juan', nota: 0},
    {nombre: 'Maria', nota: 0},
    {nombre: 'Pedro', nota: 0},
    {nombre: 'Mario', nota: 0},
    {nombre: 'Luis', nota: 0},
    {nombre: 'Fernando', nota: 0},
    {nombre: 'leticia', nota: 0},
    {nombre: 'Gladys', nota: 0},
    {nombre: 'Lizbeth', nota: 0},
    {nombre: 'Mordor', nota: 0},
];

function genRandomico($max, $min){
    return Math.floor(Math.random()*($max-$min+1));
}

function cargarNotas(){
    notas.forEach(nota =>{
        nota.nota=genRandomico(10,2);
    });

}



/*notas.forEach(nota=>{
    nota.nota=Math.floor(Math.random()*(10-2+1));
});
*/

//console.log("Numero random: " + genRandomico(10,2));

function impNotas(){
    notas.forEach(nota =>{
        let $clasificar;
        switch (nota.nota){
            case 2: case 3: case 4:
                $clasificar="Insuficiente"
                break;
            case 5: case 6:
                $clasificar="Suficiente"
                break;
            case 7: case 8:
                $clasificar="Bien"
                break;
            case 9:
                $clasificar="Notable"
            case 10:
                $clasificar="Sobresaliente"
                break;
            default:
                $clasificar="Fuera de rango";
        }
        console.log(nota.nombre + " - " + nota.nota + " : " + $clasificar + " /n");
    })
}
cargarNotas();
impNotas();

