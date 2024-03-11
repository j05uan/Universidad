const listaEstudiantes=[];

const loadEstudiantes=async()=>{
    try{
        listaEstudiantes.length=0;
        const respuesta=await fetch('http://localhost:3000/alumnos');

        if(!respuesta.ok){
           throw new Error('Error al cargar Estudiantes. Estado: ',respuesta.status);
        }
        const Estudiante=await respuesta.json();
        listaEstudiantes.push(...Estudiante);

    }catch(error){
        console.error("Error al cargar Estudiante",error.message);
    }
}


const guardarEstudiante= async(nuevoEstudiante)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/alumnos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoEstudiante),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el estudiante. Estado: ',respuesta.status);
        }
        const EstudianteCreado=await respuesta.json();
       
        
        console.log('Estudiante creado:', EstudianteCreado);

    }catch(error){
        console.error("Error al cargar Estudiante",error.message);
    }
}



const opcionesEstudiantes= async ()=>{
   
    const contenedor2 = document.getElementById('contenidoContenedor');
    contenedor2.innerHTML = `
      <form>
          <button class="botonsEstudiantes" id="botoncrearEstudinte"type="button" onclick="formularioCrearEstudiante()">Crear Estudinte</button>
          <button class="botonsEstudiantes" id="botonmodificarEstudinte" type="button" onclick="modificarEstudiante()">Modificar Estudinte</button>
          <button class="botonsEstudiantes" id="botonmostrarListado" type="button" onclick="mostrarListadoEstudiantes()">Ver Listado de Estudintes</button>
          <div id="crearEstudiante"></div>
          <button id="atras1" class="atras" onclick="volverInicio()">atras</button>
          
      </form>`;
    stylesContenedorNuevo(contenedor2);
    
    

}

const formularioCrearEstudiante = async () => {
    const boton1 = document.getElementById('botoncrearEstudinte');
    const boton2 = document.getElementById('botonmodificarEstudinte');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
      <form id="MenuCrearEstudiante">
        <h3>Menu Crear Estudiantes</h3>
        <label for="nombreEstudiante">Nombre del Estudiante:</label>
        <input type="text" id="nombreEstudiante" required>
        <label for="apellidoEstudiante">Apellido del Estudiante:</label>
        <input type="text" id="apellidoEstudiante" required>
        <label for="tipoDocumentoEstudiante">Tipo de Documento:</label>
        <input type="text" id="tipoDocumentoEstudiante" required>
        <label for="numeroDocumentoEstudiante">Número de Documento:</label>
        <input type="text" id="numeroDocumentoEstudiante" required>
        <label for="ciudadResidenciaEstudiante">Ciudad de Residencia:</label>
        <input type="text" id="ciudadResidenciaEstudiante" required>
        <label for="direccionEstudiante">Dirección del Estudiante:</label>
        <input type="text" id="direccionEstudiante" required>
        <label for="telefonoEstudiante">Teléfono del Estudiante:</label>
        <input type="text" id="telefonoEstudiante" required>
        <label for="fechaNacimientoEstudiante">Fecha de Nacimiento del Estudiante:</label>
        <input type="text" id="fechaNacimientoEstudiante" required>
        <label for="sexoEstudiante">Sexo del Estudiante:</label>
        <input type="text" id="sexoEstudiante" required>
        <label for="programaEstudiante">ID del Programa:</label>
        <input type="text" id="programaEstudiante" required>
        <button type="button" onclick="crearEstudiante()">Crear Estudiante</button>
        <button id="atras" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
      </form>
  `;
    const atras = document.getElementById('atras1');
    atras.style.display = 'none';
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';
}

const crearEstudiante = async () => {

    const nombreInput = document.getElementById('nombreEstudiante');
    const apellidoInput = document.getElementById('apellidoEstudiante');
    const tipoDocumentoInput = document.getElementById('tipoDocumentoEstudiante');
    const numeroDocumentoInput = document.getElementById('numeroDocumentoEstudiante');
    const ciudadResidenciaInput = document.getElementById('ciudadResidenciaEstudiante');
    const direccionInput = document.getElementById('direccionEstudiante');
    const telefonoInput = document.getElementById('telefonoEstudiante');
    const fechaNacimientoInput = document.getElementById('fechaNacimientoEstudiante');
    const sexoInput = document.getElementById('sexoEstudiante');
    const programaInput = document.getElementById('programaEstudiante');

    // const id = idInput.value;
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const tipoDocumento = tipoDocumentoInput.value;
    const numeroDocumento = numeroDocumentoInput.value;
    const ciudadResidencia = ciudadResidenciaInput.value;
    const direccion = direccionInput.value;
    const telefono = telefonoInput.value;
    const fechaNacimiento = fechaNacimientoInput.value;
    const sexo = sexoInput.value;
    const programaId = programaInput.value;

    const nuevoEstudiante = {
        id: listaCursos.length + 1,
        nombre: nombre,
        apellido: apellido,
        tipo_documento: tipoDocumento,
        numero_documento: numeroDocumento,
        ciudad_residencia: ciudadResidencia,
        direccion: direccion,
        telefono: telefono,
        fecha_nacimiento: fechaNacimiento,
        sexo: sexo,
        programa_id: programaId
    };

    await guardarEstudiante(nuevoEstudiante);
    await loadEstudiantes();

    nombreInput.value = '';
    apellidoInput.value = '';
    tipoDocumentoInput.value = '';
    numeroDocumentoInput.value = '';
    ciudadResidenciaInput.value = '';
    direccionInput.value = '';
    telefonoInput.value = '';
    fechaNacimientoInput.value = '';
    sexoInput.value = '';
    programaInput.value = '';

    alert('Estudiante creado con éxito!');

    return nuevoEstudiante;
}

const modificarEstudiante = async () => {
    const boton1 = document.getElementById('botoncrearEstudinte');
    const boton2 = document.getElementById('botonmodificarEstudinte');
    const boton3 = document.getElementById('botonmostrarListado');
    const atras1= document.getElementById('atras1')
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';
    atras1.style.display = 'none';

    verificarEstudiantes();
    if (Estado === 'Encontrado') {
        contenedorEstudiantes.innerHTML = `
      <form id="MenuModificarEstudiante">
        <h3>Menu Modificar Estudiantes</h3>
        <h3>Seleccione el item que desea modificar</h3>
        
        <button for="identificacionEstudiante" onclick="modificarIdentificacion()">Número de Identificación del Estudiante:</button>
        <button for="nombreEstudiante" onclick="modificarNombre()">Nombre del Estudiante:</button>
        <button for="apellidoEstudiante" onclick="modificarApellido()">Apellido del Estudiante:</button>
        <button for="tipoDocumentoEstudiante" onclick="modificarTipoDocumento()">Tipo de Documento:</button>
        <button for="numeroDocumentoEstudiante" onclick="modificarNumeroDocumento()">Número de Documento:</button>
        <button for="ciudadResidenciaEstudiante" onclick="modificarCiudadResidencia()">Ciudad de Residencia:</button>
        <button for="direccionEstudiante" onclick="modificarDireccion()">Dirección del Estudiante:</button>
        <button for="telefonoEstudiante" onclick="modificarTelefono()">Teléfono del Estudiante:</button>
        <button for="fechaNacimientoEstudiante" onclick="modificarFechaNacimiento()">Fecha de Nacimiento del Estudiante:</button>
        <button for="sexoEstudiante" onclick="modificarSexo()">Sexo del Estudiante:</button>
        <button for="programaEstudiante" onclick="modificarPrograma()">ID del Programa:</button>
        <button id="atras2" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
        
      </form>
  `;
    }

}

const verificarEstudiantes = async () => {
    const Estado = '';
    const id = document.getElementById('identificacionEstudiante');
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
      <form id="MenuModificarEstudiante">
        <h3>Menu Modificar Estudiante</h3>
        <label for="identificacionEstudiante">Número de Identificación del Estudiante:</label>
        <input type="number" id="identificacionEstudiante" required>
        <button id="atras2" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
        
      </form>
  `;
    for (const estudiante of listaEstudiantes) {
        if (estudiante.id === id) {
            alert('Estudiante Encontrado!');
            Estado = 'Encontrado';
        } else {
            alert('No se encontró el estudiante!');
        }
    }

    return [Estado];
}

const modificarIdentificacion = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarEstudiante">
    <h3>Menu Modificar Identificación</h3>
    <label for="identificacionEstudiante">Número de Identificación del Estudiante:</label>
    <input type="number" id="identificacionEstudiante" required>
    <button type="button" onclick="guardarModificacionEstudiante()">Guardar Modificación Estudiante</button>
    <button id="atras3" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
    </form>`;
}

const modificarNombre = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarEstudiante">
    <h3>Menu Modificar Nombre</h3>
    <label for="nombreEstudiante">Nombre del Estudiante:</label>
    <input type="text" id="nombreEstudiante" required>
    <button type="button" onclick="guardarModificacionEstudiante()">Guardar Modificación Estudiante</button>
    <button id="atras3" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
    </form>`;
}

const modificarApellido = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarEstudiante">
    <h3>Menu Modificar Apellido</h3>
    <label for="apellidoEstudiante">Apellido del Estudiante:</label>
    <input type="text" id="apellidoEstudiante" required>
    <button type="button" onclick="guardarModificacionEstudiante()">Guardar Modificación Estudiante</button>
    <button id="atras3" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
    </form>`;
};

const  mostrarListadoEstudiantes=async()=>{
    await loadEstudiantes();
    const boton1 = document.getElementById('botoncrearEstudinte');
    const boton2 = document.getElementById('botonmodificarEstudinte');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedor2 = document.getElementById('crearEstudiante');
    const atras = document.getElementById('atras1');
    atras.style.display = 'none';
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';
    stylesContenedorNuevo(contenedor2);
    
    const listadoEstudiantes= document.getElementById('crearEstudiante');
    console.log(listadoEstudiantes);
    listadoEstudiantes.style.display='flex';
    
    const ul = document.createElement("ul");
    

    for(const Estudiante of listaEstudiantes){
        const li=document.createElement('li');
        li.textContent= `nombre: ${Estudiante.nombre}, apellido: ${Estudiante.apellido}, tipo_documento: ${Estudiante.tipo_documento}, numero_documento: ${Estudiante.numero_documento}
        , ciudad_residencia: ${Estudiante.ciudad_residencia}, direccion: ${Estudiante.direccion}, telefono: ${Estudiante.telefono}, fecha_nacimiento: ${Estudiante.fecha_nacimiento}, sexo: ${Estudiante.numero_documento}
        , programa_id: ${Estudiante.programa_id}`;
        ul.appendChild(li);
    }
    listadoEstudiantes.innerHTML='';
    listadoEstudiantes.appendChild(ul);

    const volverButton=document.createElement('button');
    volverButton.textContent='Volver al Formulario';
    volverButton.addEventListener('click',opcionesEstudiantes);
    listadoEstudiantes.appendChild(volverButton);
}

// const volverFormulariEstudiantes=()=>{
//     const EstudiantesForm=document.getElementById('crearEstudiante');
//     const listadoEstudiantes = document.getElementById('listadoEstudiantes');

//     listadoEstudiantes.style.display='none';
//     EstudiantesForm.style.display='block';
// }



