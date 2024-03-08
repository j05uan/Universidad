const limpiarpantalla=()=>{
    
    listadeID=["botonDepartamentos", "botonEstudiantes","botonProsfesores","botonTarifas","botonAsignaturas","botonPeriodos","botonProgramas","botonCursos","botonSalones"]

    listadeID.forEach(seccion => {

        document.getElementById(seccion).style.display='none'
            
               
    });

    
}
const stylesContenedorNuevo=(valor)=>{
    console.log(valor)
    valor.style.alignContent='center';
    valor.style.display='block';
    valor.style.width='550px';
    valor.style.height='630px';
    valor.style.justifyContent='center';
    valor.style.padding='2rem ';
    valor.style.gap='2em ';

}

const volverInicio=()=>{
    listadeID=["botonDepartamentos", "botonEstudiantes","botonProsfesores","botonTarifas","botonAsignaturas","botonPeriodos","botonProgramas","botonCursos","botonSalones"]

    listadeID.forEach(seccion => {
        const contenido=document.getElementById('contenidoContenedor');
        contenido.innerHTML=`
 
            <section class="secciones" id="${valor}">
                <div id="boton${valor}">
                    <button onclick="botones${valor}()" >${valor}</button>
                </div>
                <div class="Informacion" id="Opciones${valor}">
                    
                </div>
            </section> `;
            
             
    });
}
const Ingresar=()=>{
    document.getElementById('inicio').style.display='flex';
    document.getElementById('paginaprincipal').style.display='none'
}
