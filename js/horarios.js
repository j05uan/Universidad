let listahorarios=[]

const crearHorarios=(valor)=>{

    let salonesdisponible=valor
    if(salonesdisponible>0){
        const nuevohorario={
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
    salonesdisponible--;
    listahorarios.push(nuevohorario);
    }
}

const agregarAsignaturasAlHorario=()=>{
    const contenedor=document.getElementById('');
    contenedor.innerHTML=`
    <form id="MenuAgregarAsignaturasAHorario">
    <h3>Menu Agregar Asignaturas al Horario</h3>
        <label for="NombreAsignatura"> Nombre de la Asignatura:</label>
        <input type="text" id="NombreAsignatura" required>
        <label for="NumeroHoras">Número de Horas para materia:</label>
        <input type="number" id="NumeroHoras" required>
        <button type="button" onclick="verificardisponibilidad()">Siguiente</button>
        <button id="atras" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
    </form>
  `;
}
const verificardisponibilidad=()=>{
    let dispoibles=-1;
    let mostrarHorasDisponibles=[];
    let horariosDisponibles=[];
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
        let nuevohorarioDisponible={
            dia:dias,
            horas:horariosDisponibles
        }
        mostrarHorasDisponibles.push(nuevohorarioDisponible);
    }
    return mostrarHorasDisponibles;
}

 let horario=`<section id="horario">
        <div>
            <h1 id="lunes">lunes</h1>
            <h1 id="lunes68"> 6-8</h1>
            <h1 id="lunes810"> 8-10</h1>
            <h1 id="lunes1012"> 10-12</h1>
            <h1 id="lunes1214">Almuerzo</h1>
            <h1 id="lunes1416"> 14-16</h1>
            <h1 id="lunes1618"> 16-18</h1>
            <h1 id="lunes1820"> 18-20</h1>
        </div>
        <div>
        <!-- martes -->
            <h1 id="martes">Martes</h1>
            <h1 id="martes68"> 6-8</h1>
            <h1 id="martes810"> 8-10</h1>
            <h1 id="martes1012"> 10-12</h1>
            <h1 id="martes1214">Almuerzo</h1>
            <h1 id="martes1416"> 14-16</h1>
            <h1 id="martes1618"> 16-18</h1>
            <h1 id="martes1820"> 18-20</h1>   
        </div>
        <div>         
        <!-- miercoles -->
            <h1 id="miercoles">miercoles</h1>
            <h1 id="miercoles68"> 6-8</h1>
            <h1 id="miercoles810"> 8-10</h1>
            <h1 id="miercoles1012"> 10-12</h1>
            <h1 id="miercoles1214">Almuerzo</h1>
            <h1 id="miercoles1416"> 14-16</h1>
            <h1 id="miercoles1618"> 16-18</h1>
            <h1 id="miercoles1820"> 18-20</h1>
        </div>
        <div>
        <!-- jueves -->
            <h1 id="jueves">jueves</h1>
            <h1 id="jueves68"> 6-8</h1>
            <h1 id="jueves810"> 8-10</h1>
            <h1 id="jueves1012"> 10-12</h1>
            <h1 id="jueves1214">Almuerzo</h1>
            <h1 id="jueves1416"> 14-16</h1>
            <h1 id="jueves1618"> 16-18</h1>
            <h1 id="jueves1820"> 18-20</h1>
        </div>
        <div>
        <!-- viernes -->
            <h1 id="viernes">viernes</h1>
            <h1 id="viernes68"> 6-8</h1>
            <h1 id="viernes810"> 8-10</h1>
            <h1 id="viernes1012"> 10-12</h1>
            <h1 id="viernes1214">Almuerzo</h1>
            <h1 id="viernes1416"> 14-16</h1>
            <h1 id="viernes1618"> 16-18</h1>
            <h1 id="viernes1820"> 18-20</h1>
        </div>
    
    <section>
    `
