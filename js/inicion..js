const estudiantes=()=>{
    alert('Profesor/Administrativo. Usuario: Camilito Contraseña: 123')
    const boton2=document.getElementById('ingresoEstudiante');
    const boton3=document.getElementById('ingresoProfesor');
    
    const sectioncontraseña=document.getElementById('contraseña');
    const inicio=document.getElementById('inicio')
    sectioncontraseña.innerHTML= `
    <form class="sectiocontraseñas" id="contraseñaestudiante">
            <h3>Ingrese Usuario y Contraseña</h3>
            <label for="UsuarioEstudiante">Ingrese Usuario:</label>
            <input type="text" id="UsuarioEstudiante" required>
            <label for="contraseñaEstudiante">Ingrese Contraseña:</label>
            <input type="password" id="contraseñaEstudiante" required>
            <button type="button" onclick="verificaringreso()">Ingresar</button>
        
    </form>`;
    document.getElementById("contraseñaEstudiante").addEventListener("keypress",(event) =>{
        if(event.key === "Enter"){
            verificaringreso()
        }
    })
    boton2.style.display='none';
    boton3.style.display='none';
    
    sectioncontraseña.style.display='flex';
    inicio.style.display='none';
    
    
}

const verificaringreso = async () => {
    const usuario = document.getElementById('UsuarioEstudiante').value;
    const contraseña = document.getElementById('contraseñaEstudiante').value;
    const Us = 'Juan López';
    const con = 'juancrackencampus';
    const us2= 'Camilito';
    const con2='123';

    if (usuario === Us && contraseña === con) {
        alert('Usuario correcto');
        await inicio();
    } else if (usuario === us2 && contraseña === con2) {
        alert('Usuario correcto');
        await inicio()} else{
        alert('Usuario o Contraseña incorrecto');
    }
};

const inicio=async()=>{
    const sectioncontraseña=document.getElementById('contraseña');
    main=document.getElementById('main');
    sectioncontraseña.style.display='none';
    main.style.display='block';

}
