const botonesProfesor=async()=>{
    const contenedor4 =document.getElementById('OpcionesProfesores');
    contenedor4.innerHTML = `
      <form>
          <button class="botonsProfesor" id="botoncrearProfesor" type="button" onclick="formularioCrearProfesor()">Crear Profesores</button>
          <button class="botonsProfesor" id="botonmodificarProfesor" type="button" onclick="()">Modificar Profesores</button>
          <button class="botonsProfesor" id="botonmostrarListado" type="button" onclick="mostrarListado()">Ver Listado de Profesores</button>
          <div id="profesoress"></div>
          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
          
      </form>
  `;

  stylesContenedorNuevo(contenedor4);
  limpiarpantalla();
   
}

const formularioCrearProfesor = async () => {
    const boton1 = document.getElementById('botoncrearProfesor');
    const boton2 = document.getElementById('botonmodificarProfesor');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorProfesores = document.getElementById('profesoress');
    contenedorProfesores.innerHTML = `
      <form id="MenuCrearProfesor">
        <h3>Menu Crear Profesores</h3>
        <label for="tipoDocumento">Tipo de Documento:</label>
        <input type="text" id="tipoDocumento" required>
        <label for="numeroDocumento">Número de Documento:</label>
        <input type="number" id="numeroDocumento" required>
        <label for="nombreProfesor">Nombre del Profesor:</label>
        <input type="text" id="nombreProfesor" required>
        <label for="apellidoProfesor">Apellido del Profesor:</label>
        <input type="text" id="apellidoProfesor" required>
        <label for="departamentoId">ID del Departamento:</label>
        <input type="number" id="departamentoId" required>
        <button id="atras" class="atras" onclick="botonesProfesor()">atras</button>
      </form>
  `;
    const atras = document.getElementById('atras');
    atras.style.display = 'none';
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';
    await crearProfesores();
}

const crearProfesores = async () => {
    const tipoDocumentoInput = document.getElementById('tipoDocumento');
    const numeroDocumentoInput = document.getElementById('numeroDocumento');
    const nombreInput = document.getElementById('nombreProfesor');
    const apellidoInput = document.getElementById('apellidoProfesor');
    const departamentoIdInput = document.getElementById('departamentoId');

    const tipoDocumento = tipoDocumentoInput.value;
    const numeroDocumento = numeroDocumentoInput.value;
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const departamentoId = departamentoIdInput.value;

    const nuevo = {
        id: listaProfesores.length + 1,
        tipo_documento: tipoDocumento,
        numero_documento: numeroDocumento,
        nombre: nombre,
        apellido: apellido,
        departamento_id: departamentoId,
    }

    await guardar(nuevo);
    await loadEstudiantes();

    tipoDocumentoInput.value = '';
    numeroDocumentoInput.value = '';
    nombreInput.value = '';
    apellidoInput.value = '';
    departamentoIdInput.value = '';

    alert('Profesor creado con éxito!');

    return nuevo;
}

const modificarProfesor = async () => {
    const boton1 = document.getElementById('botoncrearProfesor');
    const boton2 = document.getElementById('botonmodificarProfesor');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorProfesores = document.getElementById('crearEProfesor');
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';

    verificarProfesores();
    if (Estado === 'Encontrado') {
        contenedorProfesores.innerHTML = `
      <form id="MenuModificarEProfesor">
        <h3>Menu Modificar EProfesores</h3>
        <h3>Seleccione el ítem que desea modificar</h3>
        <button for="tipoDocumento" onclick="modificarTipoDocumento()">Tipo de Documento:</button>
        <button for="numeroDocumento" onclick="modificarNumeroDocumento()">Número de Documento:</button>
        <button for="nombreProfesor" onclick="modificarNombreProfesor()">Nombre del Profesor:</button>
        <button for="apellidoProfesor" onclick="modificarApellidoProfesor()">Apellido del Profesor:</button>
        <button for="departamentoId" onclick="modificarDepartamentoId()">ID del Departamento:</button>
        <button id="atras" class="atras" onclick="botonesProfesor()">atras</button>
      </form>`;
    }
}

const verificarProfesores = async () => {
    const Estado = '';
    const nombre = document.getElementById('nombreProfesor').value;
    for (const profesor of listaProfesores) {
        if (profesor.nombre === nombre) {
            alert('Profesor Encontrado!');
            Estado = 'Encontrado';
            break;
        }
    }

    if (Estado !== 'Encontrado') {
        alert('No se encontró el Profesor!');
    }

    return Estado;
}

const modificarTipoDocumento = () => {
    const contenedorProfesores = document.getElementById('Profesores');
    contenedorProfesores.innerHTML = `
    <form id="MenuModificarProfesor">
    <h3>Menu modificar Tipo de Documento</h3>
    <label for="tipoDocumento">Tipo de Documento:</label>
    <input type="text" id="tipoDocumento" required>
    <button type="button" onclick="GuardarModificionProfesor()">Guardar Modificación Profesor</button>
    <button id="atras" class="atras" onclick="modificarProfesor()">atras</button>
    </form>`;
}

const modificarNumeroDocumento = () => {
    const contenedorProfesores = document.getElementById('Profesores');
    contenedorProfesores.innerHTML = `
    <form id="MenuModificarProfesor">
    <h3>Menu modificar Número de Documento</h3>
    <label for="numeroDocumento">Número de Documento:</label>
    <input type="number" id="numeroDocumento" required>
    <button type="button" onclick="GuardarModificionProfesor()">Guardar Modificación Profesor</button>
    <button id="atras" class="atras" onclick="modificarProfesor()">atras</button>
    </form>`;
}

const modificarNombreProfesor = () => {
    const contenedorProfesores = document.getElementById('Profesores');
    contenedorProfesores.innerHTML = `
    <form id="MenuModificarProfesor">
    <h3>Menu modificar Nombre</h3>
    <label for="nombreProfesor">Nombre del Profesor:</label>
    <input type="text" id="nombreProfesor" required>
    <button type="button" onclick="GuardarModificionProfesor()">Guardar Modificación Profesor</button>
    <button id="atras" class="atras" onclick="modificarProfesor()">atras</button>
    </form>`;
}

const modificarApellidoProfesor = () => {
    const contenedorProfesores = document.getElementById('Profesores');
    contenedorProfesores.innerHTML = `
    <form id="MenuModificarProfesor">
    <h3>Menu modificar Apellido</h3>
    <label for="apellidoProfesor">Apellido del Profesor:</label>
    <input type="text" id="apellidoProfesor" required>
    <button type="button" onclick="GuardarModificionProfesor()">Guardar Modificación Profesor</button>
    <button id="atras" class="atras" onclick="modificarProfesor()">atras</button>
    </form>`;
}

const modificarDepartamentoId = () => {
    const contenedorProfesores = document.getElementById('Profesores');
    contenedorProfesores.innerHTML = `
    <form id="MenuModificarProfesor">
    <h3>Menu modificar ID del Departamento</h3>
    <label for="departamentoId">ID del Departamento:</label>
    <input type="number" id="departamentoId" required>
    <button type="button" onclick="GuardarModificionProfesor()">Guardar Modificación Profesor</button>
    <button id="atras" class="atras" onclick="modificarProfesor()">atras</button>
    </form>`;
}

