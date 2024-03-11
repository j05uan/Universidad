const listaCursos=[];

const loadCursos=async()=>{
    try{
        listaCursos.length=0;
        const respuesta=await fetch('http://localhost:3000/cursos');

        if(!respuesta.ok){
           throw new Error('Error al cargar Cursos. Estado: ',respuesta.status);
        }
        const Curso=await respuesta.json();
        listaCursos.push(...Curso);

    }catch(error){
        console.error("Error al cargar Cursos",error.message);
    }
}


const guardarCurso= async(nuevoCurso)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/cursos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoCurso),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el Curso. Estado: ',respuesta.status);
        }
        const CursoCreado=await respuesta.json();
       
        
        console.log('Curso creado:', CursoCreado);

    }catch(error){
        console.error("Error al cargar Curso",error.message);
    }
}
const botonesCursos = async () => {
    const contenedorCursos = document.getElementById('contenidoContenedor');
    contenedorCursos.innerHTML = `
      <form>
          <button class="botonsCursos" id="botoncrearCurso" type="button" onclick="formularioCrearCurso()">Crear Cursos</button>
          <button class="botonsCursos" id="botonmodificarCurso" type="button" onclick="modificarCurso()">Modificar Cursos</button>
          <button class="botonsCursos" id="botonmostrarListado" type="button" onclick="mostrarListadoCursos()">Ver Listado de Cursos</button>
          <div id="OpcionesCursos"></div>

          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
      </form>`;

    stylesContenedorNuevo(contenedorCursos);
}

const formularioCrearCurso = async () => {
  const boton1 = document.getElementById('botoncrearCurso');
  const boton2 = document.getElementById('botonmodificarCurso');
  const boton3 = document.getElementById('botonmostrarListado');
  const atras = document.getElementById('atras');
  atras.style.display = 'none';
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';
  const contenedorCursos = document.getElementById('OpcionesCursos');
  contenedorCursos.innerHTML = `
    <form id="MenuCrearCurso">
      <h3>Menu Crear Cursos</h3>
      <label for="nombreCurso">Nombre del Curso:</label>
      <input type="text" id="nombreCurso" required>
      <label for="codigoCurso">Código del Curso:</label>
      <input type="text" id="codigoCurso" required>
      <label for="guiaCatedra">Guía de Cátedra:</label>
      <input type="text" id="guiaCatedra" required>
      <button type="button" onclick="crearCursos()">Crear Curso</button>
      <button id="atras" class="atras" onclick="botonesCursos()">atras</button>
    </form>
`;
  
}

const crearCursos = async () => {
  
  const nombreInput = document.getElementById('nombreCurso');
  const codigoInput = document.getElementById('codigoCurso');
  const guiaCatedraInput = document.getElementById('guiaCatedra');

  const nombre = nombreInput.value;
  const codigo = codigoInput.value;
  const guiaCatedra = guiaCatedraInput.value;

  const nuevoCurso = {
      id: listaCursos.length + 1,
      nombre: nombre,
      codigo: codigo,
      guia_catedra: guiaCatedra,
  };

  await guardarCurso(nuevoCurso);
  await loadCursos();

  nombreInput.value = '';
  codigoInput.value = '';
  guiaCatedraInput.value = '';

  alert('Curso creado con éxito!');

  return nuevoCurso;
}

const modificarCurso = async () => {
  const boton1 = document.getElementById('botoncrearCurso');
  const boton2 = document.getElementById('botonmodificarCurso');
  const boton3 = document.getElementById('botonmostrarListado');
  const contenedorCursos = document.getElementById('OpcionesCursos');
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';

  verificarCursos();
  if (Estado === 'Encontrado') {
      contenedorCursos.innerHTML = `
    <form id="MenuModificarCurso">
      <h3>Menu Modificar Cursos</h3>
      <h3>Seleccione el item que desea modificar</h3>
      <button for="nombreCurso" onclick="modificarNombreCurso()">Nombre del Curso:</button>
      <button for="codigoCurso" onclick="modificarCodigoCurso()">Código del Curso:</button>
      <button for="guiaCatedra" onclick="modificarGuiaCatedra()">Guía de Cátedra:</button>
      <button id="atras" class="atras" onclick="botonesCursos()">atras</button>
    </form>`;
  }
}

const verificarCursos = async () => {
  const Estado = '';
  const nombre = document.getElementById('nombreCurso');
  const contenedorCursos = document.getElementById('OpcionesCursos');
  contenedorCursos.innerHTML = `
    <form id="MenuModificarCurso">
      <h3>Menu Mofificar Curso</h3>
      <label for="nombreCursoVerificacion">Nombre del Curso:</label>
      <input type="text" id="nombreCursoVerificacion" required>
    </form>`;
  for (const curso of listaCursos ) {
      if (curso[nombre] === nombre) {
          alert('Curso Encontrado!');
          Estado = 'Encontrado';
      } else {
          alert('No se encontró el Curso!');
      }
  }

  return [Estado, Cursos];
}

const modificarNombreCurso = () => {
  const contenedorCursos = document.getElementById('OpcionesCursos');
  contenedorCursos.innerHTML = `
  <form id="MenuModificarCurso">
  <h3>Menu modificar Nombre</h3>
  <label for="newnombreCurso">Nombre del Curso:</label>
  <input type="text" id="newnombreCurso" required></input>
  <button type="button" onclick="guardarModificacionCurso(newnombreCurso)">Guardar Modificación Curso</button>
  <button id="atras" class="atras" onclick="modificarCurso()">atras</button>
  </form>`;
}

const modificarCodigoCurso = () => {
  const contenedorCursos = document.getElementById('OpcionesCursos');
  contenedorCursos.innerHTML = `
  <form id="MenuModificarCurso">
  <h3>Menu modificar Código</h3>
  <label for="newcodigoCurso">Código del Curso:</label>
  <input type="text" id="newcodigoCurso" required></input>
  <button type="button" onclick="guardarModificacionCurso(newcodigoCurso)">Guardar Modificación Curso</button>
  <button id="atras" class="atras" onclick="modificarCurso()">atras</button>
  </form>`;
}

const modificarGuiaCatedra = () => {
  const contenedorCursos = document.getElementById('OpcionesCursos');
  contenedorCursos.innerHTML = `
  <form id="MenuModificarCurso">
  <h3>Menu modificar Guía de Cátedra</h3>
  <label for="newguiaCatedra">Guía de Cátedra:</label>
  <input type="text" id="newguiaCatedra" required></input>
  <button type="button" onclick="guardarModificacionCurso(newguiaCatedra)">Guardar Modificación Curso</button>
  <button id="atras" class="atras" onclick="modificarCurso()">atras</button>
  </form>`;
}

const mostrarListadoCursos = async () => {
  await loadCursos();
  const boton1 = document.getElementById('botoncrearCurso');
  const boton2 = document.getElementById('botonmodificarCurso');
  const boton3 = document.getElementById('botonmostrarListado');
  const atras = document.getElementById('atras');
  atras.style.display = 'none';
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';
  const contenedor2 = document.getElementById('OpcionesCursos');
  stylesContenedorNuevo(contenedor2);
  const listadoCursos = document.getElementById('OpcionesCursos');
  listadoCursos.style.display = 'flex';
  const ul = document.createElement("ul");
  
  for(const curso of listaCursos) {
      const li = document.createElement('li');
      li.textContent = `ID: ${curso.id}, Nombre: ${curso.nombre}, Codigo: ${curso.codigo}, guia_catedra: ${curso.guia_catedra}`;
      ul.appendChild(li);
  }
  listadoCursos.innerHTML = '';
  listadoCursos.appendChild(ul);

  const volverButton = document.createElement('button');
  volverButton.textContent = 'Volver al Formulario';
  volverButton.addEventListener('click', botonesCursos());
  listadoCursos.appendChild(volverButton);
}


const guardarModificacionCurso = async (valor) => {
  const newnombre = document.getElementById('newnombreCurso').value;
  const newcodigo = document.getElementById('newcodigoCurso').value;
  const newguia = document.getElementById('newguiaCatedra').value;
  const nombreverificacion = document.getElementById('nombreCursoVerificacion').value;
  let newInput = valor;

  listaCursos.forEach(curso => {
    if (curso.nombre === nombreverificacion) {
      if (newInput === newnombre) {
        curso.nombre = newnombre;
      } else if (newInput === newcodigo) {
        curso.codigo = newcodigo;
      } else if (newInput === newguia) {
        curso.guia_catedra = newguia;
      }

      const objetoModificado = {
        nombre: curso.nombre,
        codigo: curso.codigo,
        guia_catedra: curso.guia_catedra
      };

      fetch('http://localhost:3000/cursos/' + curso.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoModificado)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al modificar el objeto');
        }
        return response.json();
      })
      .then(data => {
        console.log('Objeto modificado con éxito:', data);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
    }
  });

  alert('Modificación del curso guardada con éxito!');
}



