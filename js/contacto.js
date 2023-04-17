document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var response = document.getElementById('response');
  
    // Validar que los campos no estén vacíos
    if (name === '' || email === '' || message === '') {
      response.innerHTML = 'Por favor, completa todos los campos';
    } else {
      // Enviar el formulario utilizando EmailJS
      emailjs.send('1719110184@utectulancingo.edu.mx', 'tu_plantilla_id', {name: name, email: email, message: message})
        .then(function(response) {
          console.log('Correo enviado', response);
          response.innerHTML = '¡Correo enviado con éxito!';
        }, function(error) {
          console.error('Error al enviar el correo', error);
          response.innerHTML = 'Error al enviar el correo';
        });
    }
  });
  