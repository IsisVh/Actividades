const cuadro=document.querySelector('#miId'); //recupera el valor del ID
cuadro.textContent="Este texto viene desde JavaScript";

const contenedor=document.querySelector('.miClase'); //recupera el valor del ID
contenedor.textContent = "Este texto viene desde JavaScript tambien";

function logEvent(event){
    console.log('El evento ${event.type} fue disparado');
}

function agregarClase(event){
    contenedor.classList.add('claseNueva')
}

//Agregar un evento de mouse
cuadro.addEventListener('click', () => {
    cuadro.innerText="Hiciste click en el contenedor"
});

cuadro.addEventListener('dblclick', () => {
    cuadro.textContent="";
});

cuadro.addEventListener('mouseover',logEvent);
cuadro.addEventListener('mousedown',logEvent);
cuadro.addEventListener('mouseup',logEvent);
cuadro.addEventListener('mousemove',logEvent);
cuadro.addEventListener('mouseout',logEvent);

contenedor.addEventListener('click, agregarClase')