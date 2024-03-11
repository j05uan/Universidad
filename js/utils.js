const limpiarpantalla=()=>{
    
    listadeID=["botonDepartamentos", "botonEstudiantes","botonProsfesores","botonTarifas","botonAsignaturas","botonPeriodos","botonProgramas","botonCursos","botonSalones","botonMatriculas"];

    listadeID.forEach(seccion => {
8
        document.getElementById(seccion).style.display='none';
            
               
    });

    
}
const stylesContenedorNuevo=(valor)=>{
    console.log(valor)
    valor.style.alignContent='center';
    valor.style.display='flex';
    valor.style.flexDirection='column';
    valor.style.width='550px';
    valor.style.height='630px';
    valor.style.justifyContent='center';
    valor.style.padding='2rem ';
    valor.style.gap='2em ';
    valor.style.overfloow='hidden';

}
const nuevosstyles=()=>{
    const contenedor = document.getElementById('contenidoContenedor')
    contenedor.style.display= 'grid';
    contenedor.style.gridTemplateColumns= 'repeat(3,1fr)';
    contenedor.style.gap= '10rem';
    contenedor.style.backgroundColor= 'antiquewhite';
    contenedor.style.width='auto';
    contenedor.style.height='auto';
    contenedor.style.padding='0';
}

const volverInicio=()=>{
        const contenido=document.getElementById('contenidoContenedor');
        contenido.innerHTML=`
                <section class="secciones" id="Departamentos">
                    <div id="botonDepartamentos">
                        <button onclick="botonesDepartamento()" >Departamentos</button>
                    </div>
                    <div class="Informacion" id="OpcionesDepartamentos">
                        <h2> En la Universidad Carmen Felisa Amaya Ronderos nos especializamos  </h2>
                    </div>
                </section>
                <section class="secciones" id="Estudiantes">
                    <div  id="botonEstudiantes">
                        <button onclick="opcionesEstudiantes()">Estudiantes</button>
                    </div>
                    <div class="Informacion" id="OpcionesEstudiantes">
                    </div>
                </section>
                <section class="secciones" id="Prosfesores">
                    <div id="botonProsfesores">
                        <button onclick="botonesProfesor()" >Prosfesores</button>
                    </div>
                    <div class="Informacion" id="OpcionesProfesores">
                    </div>
                </section >
                <section class="secciones" id="Tarifas">
                    <div id="botonTarifas">
                        <button onclick="botonesTarifas()">Tarifas</button>
                    </div>
                    <div class="Informacion" id="opcionesTarifas">
                    </div>
                </section >
                <section class="secciones" id="Asignaturas">
                    <div id="botonAsignaturas">
                        <button onclick="botonesAsignatura()" >Asignaturas</button>
                    </div>
                    <div class="Informacion" id="opcionesAsignaturas">
                    </div>
                </section >
                <section class="secciones" id="Periodos">
                    <div id="botonPeriodos">
                        <button onclick="botonesPeriodos()" >Periodos</button>
                    </div>
                    <div class="Informacion" id="OpcionesPeriodos">
                    </div>
                </section >
                <section class="secciones" id="Programas">
                    <div id="botonProgramas">
                        <button onclick="botonesProgramas()" >Programas</button>
                    </div>
                    <div class="Informacion" id="opcionesProgramas">
                    </div>
                </section >
                <section class="secciones" id="Cursos">
                    <div id="botonCursos">
                        <button  onclick="botonesCursos()">Cursos</button>
                    </div >
                    <div class="Informacion" id="opcionesCursos">
                    </div>
                </section >
                <section class="secciones" id="Salones">
                    <div id="botonSalones">
                        <button  onclick="botonesSalones()">Salones</button>
                    </div class="Informacion">
                    <div class="Informacion" id="opcionesSalones">
                    </div>
                </section>
                <Section class="secciones" id="Maticulas">
                    <div id="botonMatriculas">
                        <button onclick="botonesMatriculas()">Matriculas</button>
                    </div>
                    <div class="Informacion" id="OpcionesMatriculas">
                    </div>

                </Section>

            </Section>
            `;
            nuevosstyles()
}
const Ingresar=()=>{
    document.getElementById('inicio').style.display='flex';
    document.getElementById('paginaprincipal').style.display='none'
}

//const estudiantes = estudiantesInput.value.split(',');  Convertir la cadena de estudiantes separada por comas en un array