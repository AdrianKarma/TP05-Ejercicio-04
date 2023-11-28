function actualizarReloj() {
  const fechaDiv = document.getElementById("fecha");
  const horaDiv = document.getElementById("hora");
  const ahora = new Date();
  const opcionesFecha = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fecha = ahora.toLocaleDateString("es-ES", opcionesFecha);
  const opcionesHora = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const hora = ahora.toLocaleTimeString("en-US", opcionesHora);

  fechaDiv.innerHTML = fecha;
  horaDiv.innerHTML = `[${hora}]`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
