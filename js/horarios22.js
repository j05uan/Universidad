// const listaHorarios = [];

// const loadHorarios = async () => {
//     try {
//         listaHorarios.length = 0;
//         const respuesta = await fetch('http://localhost:3000/horarios');

//         if (!respuesta.ok) {
//             throw new Error('Error al cargar Horarios. Estado: ' + respuesta.status);
//         }
//         const horario = await respuesta.json();
//         listaHorarios.push(...horario);

//     } catch (error) {
//         console.error("Error al cargar Horario", error.message);
//     }
// };

// const guardarHorario = async (nuevoHorario) => {
//     try {
//         const respuesta = await fetch('http://localhost:3000/horarios', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(nuevoHorario),
//         });

//         if (!respuesta.ok) {
//             throw new Error('Error al crear el horario. Estado: ' + respuesta.status);
//         }
//         const horarioCreado = await respuesta.json();
//         console.log('Horario creado:', horarioCreado);

//     } catch (error) {
//         console.error("Error al crear Horario", error.message);
//     }
// };

// const opcionesHorarios = async () => {
//     const contenedor2 = document.getElementById('contenidoContenedor');
//     contenedor2.innerHTML = `
//       <form>
//           <button class="botonsHorarios" id="botoncrearHorario" type="button" onclick="crearHorario()">Crear Horario</button>
//           <div id="crearHorario"></div>
//           <button id="atras" class="atras" onclick="volverInicio()">Atrás</button>
//       </form>`;
//     stylesContenedorNuevo(contenedor2);
// };

// const crearHorario = async () => {
//     const nuevoHorario = {
//         horario: {
//             lunes: {"6-8": "", "8-10": "", "10-12": "Almuerzo", "14-16": "", "16-18": "", "18-20": ""},
//             martes: {"6-8": "", "8-10": "", "10-12": "Almuerzo", "14-16": "", "16-18": "", "18-20": ""},
//             miercoles: {"6-8": "", "8-10": "", "10-12": "Almuerzo", "14-16": "", "16-18": "", "18-20": ""},
//             jueves: {"6-8": "", "8-10": "", "10-12": "Almuerzo", "14-16": "", "16-18": "", "18-20": ""},
//             viernes: {"6-8": "", "8-10": "", "10-12": "Almuerzo", "14-16": "", "16-18": "", "18-20": ""}
//         }
//     };

//     await guardarHorario(nuevoHorario);
//     await loadHorarios();
//     alert('Horario creado con éxito!');
// };

// const verificarDisponibilidad = () => {
//     let disponibles = 0;
//     let mostrarHorasDisponibles = [];
//     let horariosDisponibles = [];
//     let permiso = false;

//     for (const diccionario of listaHorarios) {
//         for (const dias in diccionario.horario) {
//             for (const horasDisponibles in dias) {
//                 if (horasDisponibles === "") {
//                     alert('Se encontraron Horarios Disponibles');
//                     horariosDisponibles.push(...horasDisponibles);
//                     disponibles++;
//                 } else {
//                     alert('No hay horarios Disponibles porque no hay suficientes salones, intenta agregar nuevos salones para obtener mas opciones de matriculas');
//                 }
//             }
//         }
//     }

//     if (disponibles > 0) {
//         permiso = true;
//         let nuevoHorarioDisponible = {
//             dia: dias,
//             horas: horariosDisponibles
//         };
//         mostrarHorasDisponibles.push(nuevoHorarioDisponible);
//     }

//     return mostrarHorasDisponibles, permiso;
// };

// const verificarAsignaturas = async (codigo) => {
//     const contenedor1 = document.getElementById('contenidoContenedor');
//     const listaAsignaturas = [];

//     await loadAsignaturas();

//     listaAsignaturas.forEach(Asignatura => {
//         if (Asignatura.codigo === codigo) {
//             alert('Ya hay una asignatura con el nombre, ¿deseas Agregar un duplicado?');
//             contenedor1.innerHTML = `
//             <form>
//                 <h1>¿Deseas Agregar un duplicado?</h1>
//                 <button class="" id="" type="button" onclick="">Crear Duplicado</button>
//                 <button class="" id="" type="button" onclick="">Ver el Horario de la Asignatura creada</button>
//                 <div id="VerHorario"></div>
//                 <div id="AsignarHorario"></div>
//                 <button id="atras" class="atras" onclick="">Atrás</button>
//             </form>`;
//         } else if (Asignatura.codigo !== codigo) {
//             contenedor1.innerHTML = `
//             <form>
//                 <h1>Agregar Horario A las Asignaturas</h1>
//                 <button class="botonsTarifas" id="botoncrearTarifa" type="button" onclick="">Continuar</button>
//                 <div id="VerHorario"></div>
//                 <div id="AsignarHorario"></div>
//                 <button id="atras" class="atras" onclick="">Atrás</button>
//             </form>`;
//         }
//     });
// };

// const agregarAsignaturasAlHorario = async (valor) => {
//     let diccionarioAsignaturasHorarios = {
//         Id: "",
//         horario: {
//             Asignaturalunes68: "", Asignaturalunes810: "", Asignaturalunes1012: "",
//             Asignaturalunes1214: "", Asignaturalunes1416: "", Asignaturalunes1618: "", Asignaturalunes1820: "",
//             Asignaturamartes68: "", Asignaturamartes810: "", Asignaturamartes1012: "", Asignaturamartes1214: "",
//             Asignaturamartes1416: "", Asignaturamartes1618: "", Asignaturamartes1820: "", Asignaturamiercoles68: "",
//             Asignaturamiercoles810: "", Asignaturamiercoles1012: "", Asignaturamiercoles1214: "", Asignaturamiercoles1416: "",
//             Asignaturamiercoles1618: "", Asignaturamiercoles1820: "", Asignaturajueves68: "", Asignaturajueves810: "",
//             Asignaturajueves1012: "", Asignaturajueves1214: "", Asignaturajueves1416: "", Asignaturajueves1618: "",
//             Asignaturajueves1820: "", Asignaturaviernes68: "", Asignaturaviernes810: "", Asignaturaviernes1012: "",
//             Asignaturaviernes1214: "", Asignaturaviernes1416: "", Asignaturaviernes1618: "", Asignaturaviernes1820: ""
//         }
//     };

//     let pos = listaAsignaturas.indexOf(valor);

//     if (pos === -1) {
//         listaAsignaturas.push(valor);
//     }

//     diccionarioAsignaturasHorarios.Id = pos;
//     diccionarioAsignaturasHorarios.horario["Asignatura" + valor.dia + valor.hora] = valor;

//     await verificarAsignaturas(valor.codigo);

//     const contenedor3 = document.getElementById('contenidoContenedor');
//     contenedor3.innerHTML = `
//     <form>
//         <button class="botonsHorarios" id="botonCrearHorario" type="button" onclick="">Crear Horario</button>
//         <button class="botonsHorarios" id="botonCrearHorario" type="button" onclick="">Ver Horario Creado</button>
//         <div id="horariosDisponibles"></div>
//         <button id="atras" class="atras" onclick="">Atrás</button>
//     </form>`;
// };

// const volverInicio = async () => {
//     const contenedorInicio = document.getElementById('contenidoContenedor');
//     contenedorInicio.innerHTML = `
//     <form>
//         <button class="botonsHorarios" id="botonCrearHorario" type="button" onclick="">Crear Horario</button>
//         <button class="botonsHorarios" id="botonVerHorario" type="button" onclick="">Ver Horario</button>
//     </form>`;
// };

// const stylesContenedorNuevo = (contenedor) => {
//     contenedor.style.display = 'flex';
//     contenedor.style.flexDirection = 'column';
//     contenedor.style.alignItems = 'center';
//     contenedor.style.marginTop = '50px';
// };

// loadHorarios();
