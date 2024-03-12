const listaMatriculas=[];

const loadMatriculas = async () => {
    try {
        listaMatriculas.length = 0;
        const respuesta = await fetch('http://localhost:3000/matriculas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar Matriculas. Estado: ', respuesta.status);
        }
        const matriculas = await respuesta.json();
        listaMatriculas.push(...matriculas);

    } catch (error) {
        console.error("Error al cargar matriculas", error.message);
    }
}

const guardarMatricula = async (nuevaMatricula) => {
    try {

        const respuesta = await fetch('http://localhost:3000/matriculas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaMatricula),
        });

        if (!respuesta.ok) {
            throw new Error('Error al crear la matricula. Estado: ', respuesta.status);
        }
        const matriculaCreada = await respuesta.json();


        console.log('Matricula creada:', matriculaCreada);

    } catch (error) {
        console.error("Error al cargar matricula", error.message);
    }
}

const botonesMatriculas = async () => {
    const contenedorMatriculas = document.getElementById('contenidoContenedor');
    contenedorMatriculas.innerHTML = `
      <form>
          <button class="botonsMatriculas" id="botoncrearMatricula" type="button" onclick="formularioCrearMatricula()">Crear Matriculas</button>
          <button class="botonsMatriculas" id="botonmodificarMatricula" type="button" onclick="modificarMatricula()">Modificar Matriculas</button>
          <button class="botonsMatriculas" id="botonmostrarListado" type="button" onclick="mostrarListadoMatriculas()">Ver Listado de Matriculas</button>
          <div id="matriculass"></div>
          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
      </form>`;

    stylesContenedorNuevo(contenedorMatriculas);
    limpiarpantalla();
}
const formularioCrearMatricula=async()=>{
    const listaAsignaturas2=loadMatriculas()
    const listaEstudiantes3=loadEstudiantes()
    const listaperiodo=loadPeriodos()
    const boton1=document.getElementById('botoncrearMatricula');
    boton1.style.display='none'
    const boton2=document.getElementById('botonmodificarMatricula');
    boton2.style.display='none'
    const boton3=document.getElementById('botonmostrarListado');
    boton3.style.display='none'
    const contenedorMatriculas = document.getElementById('contenidoContenedor');
    contenedorMatriculas.innerHTML = `
      <form id="Matricular">
      <h3>Matricular</h3>
      <label for="selectAsignatura"> Selecciona una opcion Asignatura:</label>
      <select id="selectAsignatura"></select>
      <label for="selectEstudiante"> Selecciona una opcion Estudiantes:</label>
      <select id="selectEstudiante"></select>
      <label for="selectPeriodo"> Selecciona una opcion Periodo:</label>
      <select id="selectPeriodo"></select>
      <button type="button" onclick="()">Agregar</button>
      <button id="atras" class="atras" onclick="()">Atrás</button>
      </form>`;
    let asignatura = document.getElementById('selectAsignatura');
    asignatura.innerHTML = '';
    listaAsignaturas2.forEach(function(opcion) {
        let option = document.createElement('option');
        option.value = opcion;
        option.textContent = opcion;
        asignatura.appendChild(option);
    });
    let estudiante = document.getElementById('selectEstudiante');
    estudiante.innerHTML = '';
    listaEstudiantes3.forEach(function(opcion) {
        let option = document.createElement('option');
        option.value = opcion;
        option.textContent = opcion;
        estudiante.appendChild(option);
    });
    let periodo = document.getElementById('selectPeriodo');
    periodo.innerHTML = '';
    listaperiodo.forEach(function(opcion) {
        let option = document.createElement('option');
        option.value = opcion;
        option.textContent = opcion;
        periodo.appendChild(option);
    });
}
const crearMatricula=async()=>{
    const estudianteInput =document.getElementById('selectEstudiante');
    const asignaturaInput=document.getElementById('selectAsignatura')
    const periodoInput=document.getElementById('selectPeriodo');
     
    const nuevaMatricula={
            "id": listaMatriculas.length + 1,
            "estudiante_id": estudianteInput,
            "asignatura_id": asignaturaInput,
            "periodo_id": periodoInput,
            "precio": 4000
        
    }
    await guardarMatricula(nuevaMatricula)
    await loadMatriculas()
    estudianteInput.value = '';
    asignaturaInput.value = '';
    periodoInput.value = '';
    alert('Matricula creada con éxito!');
}