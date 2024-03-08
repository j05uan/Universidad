
const botonesTarifas = async () => {
    const contenedorTarifas = document.getElementById('OpcionesTarifas');
    contenedorTarifas.innerHTML = `
      <form>
          <button class="botonsTarifas" id="botoncrearTarifa" type="button" onclick="formularioCrearTarifa()">Crear Tarifas</button>
          <button class="botonsTarifas" id="botonmodificarTarifa" type="button" onclick="modificarTarifa()">Modificar Tarifas</button>
          <button class="botonsTarifas" id="botonmostrarListado" type="button" onclick="mostrarListadoTarifas()">Ver Listado de Tarifas</button>
          <div id="tarifass"></div>
          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
      </form>`;

    stylesContenedorNuevo(contenedorTarifas);
    limpiarpantalla();
}

const formularioCrearTarifa = async () => {
  const boton1 = document.getElementById('botoncrearTarifa');
  const boton2 = document.getElementById('botonmodificarTarifa');
  const boton3 = document.getElementById('botonmostrarListado');
  const contenedorTarifas = document.getElementById('tarifass');
  contenedorTarifas.innerHTML = `
    <form id="MenuCrearTarifa">
      <h3>Menu Crear Tarifas</h3>
      <label for="costoCredito">Costo por Crédito:</label>
      <input type="number" id="costoCredito" required>
      <label for="periodoId">ID del Período:</label>
      <input type="number" id="periodoId" required>
      <label for="programaId">ID del Programa:</label>
      <input type="number" id="programaId" required>
      <button id="atras" class="atras" onclick="botonesTarifas()">atras</button>
    </form>
`;
  const atras = document.getElementById('atras');
  atras.style.display = 'none';
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';
  await crearTarifas();
}

const crearTarifas = async () => {
  const costoInput = document.getElementById('costoCredito');
  const periodoInput = document.getElementById('periodoId');
  const programaInput = document.getElementById('programaId');

  const costoCredito = costoInput.value;
  const periodoId = periodoInput.value;
  const programaId = programaInput.value;

  const nuevaTarifa = {
      id: listaTarifas.length + 1,
      costo_credito: costoCredito,
      periodo_id: periodoId,
      programa_id: programaId,
  };

  await guardarTarifa(nuevaTarifa);
  await loadEstudiantes();

  costoInput.value = '';
  periodoInput.value = '';
  programaInput.value = '';

  alert('Tarifa creada con éxito!');

  return nuevaTarifa;
}

const modificarTarifa = async () => {
  const boton1 = document.getElementById('botoncrearTarifa');
  const boton2 = document.getElementById('botonmodificarTarifa');
  const boton3 = document.getElementById('botonmostrarListado');
  const contenedorTarifas = document.getElementById('crearTarifa');
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';

  verificarTarifas();
  if (Estado === 'Encontrado') {
      contenedorTarifas.innerHTML = `
    <form id="MenuModificarTarifa">
      <h3>Menu Modificar Tarifas</h3>
      <h3>Seleccione el ítem que desea modificar</h3>
      <button for="costoCredito" onclick="modificarCostoCredito()">Costo por Crédito:</button>
      <button for="periodoId" onclick="modificarPeriodoId()">ID del Período:</button>
      <button for="programaId" onclick="modificarProgramaId()">ID del Programa:</button>
      <button id="atras" class="atras" onclick="botonesTarifas()">atras</button>
    </form>`;
  }
}

const verificarTarifas = async () => {
  const Estado = '';
  const periodoId = document.getElementById('periodoId').value;
  const programaId = document.getElementById('programaId').value;

  for (const tarifa of listaTarifas) {
      if (tarifa.periodo_id === periodoId && tarifa.programa_id === programaId) {
          alert('Tarifa Encontrada!');
          Estado = 'Encontrado';
          break;
      }
  }

  if (Estado !== 'Encontrado') {
      alert('No se encontró la Tarifa!');
  }

  return Estado;
}

const modificarCostoCredito = () => {
  const contenedorTarifas = document.getElementById('Tarifas');
  contenedorTarifas.innerHTML = `
  <form id="MenuModificarTarifa">
  <h3>Menu modificar Costo por Crédito</h3>
  <label for="costoCredito">Costo por Crédito:</label>
  <input type="number" id="costoCredito" required>
  <button type="button" onclick="GuardarModificionTarifa()">Guardar Modificación Tarifa</button>
  <button id="atras" class="atras" onclick="modificarTarifa()">atras</button>
  </form>`;
}

const modificarPeriodoId = () => {
  const contenedorTarifas = document.getElementById('Tarifas');
  contenedorTarifas.innerHTML = `
  <form id="MenuModificarTarifa">
  <h3>Menu modificar ID del Período</h3>
  <label for="periodoId">ID del Período:</label>
  <input type="number" id="periodoId" required>
  <button type="button" onclick="GuardarModificionTarifa()">Guardar Modificación Tarifa</button>
  <button id="atras" class="atras" onclick="modificarTarifa()">atras</button>
  </form>`;
}

const modificarProgramaId = () => {
  const contenedorTarifas = document.getElementById('Tarifas');
  contenedorTarifas.innerHTML = `
  <form id="MenuModificarTarifa">
  <h3>Menu modificar ID del Programa</h3>
  <label for="programaId">ID del Programa:</label>
  <input type="number" id="programaId" required>
  <button type="button" onclick="GuardarModificionTarifa()">Guardar Modificación Tarifa</button>
  <button id="atras" class="atras" onclick="modificarTarifa()">atras</button>
  </form>`;
}

