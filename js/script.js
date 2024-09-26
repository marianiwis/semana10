// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  // va a filtrar los elementos de tipo string
  //la función filtra el array strangeArray para conservar solo los elementos cuyo tipo sea string, utilizando el operador typeof
  const filteredArray = strangeArray.filter((element) => typeof element === "string");

  // se ordena el array alfabéticamente usando la función sort()
  //aca cambie unas cositas porque sort no puede no ordenar las letras mayúsculas y minúsculas como quiero
  //o sea alfabeticamente
  const sortedArray = filteredArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  
  // mostrar el array que queda (resultante) en la lista
  //esta función toma el array filtrado y ordenado, y lo recorre para agregar cada elemento a la lista no ordenada (ul) del HTML
  showList(sortedArray);
});
