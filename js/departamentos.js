const botonesDepartamento=async()=>{
  
    const contenedordepartamentos =document.getElementById('OpcionesDepartamentos');
    contenedordepartamentos.innerHTML = `
      <form>
          <button class="botonsDepartamentos" id="botoncrearDepartamento"type="button" onclick="formularioCrearDEpartamento()">Crear Departamentos</button>
          <button class="botonsDepartamentos" id="botonmodificarDepartamento" type="button" onclick="()">Modificar Departamentos</button>
          <button class="botonsDepartamentos" id="botonmostrarListado" type="button" onclick="mostrarListado()">Ver Listado de Deprtamentos</button>
          <div id="departamentoss"></div>
          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
          
      </form>`;
   
      stylesContenedorNuevo(contenedordepartamentos);
      limpiarpantalla();


}
const formularioCrearDEpartamento= async()=>{
    const boton1= document.getElementById('botoncrearDepartamento');
    const boton2 = document.getElementById('botonmodificarDepartamento')
    const boton3 = document.getElementById('botonmostrarListado')
    const contenedorestu = document.getElementById('departamentoss');
    contenedorestu.innerHTML = `
      <form id="MenuCrearDepartamento">
        <h3>Menu Crear Departamentos</h3>
        <label for="identificacionDepartamento">Numero de Identificacion del Departamento:</label>
        <input type="number" id="identificacionDepartamento" required>
        <label for="nombreDepartamento">Nombre del Departamento:</label>
        <input type="text" id="nombreDepartamento" required>
        <button id="atras" class="atras" onclick="botonesdepartamento()">atras</button>
        
      </form>
  `;
    const atras=document.getElementById('atras');
    atras.style.display = 'none';
   boton1.style.display='none';
   boton2.style.display='none';
   boton3.style.display='none' ;
   await creardepartamentos();
   
}

const creardepartamentos= async ()=>{
    const nombreInput=document.getElementById('nombreDepartamento');
    const IdInput=document.getElementById('identificacionDepartamento')

    const nombre=nombreInput.value;
    const Id=IdInput.value;

    const nuevo={
        id:listaDepartamentos.length+1,
        identificaion:Id,
        nombre:nombre,
    }

  
    await guardar(nuevo);
    await loadEstudiantes();
    
    IdInput.value='';
    nombreInput.value='';

    alert('Departamento creado con éxito!');

    return nuevo;

}

const modificarDepartamento =async()=>{
    const boton1= document.getElementById('botoncrearDepartamento');
    const boton2 = document.getElementById('botonmodificarDepartamento');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorestu = document.getElementById('crearEDepartamento');
    boton1.style.display='none';
    boton2.style.display='none';
    boton3.style.display='none';
    
    verificarDepartamentos();
    if (Estado==='Encontrado'){
        contenedorestu.innerHTML = `
      <form id="MenuModificarEDepartamento">
        <h3>Menu Modificar EDepartamentos</h3>
        <h3>Seleccione el item que desea modificar</h3>
        
        <button for="identificacionEDepartamento" onclick="modificarIdentificacionDepartamento()">Numero de Identificacion del Departamento:</button>
        
        <button for="nombreEDepartamento" onclick="modificarNombreDepartamento()">Nombre del Departamento:</button>
        
        
        <button id="atras" class="atras" onclick="botonesdepartamento()">atras</button>
        
      </form>
  `;
    }

}
const verificarDepartamentos= async=()=>{
    const Estado='';
    const nombre=document.getElementById('nombreDepartamento')
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
      <form id="MenuModificarEstudiante">
        <h3>Menu Mofificar Departamento</h3>
        <label for="nombreDepartamento">Nombre del Departamento:</label>
        <input type="number" id="nombreDepartamento" required>
      </form>
  `;
    for ( const estudiante of listaEstiudiantes){
        if (estudiante[identificaion]===nombre){
            alert('Estudiante Encontrado!');
            Estado='Encontrado'
        }
        else{
            alert('No se encontro el Departamento!')
        }
    }

    return [Estado, Departamentos]
}
const modificarIdentificacionDepartamento=()=>{
    const contenedorestu = document.getElementById('Departamentos');
    contenedorestu.innerHTML = `
    <form id="MenuModificarDepartamento">
    <h3>Menu modificar Identificacion</h3>
    <label for="identificacionDepartamento">Numero de Identificacion del Departamento:</label>
    <input type="number" id="identificacionDepartamento" required>
    
    <button type="button" onclick="GuardarModificionDepartamento()">Guardar Modificion Departamento</button>
    
    
        
    <button id="atras" class="atras" onclick="modificarDepartamento()">atras</button>
    </form>

    `;
}
const modificarNombreDepartamento=()=>{
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
    <form id="MenuModificarDepartamento">
    <h3>Menu modificar Nombre</h3>
    <label for="nombreEstudiante">Nombre del Departamento:</label>
    <input type="text" id="nombreDepartamento" required></input>
    
    <button type="button" onclick="GuardarModificionDepartamento()">Guardar Modificion Departamento</button>
    
        
    <button id="atras" class="atras" onclick="modificarDepartamento()">atras</button>
    </form>
    `;
}

