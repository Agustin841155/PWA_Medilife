var btnAbrirPopup8 = document.getElementById('btn-abrir-popup8'),
overlay8 = document.getElementById('overlay8'),
popup8 = document.getElementById('popup8'),
btnCerrarPopup8 = document.getElementById('btn-cerrar-popup8');

btnAbrirPopup8.addEventListener('click', function(){
overlay8.classList.add('active');
popup8.classList.add('active');
});

btnCerrarPopup8.addEventListener('click', function(e){
e.preventDefault();
overlay8.classList.remove('active');
popup8.classList.remove('active');
});