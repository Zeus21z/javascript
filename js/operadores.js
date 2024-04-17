/*let a = 10;
let b = 5;

console.log(a);
a = 1;
a = a + b;

console.log("a+b= :".a);
a = 11;
a+=b;
console.log("a+=b :"+a);
a++;
console.log("a++ :"+a);
a--;
console.log("a-- :"+a);

if ((a%2)==0)
    console.log("a es PAR");
else 
    console.log("a es IMPAR");
console.log(a+b+Number("5"));
*/

// Función para generar un número aleatorio entre un rango dado
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Array para almacenar los datos
  let estudiantes = [];
  
  // Generar los datos para 10 estudiantes
  for (let i = 0; i < 10; i++) {
    let nombre = "Estudiante " + (i + 1);
    let nota = getRandomInt(20, 100);
    estudiantes.push({ nombre: nombre, nota: nota });
  }
  
  // Mostrar los datos de los estudiantes
  console.log("Datos de los estudiantes:");
  console.log(estudiantes);
  
  // Calcular la nota mayor, la menor y el promedio
  let notaMayor = estudiantes[0].nota;
  let notaMenor = estudiantes[0].nota;
  let sumaNotas = estudiantes[0].nota;
  
  for (let i = 1; i < estudiantes.length; i++) {
    let nota = estudiantes[i].nota;
    sumaNotas += nota;
  
    if (nota > notaMayor) {
      notaMayor = nota;
    }
  
    if (nota < notaMenor) {
      notaMenor = nota;
    }
  }
  
  let promedio = sumaNotas / estudiantes.length;
  
  // Mostrar los resultados
  console.log("\nResultados:");
  console.log("Nota mayor:", notaMayor);
  console.log("Nota menor:", notaMenor);
  console.log("Promedio:", promedio.toFixed(2));
  