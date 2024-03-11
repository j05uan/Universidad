const listaProgramas = [];

const loadProgramas = async () => {
    try {
        listaProgramas.length = 0;
        const respuesta = await fetch('http://localhost:3000/programas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar Programas. Estado: ' + respuesta.status);
        }
        const Programa = await respuesta.json();
        listaProgramas.push(...Programa);

    } catch (error) {
        console.error("Error al cargar Programa", error.message);
    }
}

const guardarPrograma = async (nuevoPrograma) => {
    try {

        const respuesta = await fetch('http://localhost:3000/programas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoPrograma),
        });

        if (!respuesta.ok) {
            throw new Error('Error al crear el programa. Estado: ' + respuesta.status);
        }
        const ProgramaCreado = await respuesta.json();


        console.log('Programa creado:', ProgramaCreado);

    } catch (error) {
        console.error("Error al cargar Programa", error.message);
    }
}

const mostrarListadoProgramas = async () => {
  await loadProgramas();
  const boton1 = document.getElementById('botoncrearPrograma');
  const boton2 = document.getElementById('botonmodificarPrograma');
  const boton3 = document.getElementById('mostrarListadoProgramas');
  const atras = document.getElementById('atras1');
    atras.style.display = 'none';
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';
  
  const listadoProgramas = document.getElementById('crearPrograma');
  listadoProgramas.style.display = 'flex';
  const ul = document.createElement("ul");
  
  for (const Programa of listaProgramas) {
      const li = document.createElement('li');
      li.textContent = `nombre: ${Programa.id}, nivel: ${Programa.nivel}`;
      ul.appendChild(li);
  }
  listadoProgramas.innerHTML = '';
  listadoProgramas.appendChild(ul);

  const volverButton = document.createElement('button');
  volverButton.textContent = 'Volver al Formulario';
  volverButton.addEventListener('click', botonesProgramas);
  listadoProgramas.appendChild(volverButton);
}

const botonesProgramas = async () => {

    const contenedor2 = document.getElementById('contenidoContenedor');
    contenedor2.innerHTML = `
      <form>
          <button class="botonsProgramas" id="botoncrearPrograma" type="button" onclick="formularioCrearPrograma()">Crear Programas</button>
          <button class="botonsProgramas" id="botonmodificarPrograma" type="button" onclick="()">Modificar Programas</button>
          <button class="botonsProgramas" id="mostrarListadoProgramas" type="button" onclick="mostrarListadoProgramas()">Ver Listado de Programas</button>
          <div id="crearPrograma"></div>
          <button id="atras1" class="atras" onclick="volverInicio()">atras</button>
          
      </form>
  `;
  stylesContenedorNuevo(contenedor2);
  
}

const formularioCrearPrograma = async () => {
  const boton1 = document.getElementById('botoncrearPrograma');
  const boton2 = document.getElementById('botonmodificarPrograma');
  const boton3 = document.getElementById('mostrarListadoProgramas');
  const atras = document.getElementById('atras1');
  const contenedorProgramas = document.getElementById('crearPrograma');
  contenedorProgramas.innerHTML = `
    <form id="MenuCrearPrograma">
      <h3>Menu Crear Programas</h3>
      <label for="nombrePrograma">Nombre del Programa:</label>
      <input type="text" id="nombrePrograma" required>
      <label for="nivelPrograma">Nivel del Programa:</label>
      <input type="text" id="nivelPrograma" required>
      <button id="atras" class="atras" onclick="botonesProgramas()">atras</button>
    </form>
`;

  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';
  atras.style.display = 'none';

  await crearProgramas();
}

const crearProgramas = async () => {
  const nombreInput = document.getElementById('nombrePrograma');
  const nivelInput = document.getElementById('nivelPrograma');

  const nombre = nombreInput.value;
  const nivel = nivelInput.value;

  const nuevoPrograma = {
      id: listaProgramas.length + 1,
      nombre: nombre,
      nivel: nivel
  }

  await guardar(nuevoPrograma);
  await loadProgramas();

  nombreInput.value = '';
  nivelInput.value = '';

  alert('Programa creado con éxito!');

  return nuevoPrograma;
}

const modificarPrograma = async () => {
  const boton1 = document.getElementById('botoncrearPrograma');
  const boton2 = document.getElementById('botonmodificarPrograma');
  const boton3 = document.getElementById('mostrarListadoProgramas');
  const contenedorProgramas = document.getElementById('crearEPrograma');
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';

  verificarProgramas();
  if (Estado === 'Encontrado') {
      contenedorProgramas.innerHTML = `
    <form id="MenuModificarEPrograma">
      <h3>Menu Modificar EProgramas</h3>
      <h3>Seleccione el item que desea modificar</h3>
      <button for="nombrePrograma" onclick="modificarNombreProgramas()">Nombre del Programa:</button>
      <button for="nivelPrograma" onclick="modificarNivelProgramas()">Nivel del Programa:</button>
      <button id="atras" class="atras" onclick="botonesProgramas()">atras</button>
    </form>
`;
  }
}

const verificarProgramas = async () => {
  const Estado = '';
  const nombre = document.getElementById('nombrePrograma').value;
  const nivel = document.getElementById('nivelPrograma').value;

  for (const programa of listaProgramas) {
      if (programa.nombre === nombre) {
          alert('Programa Encontrado!');
          Estado = 'Encontrado';
          break;
      }
  }

  if (Estado !== 'Encontrado') {
      alert('No se encontró el Programa!');
  }

  return Estado;
}

const modificarNombreProgramas = () => {
  const contenedorProgramas = document.getElementById('crearPrograma');
  contenedorProgramas.innerHTML = `
  <form id="MenuModificarPrograma">
  <h3>Menu modificar Nombre</h3>
  <label for="nombrePrograma">Nombre del Programa:</label>
  <input type="text" id="nombrePrograma" required>
  <button type="button" onclick="GuardarModificionPrograma()">Guardar Modificion Programa</button>
  <button id="atras" class="atras" onclick="modificarPrograma()">atras</button>
  </form>
  `;
}

const modificarNivelProgramas = () => {
  const contenedorProgramas = document.getElementById('crearPrograma');
  contenedorProgramas.innerHTML = `
  <form id="MenuModificarPrograma">
  <h3>Menu modificar Nivel</h3>
  <label for="nivelPrograma">Nivel del Programa:</label>
  <input type="text" id="nivelPrograma" required>
  <button type="button" onclick="GuardarModificionPrograma()">Guardar Modificion Programa</button>
  <button id="atras" class="atras" onclick="modificarPrograma()">atras</button>
  </form>
  `;
}


