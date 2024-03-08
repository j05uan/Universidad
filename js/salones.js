
const botonesSalones = async () => {
    const contenedorSalones = document.getElementById('OpcionesSalones');
    contenedorSalones.innerHTML = `
      <form>
          <button class="botonsSalones" id="botoncrearSalon" type="button" onclick="formularioCrearSalon()">Crear Salones</button>
          <button class="botonsSalones" id="botonmodificarSalon" type="button" onclick="modificarSalon()">Modificar Salones</button>
          <button class="botonsSalones" id="botonmostrarListado" type="button" onclick="mostrarListadoSalones()">Ver Listado de Salones</button>
          <div id="saloness"></div>
          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
      </form>`;

    stylesContenedorNuevo(contenedorSalones);
    limpiarpantalla();
}

const formularioCrearSalon = async () => {
  const boton1 = document.getElementById('botoncrearSalon');
  const boton2 = document.getElementById('botonmodificarSalon');
  const boton3 = document.getElementById('botonmostrarListado');
  const contenedorSalones = document.getElementById('salones');
  contenedorSalones.innerHTML = `
    <form id="MenuCrearSalon">
      <h3>Menu Crear Salones</h3>
      <label for="numeroIdentificacionSalon">Número de Identificación del Salón:</label>
      <input type="text" id="numeroIdentificacionSalon" required>
      <label for="capacidadSalon">Capacidad de Alumnos:</label>
      <input type="number" id="capacidadSalon" required>
      <label for="edificioSalon">Edificio:</label>
      <input type="text" id="edificioSalon" required>
      <label for="pisoSalon">Piso:</label>
      <input type="number" id="pisoSalon" required>
      <button id="atras" class="atras" onclick="botonesSalones()">Atrás</button>
    </form>
`;
  const atras = document.getElementById('atras');
  atras.style.display = 'none';
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';
  await crearSalones();
}

const crearSalones = async () => {
  const numeroIdentificacionInput = document.getElementById('numeroIdentificacionSalon');
  const capacidadInput = document.getElementById('capacidadSalon');
  const edificioInput = document.getElementById('edificioSalon');
  const pisoInput = document.getElementById('pisoSalon');

  const numeroIdentificacion = numeroIdentificacionInput.value;
  const capacidad = capacidadInput.value;
  const edificio = edificioInput.value;
  const piso = pisoInput.value;

  const nuevoSalon = {
      id: listaSalones.length + 1,
      numero_identificacion: numeroIdentificacion,
      capacidad_alumnos: capacidad,
      edificio: edificio,
      piso: piso
  };

  // Lógica para guardar el salón (implementar según la aplicación)

  numeroIdentificacionInput.value = '';
  capacidadInput.value = '';
  edificioInput.value = '';
  pisoInput.value = '';

  alert('Salón creado con éxito!');

  return nuevoSalon;
}

const modificarSalon = async () => {
  const boton1 = document.getElementById('botoncrearSalon');
  const boton2 = document.getElementById('botonmodificarSalon');
  const boton3 = document.getElementById('botonmostrarListado');
  const contenedorSalones = document.getElementById('crearSalon');
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';

  verificarSalones();
  if (Estado === 'Encontrado') {
      contenedorSalones.innerHTML = `
    <form id="MenuModificarSalon">
      <h3>Menu Modificar Salones</h3>
      <h3>Seleccione el item que desea modificar</h3>
      <button for="numeroIdentificacionSalon" onclick="modificarNumeroIdentificacionSalon()">Número de Identificación del Salón:</button>
      <button for="capacidadSalon" onclick="modificarCapacidadSalon()">Capacidad de Alumnos:</button>
      <button for="edificioSalon" onclick="modificarEdificioSalon()">Edificio:</button>
      <button for="pisoSalon" onclick="modificarPisoSalon()">Piso:</button>
      <button id="atras" class="atras" onclick="botonesSalones()">Atrás</button>
    </form>`;
  }
}

const verificarSalones = async () => {
  const Estado = '';
  const numeroIdentificacion = document.getElementById('numeroIdentificacionSalon');
  const contenedorSalones = document.getElementById('crearSalon');
  contenedorSalones.innerHTML = `
    <form id="MenuModificarSalon">
      <h3>Menu Modificar Salón</h3>
      <label for="numeroIdentificacionSalon">Número de Identificación del Salón:</label>
      <input type="text" id="numeroIdentificacionSalon" required>
    </form>
`;
  for (const salon of listaSalones) {
      if (salon.numero_identificacion === numeroIdentificacion) {
          alert('Salón Encontrado!');
          Estado = 'Encontrado';
      } else {
          alert('No se encontró el salón!');
      }
  }

  return [Estado, Salones];
}

const modificarNumeroIdentificacionSalon = () => {
  const contenedorSalones = document.getElementById('Salones');
  contenedorSalones.innerHTML = `
  <form id="MenuModificarSalon">
  <h3>Menu Modificar Número de Identificación</h3>
  <label for="numeroIdentificacionSalon">Número de Identificación del Salón:</label>
  <input type="text" id="numeroIdentificacionSalon" required>
  <button type="button" onclick="guardarModificacionSalon()">Guardar Modificación Salón</button>
  </form>`;
}

const modificarCapacidadSalon = () => {
  const contenedorSalones = document.getElementById('crearSalon');
  contenedorSalones.innerHTML = `
  <form id="MenuModificarSalon">
  <h3>Menu Modificar Capacidad de Alumnos</h3>
  <label for="capacidadSalon">Capacidad de Alumnos:</label>
  <input type="number" id="capacidadSalon" required>
  <button type="button" onclick="guardarModificacionSalon()">Guardar Modificación Salón</button>
  </form>`;
}

const modificarEdificioSalon = () => {
  const contenedorSalones = document.getElementById('crearSalon');
  contenedorSalones.innerHTML = `
  <form id="MenuModificarSalon">
  <h3>Menu Modificar Edificio</h3>
  <label for="edificioSalon">Edificio:</label>
  <input type="text" id="edificioSalon" required>
  <button type="button" onclick="guardarModificacionSalon()">Guardar Modificación Salón</button>
  </form>`;
}

const modificarPisoSalon = () => {
  const contenedorSalones = document.getElementById('crearSalon');
  contenedorSalones.innerHTML = `
  <form id="MenuModificarSalon">
  <h3>Menu Modificar Piso</h3>
  <label for="pisoSalon">Piso:</label>
  <input type="number" id="pisoSalon" required>
  <button type="button" onclick="guardarModificacionSalon()">Guardar Modificación Salón</button>
  </form>`;
}

const guardarModificacionSalon = () => {
  // Lógica para guardar la modificación del salón (implementar según la aplicación)
  alert('Modificación del salón guardada con éxito!');
}

// Debes tener en cuenta que la lógica para guardar, cargar y manipular la lista de salones
// (listaSalones) debe estar implementada en tu aplicación.

// Asegúrate también de que los eventos de los botones y la carga de datos estén correctamente manejados
// en tu aplicación.

// Recuerda adaptar los identificadores de los elementos HTML y las variables según la estructura de tu aplicación.

