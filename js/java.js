// Información detallada de carreras según la presentación
const infoCarreras = {
  frontend: {
    titulo: "Perfil: Frontend",
    herramientas: "Herramientas clave: React, JavaScript, HTML5, CSS3 y diseño de experiencias visuales e interfaces en navegadores."
  },
  backend: {
    titulo: "Perfil: Backend",
    herramientas: "Herramientas clave: Python, Node.js, SQL, Java y C#. Enfocado en la construcción de APIs y lógica de servidores."
  },
  ciberseguridad: {
    titulo: "Perfil: Ciberseguridad y Redes",
    herramientas: "Herramientas clave: Linux, administración de redes, análisis de riesgos y protección integral de sistemas."
  },
  datos: {
    titulo: "Perfil: Ciencia de Datos e Inteligencia Artificial",
    herramientas: "Herramientas clave: Python, R, aprendizaje automático (Machine Learning) y modelos para el descubrimiento de patrones."
  }
};

// Función para interactuar con las tarjetas de carreras
function mostrarInfo(area) {
  const panel = document.getElementById("detalle-carrera");
  const titulo = document.getElementById("titulo-carrera");
  const desc = document.getElementById("desc-carrera");

  if (infoCarreras[area]) {
    titulo.textContent = infoCarreras[area].titulo;
    desc.textContent = infoCarreras[area].herramientas;
    panel.classList.remove("hidden");
    
    // Desplazamiento suave al panel
    panel.scrollIntoView({ behavior: 'smooth' });
  }
}