const listadepartamentos=[];

const loaddepartamentos=async()=>{
    try{
        listadepartamentos.length=0;
        const respuesta=await fetch('http://localhost:3000/departamentos');

        if(!respuesta.ok){
           throw new Error('Error al cargar departamentos. Estado: ',respuesta.status);
        }
        const departamento=await respuesta.json();
        listadepartamentos.push(...departamento);;

    }catch(error){
        console.error("Error al cargar departamentos",error.message);
    }
}


const guardarDEpartamentos= async(nuevoDepartamento)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/departamentos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoDepartamento),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear la departamento. Estado: ',respuesta.status);
        }
        const departamentoCreado=await respuesta.json();
       
        
        console.log('Departamento creado:', departamentoCreado);

    }catch(error){
        console.error("Error al cargar Departamento",error.message);
    }
}
const botonesDepartamento=async()=>{
    
    const contenedordepartamentos =document.getElementById('contenidoContenedor');
    contenedordepartamentos.innerHTML = `
      <form>
          <button class="botonsDepartamentos" id="botoncrearDepartamento"type="button" onclick="formularioCrearDEpartamento()">Crear Departamentos</button>
          <button class="botonsDepartamentos" id="botonmodificarDepartamento" type="button" onclick="modificarDepartamento()">Modificar Departamentos</button>
          <button class="botonsDepartamentos" id="botonmostrarListado" type="button" onclick="mostrarListadoDepartamentos()">Ver Listado de Deprtamentos</button>
          <div id="crearDepartamento"></div>
          <button id="atras" class="botonsDepartamentos" onclick="volverInicio()">atras</button>
          
      </form>`;
   
      stylesContenedorNuevo(contenedordepartamentos);
      document.getElementById('botonDepartamentos').style.display='none';
      document.getElementById('botonEstudiantes').style.display='none';
      document.getElementById('botonProsfesores').style.display='none';
      document.getElementById('botonTarifas').style.display='none';
      document.getElementById('botonAsignaturas').style.display='none';
      document.getElementById('botonPeriodos').style.display='none';
      document.getElementById('botonProgramas').style.display='none';
      document.getElementById('botonCursos').style.display='none';
      document.getElementById('botonSalones').style.display='none';
      document.getElementById('botonMatriculas').style.display='none';

}
const formularioCrearDEpartamento= async()=>{
    const boton1= document.getElementById('botoncrearDepartamento');
    const boton2 = document.getElementById('botonmodificarDepartamento')
    const boton3 = document.getElementById('botonmostrarListado')
    const contenedorestu = document.getElementById('crearDepartamento');
    contenedorestu.innerHTML = `
      <form id="MenuCrearDepartamento">
        <h3>Menu Crear Departamentos</h3>
        <label for="nombreDepartamento">Nombre del Departamento:</label>
        <input type="text" id="nombreDepartamento" required>
        <button type="button" onclick="creardepartamentos()">Crear Departamentos</button>    
        <button id="atras1" class="atras" onclick="botonesDepartamento()">atras</button>

        
      </form>
  `;
    const atras=document.getElementById('atras');
    atras.style.display = 'none';
   boton1.style.display='none';
   boton2.style.display='none';
   boton3.style.display='none' ;
   ;
}

const creardepartamentos= async ()=>{
    const nombreInput=document.getElementById('nombreDepartamento');
    const nombre=nombreInput.value; 
    const nuevo={
        id:listadepartamentos.length+1,
        nombre:nombre,
    }
    await guardarDEpartamentos(nuevo);
    await loaddepartamentos(); 
    IdInput.value='';
    alert('Departamento creado con éxito!');
    return nuevo;
}

const modificarDepartamento =async()=>{
    const boton1= document.getElementById('botoncrearDepartamento');
    const boton2 = document.getElementById('botonmodificarDepartamento');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorestu = document.getElementById('crearDepartamento');
    const atras=document.getElementById('atras1');
    atras.style.display = 'none';
    boton1.style.display='none';
    boton2.style.display='none';
    boton3.style.display='none';
    
    verificarDepartamentos();
    if (Estado==='Encontrado'){
        contenedorestu.innerHTML = `
      <form id="MenuModificarEDepartamento">
        <h3>Menu Modificar EDepartamentos</h3>
        <h3>Seleccione el item que desea modificar</h3>

        
        <button for="nombreEDepartamento" onclick="modificarNombreDepartamento()">Nombre del Departamento:</button>
        
        
        <button id="atras" class="atras" onclick="botonesdepartamento()">atras</button>
        
      </form>
  `;
    }

}
const verificarDepartamentos= async=()=>{
    const Estado='';
    const nombre=document.getElementById('nombreDepartamento')
    const contenedorestu = document.getElementById('crearDepartamento');
    contenedorestu.innerHTML = `
      <form id="MenuModificarDepartamento">
        <h3>Menu Mofificar Departamento</h3>
        <label for="nombreDepartamento">Nombre del Departamento:</label>
        <input type="number" id="nombreDepartamento" required>
      </form>
  `;
    for ( const departamento of listadepartamentos){
        if (departamento[identificaion]===nombre){
            alert('Departamento Encontrado!');
            Estado='Encontrado'
        }
        else{
            alert('No se encontro el Departamento!')
        }
    }

    return [Estado, Departamentos]
}
const modificarNombreDepartamento=()=>{
    const contenedorestu = document.getElementById('crearDepartamento');
    contenedorestu.innerHTML = `
    <form id="MenuModificarDepartamento">
    <h3>Menu modificar Nombre</h3>
    <label for="newnombreDepartamento">Nombre del Departamento:</label>
    <input type="text" id="newnombreDepartamento" required></input>
    
    <button type="button" onclick="GuardarModificionDepartamento()">Guardar Modificion Departamento</button>
    
        
    <button id="atras" class="atras" onclick="guardarModificacionDepartamentos()">atras</button>
    </form>
    `;
};
const guardarModificacionDepartamentos = async (valor) => {
    const newnombreDepartamento = document.getElementById('newnombreDepartamento').value;
  

  
        const objetoModificado = {
          nombre: newnombreDepartamento,
        };
  
        fetch('http://localhost:3000/departamento/' + departamento.id, {
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
      
    ;
  
    alert('Modificación del curso guardada con éxito!');
  }
const mostrarListadoDepartamentos = async () => {
    await loaddepartamentos();
    const contenedor2 = document.getElementById('crearDepartamento');
    stylesContenedorNuevo(contenedor2);
    const listadoDepartamentos = document.getElementById('crearDepartamento');
    listadoDepartamentos.style.display = 'flex';
    
    const ul = document.createElement("ul");

    for (const Departamento of listadepartamentos) {
        const li = document.createElement('li');
        li.textContent = `ID: ${Departamento.id}, identificaion: ${Departamento.identificaion}, nombre: ${Departamento.nombre}`;
        ul.appendChild(li);
    }
    listadoDepartamentos.innerHTML = '';
    listadoDepartamentos.appendChild(ul);

    const volverButton = document.createElement('button');
    volverButton.textContent = 'Volver al Formulario';
    volverButton.addEventListener('click', volverFormularioDepartamentos);
    listadoDepartamentos.appendChild(volverButton);
}

const volverFormularioDepartamentos = () => {
    const DepartamentosForm = document.getElementById('crearDepartamento');
    const listadoDepartamentos = document.getElementById('crearDepartamento');

    listadoDepartamentos.style.display = 'none';
    DepartamentosForm.style.display = 'block';
}




