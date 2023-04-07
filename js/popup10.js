var btnAbrirPopup10 = document.getElementById('btn-abrir-popup10'),
overlay10 = document.getElementById('overlay10'),
popup10 = document.getElementById('popup10'),
btnCerrarPopup10 = document.getElementById('btn-cerrar-popup10');

btnAbrirPopup10.addEventListener('click', function(){
overlay10.classList.add('active');
popup10.classList.add('active');
});

btnCerrarPopup10.addEventListener('click', function(e){
e.preventDefault();
overlay10.classList.remove('active');
popup10.classList.remove('active');
});