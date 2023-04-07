var btnAbrirPopup9 = document.getElementById('btn-abrir-popup9'),
overlay9 = document.getElementById('overlay9'),
popup9 = document.getElementById('popup9'),
btnCerrarPopup9 = document.getElementById('btn-cerrar-popup9');

btnAbrirPopup9.addEventListener('click', function(){
overlay9.classList.add('active');
popup9.classList.add('active');
});

btnCerrarPopup9.addEventListener('click', function(e){
e.preventDefault();
overlay9.classList.remove('active');
popup9.classList.remove('active');
});