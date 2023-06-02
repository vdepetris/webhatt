var contenido = [
  {
      texto: "Contenido 1",
      imagen: "logo.jpg",
      parrafo: "Este es el párrafo 1"
  },
  {
      texto: "Contenido 2",
      imagen: "logo.jpg",
      parrafo: "Este es el párrafo 2"
  },
  {
      texto: "Contenido 3",
      imagen: "logo.jpg",
      parrafo: "Este es el párrafo 3"
  }
];
var currentIndex = 0;

function cambiarContenido(direccion) {
  if (direccion === "izquierda") {
      currentIndex = (currentIndex - 1 + contenido.length) % contenido.length;
  } else if (direccion === "derecha") {
      currentIndex = (currentIndex + 1) % contenido.length;
  }

  var div = document.getElementById("all-content-slider");
  div.style.opacity = 0;

  setTimeout(function() {
      div.innerHTML = `
          <h2>${contenido[currentIndex].texto}</h2>
          <img src="${contenido[currentIndex].imagen}" alt="Imagen"><br>
          <a href="#">Ver Mas</a>
      `;

      div.style.opacity = 1;
  }, 300);
}