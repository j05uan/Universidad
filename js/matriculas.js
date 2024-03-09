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
    const contenedorMatriculas = document.getElementById('OpcionesMatriculas');
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
