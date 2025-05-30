const usuarios = [
    {
      id: 1,
      nombre: "Carlos",
      apellido: "Hernández",
      correo: "carlos.hernandez@example.com",
      telefono: "123-456-7890",
      comentario: "Usuario activo desde 2022."
    },
    {
      id: 2,
      nombre: "Luisa",
      apellido: "Martínez",
      correo: "luisa.martinez@example.com",
      telefono: "987-654-3210",
      comentario: "Interesada en nuevos productos."
    },
    {
      id: 3,
      nombre: "Miguel",
      apellido: "Ramírez",
      correo: "miguel.ramirez@example.com",
      telefono: "456-789-1234",
      comentario: "Ha dejado varias reseñas positivas."
    },
    {
      id: 4,
      nombre: "Ana",
      apellido: "Gómez",
      correo: "ana.gomez@example.com",
      telefono: "321-654-9870",
      comentario: "Participa en encuestas mensuales."
    },
    {
      id: 5,
      nombre: "Pedro",
      apellido: "Lopez",
      correo: "pedro.lopez@example.com",
      telefono: "789-123-4567",
      comentario: "Comprador frecuente."
    },
    {
      id: 6,
      nombre: "Laura",
      apellido: "Fernández",
      correo: "laura.fernandez@example.com",
      telefono: "654-789-3210",
      comentario: "Fiel seguidora en redes sociales."
    },
    {
      id: 7,
      nombre: "Diego",
      apellido: "Ruiz",
      correo: "diego.ruiz@example.com",
      telefono: "987-321-6540",
      comentario: "Usuario premium desde 2023."
    },
    {
      id: 8,
      nombre: "Sofia",
      apellido: "Ortega",
      correo: "sofia.ortega@example.com",
      telefono: "123-789-4560",
      comentario: "Frecuentemente solicita soporte técnico."
    },
    {
      id: 9,
      nombre: "Javier",
      apellido: "Mendoza",
      correo: "javier.mendoza@example.com",
      telefono: "321-987-6543",
      comentario: "Amante de las promociones."
    },
    {
      id: 10,
      nombre: "Camila",
      apellido: "Vega",
      correo: "camila.vega@example.com",
      telefono: "456-123-7890",
      comentario: "Satisfecha con el servicio al cliente."
    }
  ];

  tabla=document.querySelector('#Tabla');

  function mostrarModal(){
    document.getElementById("contenedor-formulario").style.display='flex'
  }

  function cerrarFormulario(){
    document.getElementById("contenedor-formulario").style.display='none';
  }

  function crearTabla(){
    var cadena= "<table><thead>";
    cadena=cadena+"<tr><th>ID</th>";
    cadena=cadena+"<th>Nombre</th>";
    cadena=cadena+"<th>Apellido</th>";
    cadena=cadena+"<th>Correo</th>";
    cadena=cadena+"<th>Telefono</th>";
    cadena=cadena+"<th>Comentario</th>";
    cadena=cadena+"<th></th></tr></thead>";
    cadena=cadena+"<tbody>";

    for(const usuario of usuarios){
        cadena=cadena+"<tr>";
        cadena=cadena+"<td>"+usuario.id+"</td>";
        cadena=cadena+"<td>"+usuario.nombre+"</td>";
        cadena=cadena+"<td>"+usuario.apellido+"</td>";
        cadena=cadena+"<td>"+usuario.correo+"</td>";
        cadena=cadena+"<td>"+usuario.telefono+"</td>";
        cadena=cadena+"<td>"+usuario.comentario+"</td>";
        cadena=cadena+"<td><button class='btn' onclick='eliminarFila()'>Eliminar</button></td>";
        cadena=cadena+"</tr>";
    }
    cadena=cadena+"</tbody>";
    cadena=cadena+"</table>";
    Tabla.innerHTML=cadena;
}

crearTabla();

function agregarFila(){
    const id=document.getElementById("id").value;
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const correo=document.getElementById("correo").value;
    const telefono=document.getElementById("telefono").value;
    const comentario=document.getElementById("comentario").value;

    if(id && nombre && apellido && correo && telefono && comentario){
        let contenedor=tabla.getElementsByTagName("tbody")[0];
        const nuevaFila=contenedor.insertRow();

        nuevaFila.innerHTML=`
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${correo}</td>
            <td>${telefono}</td>
            <td>${comentario}</td>
        `;
        document.getElementById("formulario").reset();
    }
    else{
        alert("Los datos no están completos");
    }
}

function eliminarFila(){
    
}