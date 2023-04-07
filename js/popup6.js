var btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
overlay6 = document.getElementById('overlay6'),
popup6 = document.getElementById('popup6'),
btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6');

btnAbrirPopup6.addEventListener('click', function(){
overlay6.classList.add('active');
popup6.classList.add('active');
});

btnCerrarPopup6.addEventListener('click', function(e){
e.preventDefault();
overlay6.classList.remove('active');
popup6.classList.remove('active');
});