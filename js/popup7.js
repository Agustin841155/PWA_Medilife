var btnAbrirPopup7 = document.getElementById('btn-abrir-popup7'),
overlay7 = document.getElementById('overlay7'),
popup7 = document.getElementById('popup7'),
btnCerrarPopup7 = document.getElementById('btn-cerrar-popup7');

btnAbrirPopup7.addEventListener('click', function(){
overlay7.classList.add('active');
popup7.classList.add('active');
});

btnCerrarPopup7.addEventListener('click', function(e){
e.preventDefault();
overlay7.classList.remove('active');
popup7.classList.remove('active');
});