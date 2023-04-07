var btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
overlay5 = document.getElementById('overlay5'),
popup5 = document.getElementById('popup5'),
btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5');

btnAbrirPopup5.addEventListener('click', function(){
overlay5.classList.add('active');
popup5.classList.add('active');
});

btnCerrarPopup5.addEventListener('click', function(e){
e.preventDefault();
overlay5.classList.remove('active');
popup5.classList.remove('active');
});