const listaHorarios = [];

const loadHorarios = async () => {
    try {
        listaHorarios.length = 0;
        const respuesta = await fetch('http://localhost:3000/horarios');

        if (!respuesta.ok) {
            throw new Error('Error al cargar Horarios. Estado: ' + respuesta.status);
        }
        const horario = await respuesta.json();
        listaHorarios.push(...horario);

    } catch (error) {
        console.error("Error al cargar Horario", error.message);
    }
}

const guardarHorario = async (nuevoHorario) => {
    try {
        const respuesta = await fetch('http://localhost:3000/horarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoHorario),
        });

        if (!respuesta.ok) {
            throw new Error('Error al crear el horario. Estado: ' + respuesta.status);
        }
        const horarioCreado = await respuesta.json();
        console.log('Horario creado:', horarioCreado);

    } catch (error) {
        console.error("Error al cargar Horario", error.message);
    }
}

const opcionesHorarios = async () => {
    const contenedor2 = document.getElementById('OpcionesHorarios');
    contenedor2.innerHTML = `
      <form>
          <button class="botonsHorarios" id="botoncrearHorario" type="button" onclick="formularioCrearHorario()">Crear Horario</button>
          <button class="botonsHorarios" id="botonmostrarListado" type="button" onclick="mostrarListadoHorarios()">Ver Listado de Horarios</button>
          <div id="crearHorario"></div>
          <div id="listadoHorarios"></div>
          <button id="atras" class="atras" onclick="volverInicio()">Atrás</button>
      </form>`;
    stylesContenedorNuevo(contenedor2);
    limpiarpantalla();
}

const formularioCrearHorario = async () => {
    const boton1 = document.getElementById('botoncrearHorario');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorHorarios = document.getElementById('crearHorario');
    contenedorHorarios.innerHTML = `
      <form id="MenuCrearHorario">
        <h3>Menu Crear Horario</h3>
        <label for="programaHorario">Programa:</label>
        <input type="text" id="programaHorario" required>
        <label for="salonIdHorario">ID del Salón:</label>
        <input type="text" id="salonIdHorario" required>
        <label for="profesorHorario">Profesor:</label>
        <input type="text" id="profesorHorario" required>
        <button type="button" onclick="crearHorarios()">Crear Horario</button>
        <button id="atras" class="atras" onclick="opcionesHorarios()">Atrás</button>
      </form>
  `;
    const atras = document.getElementById('atras');
    atras.style.display = 'none';
    boton1.style.display = 'none'
    boton3.style.display = 'none';
}

const crearHorario = async () => {
    const programaInput = document.getElementById('programaHorario');
    const salonIdInput = document.getElementById('salonIdHorario');
    const profesorInput = document.getElementById('profesorHorario');

    const programa = programaInput.value;
    const salonId = salonIdInput.value;
    const profesor = profesorInput.value;
   
    const nuevoHhorario={
        Id:length.listahorarios+1,
        programa:"",
        salonId:"",
        Profesro:"",
        Estudiantes:[],
        horario:{
        lunes:{"6-8":"",
        "8-10":"",
        "10-12":"Almuerzo",
        "14-16":"",
        "16-18":"",
        "18-20":""},
        Martes:{"6-8":"",
        "8-10":"",
        "10-12":"Almuerzo",
        "14-16":"",
        "16-18":"",
        "18-20":""},
        Miercoles:{"6-8":"",
        "8-10":"",
        "10-12":"Almuerzo",
        "14-16":"",
        "16-18":"",
        "18-20":""},
        Jueves:{"6-8":"",
        "8-10":"",
        "10-12":"Almuerzo",
        "14-16":"",
        "16-18":"",
        "18-20":""},
        Viernes:{"6-8":"",
        "8-10":"",
        "10-12":"Almuerzo",
        "14-16":"",
        "16-18":"",
        "18-20":""}
        
    }   
    }
    await formularioAgregarAsignaturasAlHorario()
    const nuevoHorario = {
        Id: listaHorarios.length + 1,
        programa: programa,
        salonId: salonId,
        Profesor: profesor,
        Estudiantes: [],
        horario: nuevoHhorario
    };

    await guardarHorario(nuevoHorario);
    await loadHorarios();

    programaInput.value = '';
    salonIdInput.value = '';
    profesorInput.value = '';

    alert('Horario creado con éxito!');
}




const formularioAgregarAsignaturasAlHorario=async()=>{
    const contenedor=document.getElementById('');
    contenedor.innerHTML=`
    <form id="MenuAgregarAsignaturasAHorario">
    <h3>Menu Agregar Asignaturas al Horario</h3>
        <label for="NombreAsignatura"> Nombre de la Asignatura:</label>
        <input type="text" id="NombreAsignatura" required>
        <button type="button" onclick="verificardisponibilidad()">Siguiente</button>
        <button id="atras" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
        <div id="horario"></div>
        <div id="agregarhorario"></div>
    </form>
  `;
}
const verificardisponibilidad=()=>{
    let dispoibles=0;
    let mostrarHorasDisponibles=[];
    let horariosDisponibles=[];
    let permiso=false;
    for(diccionarios of listahorarios){
        for (dias in diccionarios.horario){
            for (let horasdisponibles in dias){
                if(horasdisponibles===""){
                    alert('Se encontraron Horarios Disponibles')
                    horariosDisponibles.push(...horasdisponibles)
                    dispoibles++
                }
                else{
                    alert('No hay horarios Disponibles porque no hay suficientes salones, intenta agregar nuevos salones para obtener mas opciones de matriculas')
                };

                
            };
        };
    };
    if(dispoibles>0){
        permiso=true
        let nuevohorarioDisponible={
            dia:dias,
            horas:horariosDisponibles
        }
        mostrarHorasDisponibles.push(nuevohorarioDisponible);
        
    }
    return mostrarHorasDisponibles,permiso;
}

const agregarAsignaturasAlHorario=async(valor)=>{
    let diccionarioAsignaturasHorarios={Asignaturalunes68:"",Asignaturalunes810:"",Asignaturalunes1012:"",
    Asignaturalunes1214:"", Asignaturalunes1416:"", Asignaturalunes1618:"", Asignaturalunes1820:"", Asignaturamartes68:"",
    Asignaturamartes810:"", Asignaturamartes1012:"", Asignaturamartes1214:"", Asignaturamartes1416:"", Asignaturamartes1618:"",
    Asignaturamartes1820:"", Asignaturamiercoles68:"", Asignaturamiercoles810:"", Asignaturamiercoles1012:"", Asignaturamiercoles1214:"",
    Asignaturamiercoles1416:"", Asignaturamiercoles1618:"",Asignaturamiercoles1820 :"", Asignaturajueves68:"", Asignaturajueves810:"",
    Asignaturajueves1012:"", Asignaturajueves1214:"", Asignaturajueves1416:"", Asignaturajueves1618:"",
    Asignaturajueves1820 :"", Asignaturaviernes68:"", Asignaturaviernes810:"", Asignaturaviernes1012:"", Asignaturaviernes1214:"",
    Asignaturaviernes1416 :"", Asignaturaviernes1618:"",Asignaturaviernes1820:"" };
    
    let opciones=[];
    diccionarioAsignaturasHorarios.forEach(Asignatura => {
        if(Asignatura===""){
            opciones.push(Asignatura)
        }
    });
    await loadAsignaturas();
    const contenedor1 =document.getElementById('horario');
    contenedor1.innerHTML=`
    <div id="HorariosDisponibles">
    <h3>Horarios Disponibles</h3>
    <section id="horario">
    <div>
    <div>    
    <h1 id="lunes">lunes</h1>
    </div>
        <div>
        <h1 id="lunes68"> 6-8</h1>
        <h1 id="Asignaturalunes68 "> </h1>
        </div>
        <div>
        <h1 id="lunes810"> 8-10</h1>
        <h1 id="Asignaturalunes810 "> </h1>
        </div>
        <div>
        <h1 id="lunes1012"> 10-12</h1>
        <h1 id="Asignaturalunes1012 "> </h1>
        </div>
        <div>
        <h1 id="lunes1214">Almuerzo</h1>
        <h1 id="Asignaturalunes1214 "> </h1>
        </div>
        <div>
        <h1 id="lunes1416"> 14-16</h1>
        <h1 id="Asignaturalunes1416 "> </h1>
        </div>
        <div>
        <h1 id="lunes1618"> 16-18</h1>
        <h1 id="Asignaturalunes1618"> </h1>
        </div>
        <div>
        <h1 id="lunes1820"> 18-20</h1>
        <h1 id="Asignaturalunes1820 "> </h1>
    </div>
    </div>
    <div>
    <!-- martes -->   
        <div>
        <h1 id="martes68"> 6-8</h1>
        <h1 id="Asignaturamartes68 "> </h1>
        </div>
        <div>
        <h1 id="martes810"> 8-10</h1>
        <h1 id="Asignaturamartes810 "> </h1>
        </div>
        <div>
        <h1 id="martes1012"> 10-12</h1>
        <h1 id="Asignaturamartes1012 "> </h1>
        </div>
        <div>
        <h1 id="martes1214">Almuerzo</h1>
        <h1 id="Asignaturamartes1214 "> </h1>
        </div>
        <div>
        <h1 id="martes1416"> 14-16</h1>
        <h1 id="Asignaturamartes1416 "> </h1>
        </div>
        <div>
        <h1 id="martes1618"> 16-18</h1>
        <h1 id="Asignaturamartes1618 "> </h1>
        </div>
        <div>
        <h1 id="martes1820"> 18-20</h1>   
        <h1 id="Asignaturamartes1820 "> </h1>
    </div>
    </div>
    
    <div>         
    <!-- miercoles -->
    <div>    
    <h1 id="miercoles">miercoles</h1>
    
    </div>
        <div>
        <h1 id="miercoles68"> 6-8</h1>
        <h1 id="Asignaturamiercoles68 "> </h1>
        </div>
        <div>
        <h1 id="miercoles810"> 8-10</h1>
        <h1 id="Asignaturamiercoles810 "> </h1>
        </div>
        <div>
        <h1 id="miercoles1012"> 10-12</h1>
        <h1 id="Asignaturamiercoles1012 "> </h1>
        </div>
        <div>
        <h1 id="miercoles1214">Almuerzo</h1>
        <h1 id="Asignaturamiercoles1214 "> </h1>
        </div>
        <div>
        <h1 id="miercoles1416"> 14-16</h1>
        <h1 id="Asignaturamiercoles1416 "> </h1>
        </div>
        <div>
        <h1 id="miercoles1618"> 16-18</h1>
        <h1 id="Asignaturamiercoles1618 "> </h1>
        </div>
        <div>
        <h1 id="miercoles1820"> 18-20</h1>
        <h1 id="Asignaturamiercoles1820 "> </h1>
    </div>
    </div>
    
    <div>
    <!-- jueves -->
    <div>    
    <h1 id="jueves">jueves</h1>
    </div>
        <div>
        <h1 id="jueves68"> 6-8</h1>
        <h1 id="Asignaturajueves68 "> </h1>
        </div>
        <div>
        <h1 id="jueves810"> 8-10</h1>
        <h1 id="Asignaturajueves810 "> </h1>
        </div>
        <div>
        <h1 id="jueves1012"> 10-12</h1>
        <h1 id="Asignaturajueves1012 "> </h1>
        </div>
        <div>
        <h1 id="jueves1214">Almuerzo</h1>
        <h1 id="Asignaturajueves1214 "> </h1>
        </div>
        <div>
        <h1 id="jueves1416"> 14-16</h1>
        <h1 id="Asignaturajueves1416 "> </h1>
        </div>
        <div>
        <h1 id="jueves1618"> 16-18</h1>
        <h1 id="Asignaturajueves1618 "> </h1>
        </div>
        <div>
        <h1 id="jueves1820"> 18-20</h1>
        <h1 id="Asignaturajueves1820 "> </h1>
    </div>
    </div>
    
    <div>
    <!-- viernes -->
    <div>    
    <h1 id="viernes">viernes</h1>
    </div>
        <div>
        <h1 id="viernes68"> 6-8</h1>
        <h1 id="Asignaturaviernes68 "> </h1>
        </div>
        <div>
        <h1 id="viernes810"> 8-10</h1>
        <h1 id="Asignaturaviernes810 "> </h1>
        </div>
        <div>
        <h1 id="viernes1012"> 10-12</h1>
        <h1 id="Asignaturaviernes1012 "> </h1>
        </div>
        <div>
        <h1 id="viernes1214">Almuerzo</h1>
        <h1 id="Asignaturaviernes1214 "> </h1>
        </div>
        <div>
        <h1 id="viernes1416"> 14-16</h1>
        <h1 id="Asignaturaviernes1416 "> </h1>
        </div>
        <div>
        <h1 id="viernes1618"> 16-18</h1>
        <h1 id="Asignaturaviernes1618 "> </h1>
        </div>
        <div>
        <h1 id="viernes1820"> 18-20</h1>
        <h1 id="Asignaturaviernes1820 "> </h1>
    </div>
    </div>
<section>
    </div>
  `
    const contenedor2=document.getElementById('agregarhorario');
    contenedor2.innerHTML=`
    <form id="MenuAgregarAsignaturasAHorario">
    <h3>Menu Agregar Asignaturas al Horario</h3>
        <label for="horarioSeleccionado"> Selecciona una opcion:</label>
        <select id="miSelect">
        <option value="opcion1">Opción 1</option>
        <button type="button" onclick="verificardisponibilidad()">Agregar</button>
        <button id="atras" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
    </form>
  `
}
function generarOpciones(opciones) {
        let select = document.getElementById('miSelect');
        select.innerHTML = '';
        opciones.forEach(function(opcion) {
            let option = document.createElement('option');
            option.value = opcion;
            option.textContent = opcion;
            select.appendChild(option);
        });
    }

 let horario=`<section id="horario">
        <div>
        <div>    
        <h1 id="lunes">lunes</h1>
        </div>
            <div>
            <h1 id="lunes68"> 6-8</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="lunes810"> 8-10</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="lunes1012"> 10-12</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="lunes1214">Almuerzo</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="lunes1416"> 14-16</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="lunes1618"> 16-18</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="lunes1820"> 18-20</h1>
            <h1 id="Asignatura "> </h1>
        </div>
        </div>
        <div>
        <!-- martes -->
        <div>    
        <h1 id="martes">Martes</h1>
        </div>
            <div>
            <h1 id="martes68"> 6-8</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="martes810"> 8-10</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="martes1012"> 10-12</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="martes1214">Almuerzo</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="martes1416"> 14-16</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="martes1618"> 16-18</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="martes1820"> 18-20</h1>   
            <h1 id="Asignatura "> </h1>
        </div>
        </div>
        
        <div>         
        <!-- miercoles -->
        <div>    
        <h1 id="miercoles">miercoles</h1>
        <h1 id="Asignatura "> </h1>
        </div>
            <div>
            <h1 id="miercoles68"> 6-8</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="miercoles810"> 8-10</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="miercoles1012"> 10-12</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="miercoles1214">Almuerzo</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="miercoles1416"> 14-16</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="miercoles1618"> 16-18</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="miercoles1820"> 18-20</h1>
            <h1 id="Asignatura "> </h1>
        </div>
        </div>
        
        <div>
        <!-- jueves -->
        <div>    
        <h1 id="jueves">jueves</h1>
        </div>
            <div>
            <h1 id="jueves68"> 6-8</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="jueves810"> 8-10</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="jueves1012"> 10-12</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="jueves1214">Almuerzo</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="jueves1416"> 14-16</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="jueves1618"> 16-18</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="jueves1820"> 18-20</h1>
            <h1 id="Asignatura "> </h1>
        </div>
        </div>
        
        <div>
        <!-- viernes -->
        <div>    
        <h1 id="viernes">viernes</h1>
        </div>
            <div>
            <h1 id="viernes68"> 6-8</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="viernes810"> 8-10</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="viernes1012"> 10-12</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="viernes1214">Almuerzo</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="viernes1416"> 14-16</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="viernes1618"> 16-18</h1>
            <h1 id="Asignatura "> </h1>
            </div>
            <div>
            <h1 id="viernes1820"> 18-20</h1>
            <h1 id="Asignatura "> </h1>
        </div>
        </div>
        
    
    <section>
    `
