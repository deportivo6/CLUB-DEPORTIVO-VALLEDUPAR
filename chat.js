document.getElementById('send-btn').addEventListener('click', function() {
  let userInput = document.getElementById('user-input').value;
  let chatbotBody = document.getElementById('chatbot-body');

  // Mostrar el mensaje del usuario
  let userMessage = document.createElement('div');
  userMessage.textContent = userInput;
  userMessage.className = 'user-message';
  chatbotBody.appendChild(userMessage);

  // Limpiar el input del usuario
  document.getElementById('user-input').value = '';

  // Agregar respuesta del chatbot
  let chatbotMessage = document.createElement('div');
  chatbotMessage.className = 'chatbot-message';
  chatbotMessage.textContent = getChatbotResponse(userInput);
  chatbotBody.appendChild(chatbotMessage);

  // Desplazar hacia abajo
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
});

document.getElementById('close-chatbot').addEventListener('click', function() {
  document.getElementById('chatbot-container').style.display = 'none';
});

function getChatbotResponse(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput.includes('partidos')) {
    return 'Puedes consultar los horarios de los partidos en el menu de partidos das click y hay esta toda la informacion ';
  } else if (userInput.includes('inscribirme al club')) {
    return 'Para inscribirte al club, visita nuestra página de inscripción y completa el formulario de inscripción.';
  } else if (userInput.includes('contáctanos')) {
    return 'Puedes contactarnos a través de nuestro formulario de contacto en el menu de nosotros de click y llena formulario.';
  } else if (userInput.includes('recuperar contraseña')) {
    return 'Para recuperar tu contraseña, sigue las instrucciones en la página de recuperación de contraseña.';
  } else if (userInput.includes('cuánto cuesta la mensualidad')) {
    return 'La mensualidad cuesta $50.00. Incluye acceso completo a las instalaciones y entrenamientos.';
  } else if (userInput.includes('uniformes')) {
    return 'Los uniformes incluyen camiseta, pantalones cortos y calcetas. Puedes ver más detalles en nuestra página de uniformes.';
  } else if (userInput.includes('dónde se practica')) {
    return 'Las prácticas se realizan en el Estadio Nacional de lunes a viernes, de 6 pm a 8 pm.';
  } else if (userInput.includes('hola')) {
    return 'hola, como estas';
  }else if (userInput.includes('bien')) {
    return 'ok, en que necesitas mi ayuda?';
  }else if (userInput.includes('partidos')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('ok')) {
    return ' aqui estoy para servirte';
  }else if (userInput.includes('como puedo unirme al equipo')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('como me uno')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('quiero unirme al equipo')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('hola como me uno al equipo')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('equipo')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('quiero unirme')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('como hago para unirme ')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('quiero entrar al equipo')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('quiero inscrivirme ')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('quiero inscribirme')) {
    return 'En el menu de nosotros puedes encontrar direccion de la oficina del equipo o al final hay un formulario llenalo con tus datos';
  }else if (userInput.includes('donde estan los horarios de partidos')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('fecha de partidos')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('a que hora juga la sub 15')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('aqui hora juga la sub 17')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('a que hora es el partido ')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('donde es el partido')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('hora del partido ')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('marcador final del partido')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('marcador')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('a que hora el el partido ')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('fecha')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('hora')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('final')) {
    return 'hola, los horarios , fecha y marcador final los puedes encontrar en en menu de partidos';
  }else if (userInput.includes('fotos')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('videos')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos del partido de hoy')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('videos del partido de hoy')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos del partido de ayer')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('videos del partido de ayer')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos y videos del equipo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('videos de equipo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos del equipo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('donde esta las fotos del equipo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('donde puedo encontrar las fotos del equipo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos del gol')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos y videos del campeonato')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos y videos de torneo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos del torneo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('videos del torneo')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('torne videos')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('fotos del partido de hoy')) {
    return 'las fotos y videos las puedes encontrar en la galeria de fotos puedes hacerder a ellas desde el menu de fotos etc';
  }else if (userInput.includes('como puedo recuperar mi contraseña')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('recuperar contraseña')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('cambiar contraseña')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('cambiar correo electronico')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('cambiar nombre')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('perdi mi cuenta')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('perdi mi correo ')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('perdi mi contraseña')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('olvide mi contraseña')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('olvide mi correo')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('olvide mi correo electronico')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('como puedo cambiar mi contraseña ')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('olvide mi contraseña y mi correo electronico')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('quiero cambiar mis datos')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('no me se mi contraseña')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('no me se mi correo electronico')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('no me se mi correo')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('como recupero mi cuenta')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('quiero recuperar mi cuenta')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('como recupero mi cuenta robada')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('como puedo recuperar mi cuenta')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('como puedo cambiar mi contraseña')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (userInput.includes('como puedo cambiar mi correo')) {
    return 'para recuperar tu contraseña, cambiarla y cambios de datos del usuario  hacercate a la oficina del club  ';
  }else if (
    userInput.includes('olvidé mi contraseña') ||
    userInput.includes('cómo cambio mi contraseña') ||
    userInput.includes('cómo recupero mi contraseña') ||
    userInput.includes('no puedo acceder a mi cuenta') ||
    userInput.includes('restablecer contraseña desde el móvil') ||
    userInput.includes('por qué no funciona mi contraseña') ||
    userInput.includes('alguien cambió mi contraseña') ||
    userInput.includes('recuperar cuenta bloqueada') ||
    userInput.includes('cómo puedo cambiar mi correo') ||
    userInput.includes('no puedo iniciar sesión') ||
    userInput.includes('mi cuenta está bloqueada') ||
    userInput.includes('cuántos intentos tengo para iniciar sesión') ||
    userInput.includes('qué hago si pierdo mi correo') ||
    userInput.includes('cómo desbloqueo mi cuenta') ||
    userInput.includes('olvidé las respuestas de seguridad') ||
    userInput.includes('puedo usar la misma contraseña vieja') ||
    userInput.includes('cómo configuro una nueva contraseña') ||
    userInput.includes('qué requisitos tiene la contraseña') ||
    userInput.includes('puedo ver mi contraseña guardada') ||
    userInput.includes('puedo restablecer la contraseña sin correo') ||
    userInput.includes('es obligatorio el correo para recuperar mi cuenta') ||
    userInput.includes('puedo cambiar mi usuario y contraseña juntos') ||
    userInput.includes('cómo evito que mi cuenta sea hackeada') ||
    userInput.includes('mi contraseña fue comprometida') ||
    userInput.includes('cómo sé si mi cuenta está segura') ||
    userInput.includes('olvidé mi usuario') ||
    userInput.includes('dónde restablezco mi contraseña') ||
    userInput.includes('cómo recupero el acceso a mi cuenta bloqueada') ||
    userInput.includes('puedo usar una contraseña temporal') ||
    userInput.includes('dónde cambio mi información personal') ||
    userInput.includes('cómo actualizo mi correo registrado') ||
    userInput.includes('cómo elimino mi cuenta') ||
    userInput.includes('puedo crear una nueva cuenta con el mismo correo') ||
    userInput.includes('qué hago si recibí un correo sospechoso') ||
    userInput.includes('cómo reporto un intento de phishing') ||
    userInput.includes('qué pasa si alguien más usa mi cuenta') ||
    userInput.includes('es seguro usar una red pública para cambiar contraseña') ||
    userInput.includes('mi cuenta no aparece') ||
    userInput.includes('cómo recupero acceso desde otro país') ||
    userInput.includes('mi cuenta fue suspendida') ||
    userInput.includes('por qué necesito cambiar mi contraseña regularmente') ||
    userInput.includes('puedo desactivar la verificación en dos pasos') ||
    userInput.includes('cómo configuro la verificación en dos pasos') ||
    userInput.includes('qué pasa si pierdo mi dispositivo de verificación') ||
    userInput.includes('por qué mi contraseña tiene que ser tan larga') ||
    userInput.includes('mi contraseña no cumple con los requisitos') ||
    userInput.includes('por qué mi cuenta fue desactivada') ||
    userInput.includes('cómo cambio mi pregunta de seguridad') ||
    userInput.includes('cómo borro todos mis datos') ||
    userInput.includes('puedo recuperar mi cuenta sin la pregunta de seguridad') ||
    userInput.includes('cuánto tiempo toma recuperar mi cuenta') ||
    userInput.includes('puedo cambiar mi contraseña desde la app') ||
    userInput.includes('mi cuenta fue hackeada') ||
    userInput.includes('por qué debo confirmar mi correo') ||
    userInput.includes('cómo verifico que mi cuenta está protegida') ||
    userInput.includes('cómo contacto soporte técnico para mi cuenta') ||
    userInput.includes('no encuentro la opción para cambiar contraseña') ||
    userInput.includes('qué es una contraseña segura') ||
    userInput.includes('puedo usar mi huella digital para entrar') ||
    userInput.includes('necesito ayuda con mi cuenta') ||
    userInput.includes('dónde está el enlace para recuperar mi cuenta') ||
    userInput.includes('puedo recuperar mi cuenta desde otro dispositivo') ||
    userInput.includes('me pide código de verificación pero no tengo acceso') ||
    userInput.includes('puedo usar un número de teléfono para recuperar mi cuenta') ||
    userInput.includes('qué pasa si no tengo acceso a mi correo y teléfono') ||
    userInput.includes('mi cuenta fue cerrada') ||
    userInput.includes('cómo evito que suspendan mi cuenta') ||
    userInput.includes('por qué se desactiva mi cuenta automáticamente') ||
    userInput.includes('qué hago si olvidé el PIN de mi cuenta') ||
    userInput.includes('mi cuenta fue bloqueada por intentos fallidos') ||
    userInput.includes('puedo evitar que mi cuenta expire') ||
    userInput.includes('cómo desactivo mi cuenta temporalmente') ||
    userInput.includes('puedo transferir mi cuenta a otra persona') ||
    userInput.includes('qué hago si sospecho actividad no autorizada') ||
    userInput.includes('cómo elimino mi información guardada en otros dispositivos') ||
    userInput.includes('puedo cambiar mi contraseña desde la web') ||
    userInput.includes('cómo creo una contraseña segura') ||
    userInput.includes('cuánto tiempo tengo para cambiar mi contraseña') ||
    userInput.includes('mi correo no está registrado, qué hago') ||
    userInput.includes('puedo recuperar mi cuenta si la eliminé') ||
    userInput.includes('cómo protejo mis datos personales') ||
    userInput.includes('por qué mi sesión se cierra automáticamente') ||
    userInput.includes('cómo puedo cambiar mi número de teléfono') ||
    userInput.includes('puedo agregar otra capa de seguridad a mi cuenta') ||
    userInput.includes('mi cuenta fue eliminada por error') ||
    userInput.includes('dónde reporto un problema con mi cuenta') ||
    userInput.includes('qué pasa si mi contraseña está expuesta en una filtración') ||
    userInput.includes('cómo sé si alguien más está usando mi cuenta') ||
    userInput.includes('qué puedo hacer si no sé cómo recuperar mi contraseña porque olvidé todo lo necesario para hacerlo') ||
    userInput.includes('cómo puedo hacer para entrar en mi cuenta si la bloqueé por intentar varias veces una contraseña incorrecta') ||
    userInput.includes('qué tengo que hacer para cambiar mi contraseña si ya no tengo acceso al correo con el que me registré') ||
    userInput.includes('qué hago si estoy intentando entrar en mi cuenta pero me dice que la contraseña no es válida aunque estoy seguro que es correcta') ||
    userInput.includes('si no puedo acceder a mi cuenta desde mi celular, cómo hago para solucionar este problema lo más rápido posible') ||
    userInput.includes('qué pasos debo seguir si quiero actualizar mis datos personales porque cambié de número de teléfono y dirección de correo') ||
    userInput.includes('cómo se puede recuperar una cuenta que ha sido desactivada por inactividad durante mucho tiempo') ||
    userInput.includes('qué debo hacer si alguien más cambió mi contraseña sin mi permiso y no puedo entrar en mi cuenta') ||
    userInput.includes('es posible recuperar mi cuenta si la eliminé por error y no tengo un respaldo de mis datos') ||
    userInput.includes('cómo hago para saber si mi cuenta está bloqueada o simplemente estoy escribiendo mal mi contraseña') ||
    userInput.includes('cuál es el procedimiento para recuperar mi cuenta si olvidé tanto mi contraseña como el correo registrado') ||
    userInput.includes('qué medidas debo tomar si recibo un correo diciendo que intentaron acceder a mi cuenta sin mi permiso') ||
    userInput.includes('si quiero cambiar mi contraseña, es necesario recordar la contraseña actual o puedo hacerlo sin esa información') ||
    userInput.includes('qué opciones tengo si olvidé todas las preguntas de seguridad y no puedo recuperar mi cuenta') ||
    userInput.includes('cómo puedo saber si mi cuenta está comprometida y alguien más está utilizando mis datos personales') ||
    userInput.includes('puedo recuperar mi cuenta si ya intenté demasiadas veces y ahora aparece como bloqueada') ||
    userInput.includes('qué opciones tengo si necesito cambiar mi contraseña pero el enlace de recuperación no funciona') ||
    userInput.includes('es posible configurar una contraseña que sea la misma que utilicé antes o tengo que usar una completamente diferente') ||
    userInput.includes('si necesito ayuda para recuperar mi cuenta, debo ir a la oficina o puedo hacerlo completamente en línea') ||
    userInput.includes('cómo puedo cambiar mi dirección de correo electrónico registrada en mi cuenta si ya no tengo acceso a la anterior') ||
    userInput.includes('qué hago si no recibo el correo de recuperación de contraseña después de haberlo solicitado varias veces') ||
    userInput.includes('cómo puedo saber si mi cuenta fue desactivada por violar alguna regla o por un error técnico') ||
    userInput.includes('es posible recuperar mi cuenta usando solo mi número de teléfono si olvidé todos los demás datos') ||
    userInput.includes('qué hago si quiero cambiar mi usuario porque ya no me gusta el que tengo registrado en mi cuenta') ||
    userInput.includes('cómo puedo confirmar si mi cuenta está activa o si fue eliminada por inactividad o por error') ||
    userInput.includes('puedo usar un código temporal para entrar a mi cuenta si no recuerdo mi contraseña ni tengo acceso al correo') ||
    userInput.includes('qué hago si no tengo acceso a mi cuenta porque cambié de dispositivo y no recuerdo mis credenciales') ||
    userInput.includes('cómo puedo recuperar una cuenta que fue eliminada hace mucho tiempo y ya no tengo información de acceso') ||
    userInput.includes('puedo restablecer mi contraseña directamente desde la aplicación móvil sin usar un navegador web') ||
    userInput.includes('es necesario ir personalmente a la oficina para cambiar datos de mi cuenta o puedo hacerlo en línea') ||
    userInput.includes('qué hago si quiero eliminar mi cuenta permanentemente pero antes quiero recuperar algunos datos') ||
    userInput.includes('cómo sé si mi contraseña es suficientemente segura y cumple con los requisitos establecidos') ||
    userInput.includes('es posible cambiar mi contraseña aunque mi cuenta esté desactivada o bloqueada temporalmente') ||
    userInput.includes('qué hago si mi cuenta aparece como suspendida y no entiendo la razón detrás de esta suspensión') ||
    userInput.includes('puedo recuperar mi cuenta si olvidé el correo y el número de teléfono que utilicé para registrarme') ||
    userInput.includes('cómo hago para actualizar mi información personal y mantener mi cuenta al día con mis datos actuales') ||
    userInput.includes('qué opciones tengo si quiero cambiar tanto mi correo registrado como mi número de teléfono en mi cuenta') ||
    userInput.includes('cómo sé si alguien más está intentando acceder a mi cuenta sin mi permiso desde otro dispositivo') ||
    userInput.includes('puedo usar una contraseña temporal para entrar mientras soluciono los problemas con mi cuenta principal') ||
    userInput.includes('qué debo hacer si recibo un mensaje diciendo que alguien intentó entrar a mi cuenta desde otro país') ||
    userInput.includes('cómo puedo confirmar que mi cuenta está activa si no he recibido ningún mensaje de verificación') ||
    userInput.includes('qué hago si no recuerdo el PIN de acceso a mi cuenta y no puedo restablecerlo desde mi dispositivo') ||
    userInput.includes('es posible recuperar mi cuenta usando un código que me envíen a mi nuevo correo electrónico') ||
    userInput.includes('puedo restablecer mi cuenta si la eliminé por error y no tengo ningún respaldo de los datos anteriores') ||
    userInput.includes('cómo sé si mi cuenta está comprometida por un ataque de hackers y qué puedo hacer al respecto') ||
    userInput.includes('qué hago si no puedo acceder a mi cuenta porque cambió la dirección de correo registrada') ||
    userInput.includes('es posible cambiar mi contraseña desde otro dispositivo que no sea el que uso normalmente') ||
    userInput.includes('puedo restablecer mi contraseña aunque no tenga acceso al correo registrado originalmente') ||
    userInput.includes('cómo configuro una nueva contraseña si olvidé la anterior y no tengo acceso al correo de recuperación') ||
    userInput.includes('qué hago si no sé cómo configurar una contraseña que sea segura y cumpla con los requisitos necesarios') ||
    userInput.includes('es posible eliminar mi cuenta completamente y asegurarme de que no quede ningún dato guardado') ||
    userInput.includes('puedo transferir mi cuenta a otra persona si ya no quiero usarla pero no quiero eliminarla completamente') ||
    userInput.includes('cómo hago para reportar un intento de phishing que parece relacionado con mi cuenta y evitar problemas futuros') ||
    userInput.includes('qué hago si quiero recuperar mi cuenta pero no tengo ningún dato que confirme mi identidad o registro') ||
    userInput.includes('es posible recuperar una cuenta antigua que fue bloqueada hace años y no tengo más información al respecto') ||
    userInput.includes('cómo cierro sesión en todos los dispositivos')
) {
    return 'Para recuperar tu contraseña, cambiarla o actualizar tus datos, acércate a la oficina del club. Nuestro personal estará encantado de ayudarte.';
}else if (
  userInput.includes('cuándo juega el equipo principal') ||
  userInput.includes('a qué hora es el próximo partido') ||
  userInput.includes('qué día juega el equipo juvenil') ||
  userInput.includes('quién ganó el último partido') ||
  userInput.includes('cuál fue el marcador del último juego') ||
  userInput.includes('cuántos goles anotó el equipo en el último partido') ||
  userInput.includes('contra quién juega el próximo partido') ||
  userInput.includes('dónde será el próximo partido') ||
  userInput.includes('el próximo juego es en casa o fuera') ||
  userInput.includes('cuándo es el próximo clásico') ||
  userInput.includes('quiénes son los árbitros del próximo partido') ||
  userInput.includes('cómo quedó el equipo juvenil en el último juego') ||
  userInput.includes('dónde puedo ver el calendario de partidos') ||
  userInput.includes('a qué hora juega el equipo femenino') ||
  userInput.includes('cuándo es el siguiente torneo') ||
  userInput.includes('el equipo juvenil ganó su último partido') ||
  userInput.includes('quién marcó los goles en el último partido') ||
  userInput.includes('cuánto quedó el marcador final del último partido') ||
  userInput.includes('el próximo partido será transmitido en televisión') ||
  userInput.includes('a qué hora empieza el calentamiento del próximo partido') ||
  userInput.includes('quién fue el mejor jugador del último partido') ||
  userInput.includes('el equipo visitante ganó el partido') ||
  userInput.includes('dónde puedo comprar boletos para el próximo partido') ||
  userInput.includes('qué uniforme usará el equipo en el próximo juego') ||
  userInput.includes('cómo se llama el estadio del próximo partido') ||
  userInput.includes('quién será el rival en el próximo juego') ||
  userInput.includes('qué jugadores anotaron en el último partido') ||
  userInput.includes('cómo quedó el marcador del equipo sub-15') ||
  userInput.includes('cuándo se jugará la final del torneo') ||
  userInput.includes('el equipo femenino ganó su último partido') ||
  userInput.includes('quién anotó más goles en el último torneo') ||
  userInput.includes('cuál fue el resultado del último clásico') ||
  userInput.includes('cómo puedo saber el horario del próximo partido') ||
  userInput.includes('el partido del próximo fin de semana será en casa') ||
  userInput.includes('cuántos partidos ha ganado el equipo esta temporada') ||
  userInput.includes('cuántos goles lleva el máximo goleador del equipo') ||
  userInput.includes('qué equipo ganó la última final del torneo') ||
  userInput.includes('cuántos partidos quedan en la temporada') ||
  userInput.includes('el próximo partido será contra un equipo de la misma liga') ||
  userInput.includes('qué jugadores fueron expulsados en el último partido') ||
  userInput.includes('cuántos goles se marcaron en total en el último juego') ||
  userInput.includes('cuántos minutos faltan para el inicio del próximo partido') ||
  userInput.includes('cómo quedó el marcador del partido amistoso') ||
  userInput.includes('quién marcó el gol más rápido del torneo') ||
  userInput.includes('qué equipo tiene la mejor defensa del torneo') ||
  userInput.includes('cuántos goles lleva el equipo juvenil esta temporada') ||
  userInput.includes('quién fue el jugador más destacado del último torneo') ||
  userInput.includes('cómo quedaron los resultados de la jornada pasada') ||
  userInput.includes('qué equipo está en el primer lugar de la tabla') ||
  userInput.includes('a qué hora comienza el próximo partido del torneo') ||
  userInput.includes('cuál fue el resultado más reciente del equipo sub-20') ||
  userInput.includes('qué días juega el equipo durante esta semana') ||
  userInput.includes('qué equipo lidera la tabla de posiciones') ||
  userInput.includes('quién anotó más goles en el último partido') ||
  userInput.includes('cuántos puntos tiene el equipo en la tabla') ||
  userInput.includes('quién será el próximo rival del equipo principal') ||
  userInput.includes('qué partidos se jugarán en la próxima jornada') ||
  userInput.includes('cómo quedaron los equipos en la última fecha') ||
  userInput.includes('qué horario tiene el próximo partido en casa') ||
  userInput.includes('qué posición ocupa el equipo en la liga') ||
  userInput.includes('cuántos goles lleva el equipo esta temporada') ||
  userInput.includes('el próximo partido será a puerta cerrada') ||
  userInput.includes('qué resultados se esperan en la próxima jornada') ||
  userInput.includes('cómo quedó el partido entre los equipos sub-17') ||
  userInput.includes('quién fue el portero titular en el último partido') ||
  userInput.includes('cuántas tarjetas amarillas hubo en el último juego') ||
  userInput.includes('dónde puedo consultar los horarios de los partidos') ||
  userInput.includes('cuántos goles marcó el equipo en el torneo pasado') ||
  userInput.includes('qué día se jugará la semifinal del torneo') ||
  userInput.includes('el equipo sub-15 ganó su último partido') ||
  userInput.includes('quién fue el árbitro en el último juego') ||
  userInput.includes('qué día juega el equipo sub-13') ||
  userInput.includes('quiénes serán titulares en el próximo partido') ||
  userInput.includes('cómo puedo saber el marcador en tiempo real') ||
  userInput.includes('qué partidos quedan pendientes por jugar') ||
  userInput.includes('dónde será el partido de la final') ||
  userInput.includes('cuántos puntos necesita el equipo para clasificar') ||
  userInput.includes('quién lidera la tabla de goleadores') ||
  userInput.includes('cuántos goles se anotaron en el clásico pasado') ||
  userInput.includes('qué equipo tiene la mejor ofensiva del torneo') ||
  userInput.includes('cuál es el marcador más alto en la historia del equipo') ||
  userInput.includes('quién será el técnico en el próximo partido') ||
  userInput.includes('cuántas victorias lleva el equipo en esta temporada') ||
  userInput.includes('qué días entrena el equipo antes del próximo partido') ||
  userInput.includes('cuántas derrotas lleva el equipo esta temporada') ||
  userInput.includes('cómo se repartieron los goles en el último partido') ||
  userInput.includes('qué jugador hizo el gol del triunfo en el último juego') ||
  userInput.includes('cuántas tarjetas rojas se mostraron en el último partido') ||
  userInput.includes('dónde puedo comprar boletos para el próximo clásico') ||
  userInput.includes('qué equipos jugarán en la final del torneo') ||
  userInput.includes('cuál fue el marcador final del equipo sub-13') ||
  userInput.includes('quién anotó el gol más bonito del último juego') ||
  userInput.includes('el equipo sub-20 está clasificado para la final') ||
  userInput.includes('cuántos minutos jugó el equipo con 10 jugadores') ||
  userInput.includes('cómo puedo ver los resultados en vivo del próximo partido') ||
  userInput.includes('a qué hora juega el equipo 2014') ||
    userInput.includes('dónde será el partido del equipo 2014') ||
    userInput.includes('cuándo juega el equipo 2014') ||
    userInput.includes('contra quién juega el equipo 2014') ||
    userInput.includes('a qué hora juega el equipo 2015') ||
    userInput.includes('dónde será el partido del equipo 2015') ||
    userInput.includes('cuándo juega el equipo 2015') ||
    userInput.includes('contra quién juega el equipo 2015') ||
    userInput.includes('a qué hora juega el equipo 2016') ||
    userInput.includes('dónde será el partido del equipo 2016') ||
    userInput.includes('cuándo juega el equipo 2016') ||
    userInput.includes('contra quién juega el equipo 2016') ||
    userInput.includes('a qué hora juega el equipo 2018') ||
    userInput.includes('dónde será el partido del equipo 2018') ||
    userInput.includes('cuándo juega el equipo 2018') ||
    userInput.includes('contra quién juega el equipo 2018') ||
    userInput.includes('a qué hora juega el equipo Sub 13 A') ||
    userInput.includes('dónde será el partido del equipo Sub 13 A') ||
    userInput.includes('cuándo juega el equipo Sub 13 A') ||
    userInput.includes('contra quién juega el equipo Sub 13 A') ||
    userInput.includes('a qué hora juega el equipo Sub 13 B') ||
    userInput.includes('dónde será el partido del equipo Sub 13 B') ||
    userInput.includes('cuándo juega el equipo Sub 13 B') ||
    userInput.includes('contra quién juega el equipo Sub 13 B') ||
    userInput.includes('a qué hora juega el equipo Sub 15 A') ||
    userInput.includes('dónde será el partido del equipo Sub 15 A') ||
    userInput.includes('cuándo juega el equipo Sub 15 A') ||
    userInput.includes('contra quién juega el equipo Sub 15 A') ||
    userInput.includes('a qué hora juega el equipo Sub 15 B') ||
    userInput.includes('dónde será el partido del equipo Sub 15 B') ||
    userInput.includes('cuándo juega el equipo Sub 15 B') ||
    userInput.includes('contra quién juega el equipo Sub 15 B') ||
    userInput.includes('a qué hora juega el equipo Sub 17 A') ||
    userInput.includes('dónde será el partido del equipo Sub 17 A') ||
    userInput.includes('cuándo juega el equipo Sub 17 A') ||
    userInput.includes('contra quién juega el equipo Sub 17 A') ||
    userInput.includes('a qué hora juega el equipo Sub 17 B') ||
    userInput.includes('dónde será el partido del equipo Sub 17 B') ||
    userInput.includes('cuándo juega el equipo Sub 17 B') ||
    userInput.includes('contra quién juega el equipo Sub 17 B') ||
    userInput.includes('cuándo juega el próximo partido del equipo 2014') ||
    userInput.includes('a qué hora será el próximo partido del equipo 2015') ||
    userInput.includes('el partido del equipo 2016 será en casa o fuera') ||
    userInput.includes('qué día juega el equipo 2018 su próximo partido') ||
    userInput.includes('qué lugar es la sede del partido del equipo Sub 13 A') ||
    userInput.includes('qué horario tiene el partido del equipo Sub 13 B') ||
    userInput.includes('el próximo juego del equipo Sub 15 A es este fin de semana') ||
    userInput.includes('qué hora es el partido del equipo Sub 15 B este sábado') ||
    userInput.includes('el equipo Sub 17 A juega de local esta semana') ||
  userInput.includes('qué canal transmitirá el próximo partido en vivo')
) {
  return 'todos los detalles , horarios, marcador final y todo lo relacionado con partidos los puedes encontrar en el menu de partidos';
}else if (
  userInput.includes('quiénes son los jugadores del equipo 2014') ||
  userInput.includes('cuántos jugadores hay en el equipo de 2015') ||
  userInput.includes('qué jugadores destacaron en el equipo 2016') ||
  userInput.includes('quién es el capitán del equipo 2018') ||
  userInput.includes('quiénes juegan en el equipo Sub 13 A') ||
  userInput.includes('cuántos jugadores forman parte del equipo Sub 13 B') ||
  userInput.includes('qué posición juega el capitán del equipo Sub 15 A') ||
  userInput.includes('quiénes son los porteros del equipo Sub 15 B') ||
  userInput.includes('quiénes integran el equipo Sub 17 A') ||
  userInput.includes('cuántos goles lleva el goleador del equipo Sub 17 B') ||
  userInput.includes('cómo puedo ver la lista de jugadores del equipo 2014') ||
  userInput.includes('qué jugadores del equipo 2015 están lesionados') ||
  userInput.includes('hay jugadores del equipo 2016 que estén en la selección nacional') ||
  userInput.includes('qué dorsal usa el goleador del equipo 2018') ||
  userInput.includes('quién es el portero principal del equipo Sub 13 A') ||
  userInput.includes('quién anotó más goles en el equipo Sub 13 B') ||
  userInput.includes('quiénes son los entrenadores del equipo Sub 15 A') ||
  userInput.includes('qué jugadores son defensas en el equipo Sub 15 B') ||
  userInput.includes('cuántos jugadores juveniles están en el equipo Sub 17 A') ||
  userInput.includes('quién es el máximo goleador del equipo Sub 17 B') ||
  userInput.includes('quién lidera la tabla de asistencias en el equipo 2014') ||
  userInput.includes('cuántos partidos ha jugado el equipo 2015 esta temporada') ||
  userInput.includes('qué jugadores del equipo 2016 han sido titulares en todos los partidos') ||
  userInput.includes('quiénes son los delanteros del equipo 2018') ||
  userInput.includes('qué jugador del equipo Sub 13 A tiene más asistencias') ||
  userInput.includes('cuántos goles ha recibido el equipo Sub 13 B esta temporada') ||
  userInput.includes('quiénes son los mediocampistas del equipo Sub 15 A') ||
  userInput.includes('hay algún jugador del equipo Sub 15 B que esté suspendido') ||
  userInput.includes('quién fue el jugador más destacado del equipo Sub 17 A en el último partido') ||
  userInput.includes('cuántos goles lleva el portero del equipo Sub 17 B') ||
  userInput.includes('cómo puedo ver las estadísticas del equipo 2014') ||
  userInput.includes('qué posición ocupa el goleador del equipo 2015 en la tabla de goleadores') ||
  userInput.includes('qué jugadores del equipo 2016 debutaron esta temporada') ||
  userInput.includes('quién es el entrenador del equipo 2018') ||
  userInput.includes('qué jugadores del equipo Sub 13 A han jugado todos los partidos') ||
  userInput.includes('quién es el jugador más joven del equipo Sub 13 B') ||
  userInput.includes('qué jugadores del equipo Sub 15 A tienen experiencia internacional') ||
  userInput.includes('quién es el jugador más experimentado del equipo Sub 15 B') ||
  userInput.includes('cuántos jugadores del equipo Sub 17 A han marcado goles esta temporada') ||
  userInput.includes('qué dorsal usa el capitán del equipo Sub 17 B') ||
  userInput.includes('qué jugadores del equipo 2014 han cambiado de posición') ||
  userInput.includes('quiénes son los suplentes principales del equipo 2015') ||
  userInput.includes('hay jugadores del equipo 2016 que estén en otros equipos ahora') ||
  userInput.includes('quién es el máximo asistidor del equipo 2018') ||
  userInput.includes('qué jugador del equipo Sub 13 A marcó en el último partido') ||
  userInput.includes('quién es el portero suplente del equipo Sub 13 B') ||
  userInput.includes('qué jugadores del equipo Sub 15 A han sido expulsados esta temporada') ||
  userInput.includes('cuántos jugadores lesionados tiene el equipo Sub 15 B actualmente') ||
  userInput.includes('qué jugador del equipo Sub 17 A ha jugado más minutos esta temporada') ||
  userInput.includes('quién es el goleador histórico del equipo Sub 17 B') ||
  userInput.includes('cómo puedo ver las estadísticas de los jugadores del equipo 2014') ||
  userInput.includes('qué jugadores del equipo 2015 están convocados para el próximo partido') ||
  userInput.includes('hay jugadores del equipo 2016 que sean goleadores destacados') ||
  userInput.includes('quién es el mejor defensor del equipo 2018') ||
  userInput.includes('qué jugador del equipo Sub 13 A tiene mejor promedio de goles') ||
  userInput.includes('quién fue el mejor jugador del equipo Sub 13 B en el último torneo') ||
  userInput.includes('quién es el capitán del equipo Sub 15 A en esta temporada') ||
  userInput.includes('cuántos goles lleva el máximo goleador del equipo Sub 15 B') ||
  userInput.includes('qué dorsal usan los delanteros del equipo Sub 17 A') ||
  userInput.includes('quién es el jugador más rápido del equipo Sub 17 B')
) {
  return 'Para más detalles sobre los jugadores de cada categoría, puedes haceder a ella mediante el menu de jugadores';
}else if (
  userInput.includes('dónde puedo ver las fotos de la categoría 2014') ||
  userInput.includes('hay fotos del último partido de la categoría 2015') ||
  userInput.includes('cómo puedo encontrar los videos de la categoría 2016') ||
  userInput.includes('dónde están los videos de la categoría 2018') ||
  userInput.includes('puedo ver fotos del entrenamiento de la categoría Sub 13 A') ||
  userInput.includes('hay videos de los goles de la categoría Sub 13 B') ||
  userInput.includes('dónde puedo encontrar las fotos de la categoría Sub 15 A') ||
  userInput.includes('cómo ver los videos de los partidos de la categoría Sub 15 B') ||
  userInput.includes('las fotos de la categoría Sub 17 A están disponibles en el menú') ||
  userInput.includes('puedo encontrar videos del último juego de la categoría Sub 17 B') ||
  userInput.includes('dónde se suben las fotos de las categorías') ||
  userInput.includes('los videos de los goles de la categoría 2014 están en el menú') ||
  userInput.includes('cómo acceder a las fotos de la categoría 2015') ||
  userInput.includes('los videos de la categoría 2016 están en la página') ||
  userInput.includes('hay fotos de los entrenamientos de la categoría 2018') ||
  userInput.includes('dónde puedo ver videos de los partidos de la categoría Sub 13 A') ||
  userInput.includes('hay fotos de la categoría Sub 13 B en el sitio web') ||
  userInput.includes('cómo encontrar los videos de los jugadores de la categoría Sub 15 A') ||
  userInput.includes('puedo acceder a las fotos de la categoría Sub 15 B desde el menú') ||
  userInput.includes('los videos de las mejores jugadas de la categoría Sub 17 A están en línea') ||
  userInput.includes('dónde ver las fotos de la categoría Sub 17 B') ||
  userInput.includes('hay videos del último partido de la categoría 2014 en la página') ||
  userInput.includes('las fotos de la categoría 2015 están disponibles en el menú') ||
  userInput.includes('cómo puedo ver los goles de la categoría 2016') ||
  userInput.includes('dónde están las fotos de los jugadores de la categoría 2018') ||
  userInput.includes('dónde encontrar los videos de los partidos de la categoría Sub 13 A') ||
  userInput.includes('las fotos de la categoría Sub 13 B están disponibles') ||
  userInput.includes('puedo ver videos de las categorías Sub 15 A en la página') ||
  userInput.includes('cómo puedo acceder a las fotos de la categoría Sub 15 B') ||
  userInput.includes('los videos de los entrenamientos de la categoría Sub 17 A están subidos') ||
  userInput.includes('las fotos de la categoría Sub 17 B están en el sitio oficial') ||
  userInput.includes('dónde puedo encontrar videos de la categoría Sub 15 A') ||
  userInput.includes('hay fotos de los entrenamientos de la categoría Sub 13 B') ||
  userInput.includes('puedo encontrar los videos de los goles de la categoría 2014') ||
  userInput.includes('cómo acceder a las fotos de los jugadores de la categoría 2015') ||
  userInput.includes('las fotos del último partido de la categoría Sub 15 A están disponibles') ||
  userInput.includes('hay videos de los mejores momentos de la categoría Sub 15 B') ||
  userInput.includes('puedo ver videos de los partidos de la categoría Sub 17 A en el menú') ||
  userInput.includes('dónde encontrar las fotos de los jugadores de la categoría Sub 13 A') ||
  userInput.includes('hay videos del equipo Sub 17 B disponibles en el menú de videos') ||
  userInput.includes('puedo encontrar fotos de las categorías en el menú de fotos') ||
  userInput.includes('los videos de las categorías Sub 13 B están en el menú oficial')
) {
  return 'Las fotos se encuentran en el menú "Fotos" y los videos en el menú "Videos" en nuestra página.';
}else if (
  userInput.includes('cómo puedo unirme al Club Deportivo Valledupar') ||
  userInput.includes('cuál es el proceso para ser parte del Deportivo Valledupar') ||
  userInput.includes('qué requisitos necesito para unirme al Club Deportivo Valledupar') ||
  userInput.includes('dónde puedo inscribirme para formar parte del Deportivo Valledupar') ||
  userInput.includes('cómo puedo registrarme para ser parte del Deportivo Valledupar') ||
  userInput.includes('hay una forma de unirme al Club Deportivo Valledupar') ||
  userInput.includes('cómo ser parte de los equipos del Deportivo Valledupar') ||
  userInput.includes('dónde encuentro el formulario para unirme al Club Deportivo Valledupar') ||
  userInput.includes('es posible unirme al Deportivo Valledupar como jugador') ||
  userInput.includes('puedo inscribirme en el Club Deportivo Valledupar este año') ||
  userInput.includes('cómo me registro en el Deportivo Valledupar') ||
  userInput.includes('me gustaría ser jugador del Deportivo Valledupar, qué hago') ||
  userInput.includes('existe un formulario para registrarse en el Club Deportivo Valledupar') ||
  userInput.includes('qué debo hacer para jugar en el Deportivo Valledupar') ||
  userInput.includes('puedo unirme al Club Deportivo Valledupar como parte del equipo técnico') ||
  userInput.includes('cómo puedo ser parte del cuerpo técnico del Deportivo Valledupar') ||
  userInput.includes('puedo ser parte del Deportivo Valledupar como entrenador') ||
  userInput.includes('cómo inscribirme en el equipo juvenil del Deportivo Valledupar') ||
  userInput.includes('dónde puedo inscribirme para unirme al Club Deportivo Valledupar') ||
  userInput.includes('me interesa unirme al Deportivo Valledupar, cómo aplico') ||
  userInput.includes('cómo ser jugador del Deportivo Valledupar') ||
  userInput.includes('hay un formulario en línea para unirse al Deportivo Valledupar') ||
  userInput.includes('cómo registrarme para jugar en el Deportivo Valledupar') ||
  userInput.includes('puedo aplicar para unirme al Deportivo Valledupar') ||
  userInput.includes('qué pasos debo seguir para formar parte del Deportivo Valledupar') ||
  userInput.includes('cómo unirme al equipo Sub 13 del Deportivo Valledupar') ||
  userInput.includes('cómo me puedo unir al Club Deportivo Valledupar') ||
  userInput.includes('quiero ser parte del Deportivo Valledupar, qué hago') ||
  userInput.includes('puedo registrarme para ser jugador del Deportivo Valledupar') ||
  userInput.includes('dónde está el formulario de inscripción del Deportivo Valledupar') ||
  userInput.includes('cómo inscribirse en el Deportivo Valledupar') ||
  userInput.includes('puedo llenar un formulario para unirme al Deportivo Valledupar') ||
  userInput.includes('qué requisitos hay para entrar al Deportivo Valledupar') ||
  userInput.includes('cómo formar parte del Deportivo Valledupar') ||
  userInput.includes('quiero ser jugador del Deportivo Valledupar, qué pasos debo seguir') ||
  userInput.includes('cómo aplico para el Deportivo Valledupar') ||
  userInput.includes('puedo entrar al Deportivo Valledupar como juvenil') ||
  userInput.includes('quiero formar parte del Deportivo Valledupar, cómo hago') ||
  userInput.includes('cómo puedo jugar en el Deportivo Valledupar') ||
  userInput.includes('puedo aplicar al Club Deportivo Valledupar') ||
  userInput.includes('cómo ser parte del equipo Deportivo Valledupar') ||
  userInput.includes('hay vacantes en el Deportivo Valledupar') ||
  userInput.includes('quiero formar parte del equipo Deportivo Valledupar') ||
  userInput.includes('cómo llenar el formulario del Deportivo Valledupar') ||
  userInput.includes('dónde está la inscripción del Deportivo Valledupar') ||
  userInput.includes('cómo puedo inscribirme al Deportivo Valledupar') ||
  userInput.includes('qué pasos debo seguir para unirme al Deportivo Valledupar') ||
  userInput.includes('cómo hago parte del Deportivo Valledupar') ||
  userInput.includes('inscripción Deportivo Valledupar') ||
  userInput.includes('cómo registrarse Deportivo Valledupar') ||
  userInput.includes('formulario Deportivo Valledupar') ||
  userInput.includes('unirme Deportivo Valledupar') ||
  userInput.includes('registro Deportivo Valledupar') ||
  userInput.includes('entrar Deportivo Valledupar') ||
  userInput.includes('jugar Deportivo Valledupar') ||
  userInput.includes('inscribirse Deportivo Valledupar') ||
  userInput.includes('cómo unirme') ||
  userInput.includes('dónde inscribirme') ||
  userInput.includes('formulario para entrar') ||
  userInput.includes('cómo hago para entrar') ||
  userInput.includes('cómo registro') ||
  userInput.includes('cómo aplico')
) {
  return 'Para unirte al Deportivo Valledupar, da clic en el menú "Nosotros" y llena el formulario que encontrarás allí al final.';
}else if (
  userInput.includes('dónde puedo ver las noticias del Club Deportivo Valledupar') ||
  userInput.includes('cómo puedo acceder a las últimas noticias del Deportivo Valledupar') ||
  userInput.includes('dónde están las noticias más recientes del Deportivo Valledupar') ||
  userInput.includes('qué novedades hay sobre el Club Deportivo Valledupar') ||
  userInput.includes('cómo me mantengo informado sobre las noticias del Deportivo Valledupar') ||
  userInput.includes('dónde puedo ver las actualizaciones del Deportivo Valledupar') ||
  userInput.includes('dónde encuentro las noticias recientes del Deportivo Valledupar') ||
  userInput.includes('hay alguna sección de noticias sobre el Club Deportivo Valledupar') ||
  userInput.includes('dónde están las noticias deportivas del Deportivo Valledupar') ||
  userInput.includes('cómo saber las noticias más recientes del Deportivo Valledupar') ||
  userInput.includes('dónde publican las últimas noticias del Deportivo Valledupar') ||
  userInput.includes('puedo ver noticias recientes del Club Deportivo Valledupar en su página') ||
  userInput.includes('cómo consultar las noticias del Deportivo Valledupar') ||
  userInput.includes('hay alguna actualización de noticias en la web del Deportivo Valledupar') ||
  userInput.includes('cómo estar al tanto de las noticias del Club Deportivo Valledupar') ||
  userInput.includes('dónde puedo leer las últimas noticias del Deportivo Valledupar') ||
  userInput.includes('cómo saber las noticias más importantes del Club Deportivo Valledupar') ||
  userInput.includes('me interesa leer sobre las últimas noticias del Deportivo Valledupar') ||
  userInput.includes('puedo consultar las noticias de la categoría Sub 13 del Deportivo Valledupar') ||
  userInput.includes('qué noticias hay sobre el equipo Sub 15 A del Deportivo Valledupar') ||
  userInput.includes('cómo encontrar las últimas noticias sobre la categoría Sub 17 B') ||
  userInput.includes('dónde puedo leer las noticias más importantes del Deportivo Valledupar') ||
  userInput.includes('las noticias de la categoría Sub 13 A están disponibles en el sitio') ||
  userInput.includes('puedo acceder a las noticias sobre el equipo Sub 15 B') ||
  userInput.includes('dónde se publican las noticias de la categoría Sub 17 A') ||
  userInput.includes('quiero leer noticias sobre el Deportivo Valledupar, ¿cómo lo hago?') ||
  userInput.includes('cómo consultar noticias de la categoría 2014 del Deportivo Valledupar') ||
  userInput.includes('hay noticias sobre el Deportivo Valledupar en su sitio web') ||
  userInput.includes('dónde encontrar las últimas noticias sobre el Deportivo Valledupar') ||
  userInput.includes('qué noticias hay sobre los partidos de la categoría Sub 13 B') ||
  userInput.includes('puedo ver todas las noticias en la página del Club Deportivo Valledupar') ||
  userInput.includes('dónde están publicadas las noticias del Deportivo Valledupar') ||
  userInput.includes('cómo acceder a las noticias del equipo 2016') ||
  userInput.includes('hay noticias del Deportivo Valledupar en su página oficial') ||
  userInput.includes('qué noticias se han publicado sobre el equipo 2018') ||
  userInput.includes('me gustaría saber más sobre las noticias del Club Deportivo Valledupar') ||
  userInput.includes('dónde puedo encontrar más información sobre las noticias del Deportivo Valledupar') ||
  userInput.includes('qué novedades tienen las categorías del Deportivo Valledupar') ||
  userInput.includes('dónde puedo leer los comunicados más recientes del Deportivo Valledupar') ||
  userInput.includes('cómo puedo ver las noticias sobre los jugadores del Deportivo Valledupar') ||
  userInput.includes('hay noticias recientes sobre el Club Deportivo Valledupar que pueda leer') ||
  userInput.includes('dónde se publican las noticias sobre los entrenamientos del Deportivo Valledupar') ||
  userInput.includes('dónde puedo encontrar las últimas noticias sobre el Deportivo Valledupar') ||
  userInput.includes('dónde están las noticias sobre el partido del equipo Sub 13 A') ||
  userInput.includes('puedo leer las últimas noticias del Club Deportivo Valledupar en el menú de noticias') ||
  userInput.includes('dónde puedo encontrar todas las noticias del Deportivo Valledupar') ||
  userInput.includes('dónde puedo ver la información más reciente del Deportivo Valledupar') ||
  userInput.includes('qué noticias recientes hay sobre los partidos del Deportivo Valledupar') ||
  userInput.includes('dónde están las noticias sobre la categoría Sub 15 A') ||
  userInput.includes('puedo ver noticias recientes sobre el Deportivo Valledupar en su página') ||
  userInput.includes('cómo accedo a las noticias del equipo Sub 15 B') ||
  userInput.includes('me gustaría leer las noticias más recientes del Deportivo Valledupar') ||
  userInput.includes('cómo saber más sobre las noticias actuales del Deportivo Valledupar') ||
  userInput.includes('dónde están publicadas las últimas noticias sobre el Deportivo Valledupar') ||
  userInput.includes('puedo ver noticias de todos los equipos del Deportivo Valledupar') ||
  userInput.includes('cómo acceder a las noticias del Club Deportivo Valledupar') ||
  userInput.includes('dónde puedo ver las últimas novedades del Deportivo Valledupar') ||
  userInput.includes('cómo ver las noticias sobre la categoría Sub 13 B') ||
  userInput.includes('hay noticias recientes en la página del Deportivo Valledupar') ||
  userInput.includes('dónde encontrar las noticias sobre los eventos del Deportivo Valledupar') ||
  userInput.includes('puedo consultar las últimas noticias del Deportivo Valledupar') ||
  userInput.includes('cómo ver las noticias del Club Deportivo Valledupar') ||
  userInput.includes('qué noticias sobre los partidos del Deportivo Valledupar se han publicado') ||
  userInput.includes('hay noticias sobre el Deportivo Valledupar publicadas en su sitio web') ||
  userInput.includes('me gustaría leer las noticias del Club Deportivo Valledupar') ||
  userInput.includes('dónde están las noticias más recientes del Deportivo Valledupar') ||
  userInput.includes('qué se ha publicado recientemente sobre el Deportivo Valledupar') ||
  userInput.includes('cómo puedo ver las actualizaciones de las noticias de la categoría 2015') ||
  userInput.includes('dónde están las noticias sobre el equipo Sub 17 B') ||
  userInput.includes('qué noticias sobre el Club Deportivo Valledupar están disponibles en el menú') ||
  userInput.includes('cómo consultar las últimas noticias sobre el equipo 2016') ||
  userInput.includes('me interesa leer las noticias del Deportivo Valledupar, ¿cómo las encuentro?') ||
  userInput.includes('cómo encontrar las noticias sobre el partido de la categoría 2018') ||
  userInput.includes('dónde puedo leer las noticias sobre la categoría Sub 13 A') ||
  userInput.includes('dónde puedo encontrar noticias del Deportivo Valledupar en la web') ||
  userInput.includes('dónde se actualizan las noticias del Deportivo Valledupar') ||
  userInput.includes('cómo acceder a las noticias más recientes del Deportivo Valledupar') ||
  userInput.includes('puedo ver las noticias del Club Deportivo Valledupar en su página oficial') ||
  userInput.includes('cómo saber las últimas noticias del Deportivo Valledupar') ||
  userInput.includes('dónde se publican las noticias más recientes sobre el Club Deportivo Valledupar') ||
  userInput.includes('cómo encontrar todas las noticias sobre el Deportivo Valledupar') ||
  userInput.includes('hay una sección para ver noticias del Deportivo Valledupar en la web') ||
  userInput.includes('cómo ver las noticias sobre los partidos de la categoría Sub 15 A') ||
  userInput.includes('hay actualizaciones de noticias en el sitio web del Deportivo Valledupar') ||
  userInput.includes('dónde puedo leer las noticias de todos los equipos del Deportivo Valledupar') ||
  userInput.includes('cómo encontrar noticias recientes del Club Deportivo Valledupar') ||
  userInput.includes('dónde ver todas las noticias sobre el Club Deportivo Valledupar') ||
  userInput.includes('me gustaría leer más sobre las noticias del Deportivo Valledupar') ||
  userInput.includes('cómo obtener las noticias actuales del Deportivo Valledupar') ||
  userInput.includes('dónde ver las noticias más importantes sobre el Deportivo Valledupar') ||
  userInput.includes('puedo consultar las noticias del Club Deportivo Valledupar en el menú de noticias') ||
  userInput.includes('cómo ver las noticias de la categoría Sub 13 B') ||
  userInput.includes('dónde puedo ver las últimas noticias sobre los partidos del Deportivo Valledupar') ||
  userInput.includes('cómo acceder a las actualizaciones de las noticias del Deportivo Valledupar') ||
  userInput.includes('puedo ver las noticias de todos los partidos del Deportivo Valledupar') ||
  userInput.includes('dónde encontrar las noticias sobre los próximos partidos del Deportivo Valledupar') ||
  userInput.includes('cómo consultar las noticias de la categoría Sub 17 A') ||
  userInput.includes('dónde se publican las noticias sobre el Deportivo Valledupar') ||
  userInput.includes('puedo ver las últimas noticias del Club Deportivo Valledupar en su página') ||
  userInput.includes('cómo puedo ver las noticias más recientes del Deportivo Valledupar') ||
  userInput.includes('dónde están publicadas las noticias sobre el Deportivo Valledupar') ||
  userInput.includes('quiero leer las noticias más recientes sobre el Deportivo Valledupar') ||
  userInput.includes('dónde están las últimas noticias sobre el Club Deportivo Valledupar') ||
  userInput.includes('cómo puedo acceder a las noticias de la categoría Sub 13 A')
) {
  return 'Para ver las últimas noticias del Deportivo Valledupar, da clic en el menú "Noticias" y consulta las actualizaciones allí.';
}
else if (
  userInput.includes('hola') ||
  userInput.includes('cómo estás') ||
  userInput.includes('qué tal') ||
  userInput.includes('buenas') ||
  userInput.includes('hey') ||
  userInput.includes('qué pasa') ||
  userInput.includes('cómo va todo') ||
  userInput.includes('qué haces') ||
  userInput.includes('cómo te va') ||
  userInput.includes('todo bien') ||
  userInput.includes('cómo está el día') ||
  userInput.includes('saludos') ||
  userInput.includes('buenos días') ||
  userInput.includes('buenas tardes') ||
  userInput.includes('buenas noches')
) {
  return '¡Hola! ¿En qué puedo ayudarte hoy?';
}

else if (
  userInput.includes('qué es esto') ||
  userInput.includes('dónde estoy') ||
  userInput.includes('qué sitio es este') ||
  userInput.includes('esto es un club de fútbol') ||
  userInput.includes('es esto un chatbot')
) {
  return 'Estás en el sitio web del Club Deportivo Valledupar. ¿Te gustaría saber más sobre nosotros?';
}

else if (
  userInput.includes('quién eres') ||
  userInput.includes('quién me está hablando') ||
  userInput.includes('quién está detrás de esto') ||
  userInput.includes('quién me está contestando')
) {
  return 'Soy un asistente virtual diseñado para ayudarte con cualquier pregunta sobre el Club Deportivo Valledupar. ¿Cómo puedo ayudarte hoy?';
}

else if (
  userInput.includes('me aburro') ||
  userInput.includes('estoy aburrido') ||
  userInput.includes('no sé qué hacer') ||
  userInput.includes('estoy aburrido, ayúdame')
) {
  return '¡Entiendo! ¿Qué te parece si hablamos sobre nuestro equipo o eventos? O tal vez quieras ver algunas noticias recientes del club.';
}

else if (
  userInput.includes('gracias') ||
  userInput.includes('te agradezco') ||
  userInput.includes('muchas gracias') ||
  userInput.includes('gracias por la ayuda')
) {
  return '¡De nada! ¡Siempre estoy aquí para ayudarte!';
}

else if (
  userInput.includes('adiós') ||
  userInput.includes('hasta luego') ||
  userInput.includes('nos vemos') ||
  userInput.includes('chao')
) {
  return '¡Adiós! Espero que vuelvas pronto. ¡Cuídate!';
}

else if (
  userInput.includes('qué hora es') ||
  userInput.includes('hora') ||
  userInput.includes('qué hora tienes')
) {
  return 'Lo siento, no puedo decir la hora exacta, pero puedes comprobarla en tu dispositivo. ¿Hay algo más en lo que pueda ayudarte?';
}

else if (
  userInput.includes('me llamo') ||
  userInput.includes('mi nombre es') ||
  userInput.includes('soy') ||
  userInput.includes('me presento')
) {
  return '¡Mucho gusto, [nombre]! ¿En qué puedo ayudarte hoy?';
}

else if (
  userInput.includes('cuál es el clima') ||
  userInput.includes('qué tiempo hace') ||
  userInput.includes('cómo está el clima hoy')
) {
  return 'Lo siento, no tengo acceso al clima actual. Pero si necesitas algo más relacionado con el club, ¡estoy aquí para ayudarte!';
}

else if (
  userInput.includes('cómo estás') ||
  userInput.includes('cómo te encuentras') ||
  userInput.includes('cómo te va')
) {
  return '¡Estoy bien, gracias por preguntar! ¿Y tú cómo estás?';
}

else if (
  userInput.includes('qué deportes practicas') ||
  userInput.includes('te gusta el fútbol') ||
  userInput.includes('cuál es tu deporte favorito')
) {
  return '¡Claro que me gusta el fútbol! De hecho, soy un gran fan del Deportivo Valledupar. ¿Tú practicas algún deporte?';
}

else if (
  userInput.includes('estoy cansado') ||
  userInput.includes('tengo sueño') ||
  userInput.includes('estoy agotado')
) {
  return '¡Vaya! Parece que necesitas descansar. ¡Espero que te recuperes pronto! ¿Algo más que te gustaría saber?';
}

else if (
  userInput.includes('puedes ayudarme') ||
  userInput.includes('me puedes asistir') ||
  userInput.includes('me ayudas con algo')
) {
  return '¡Por supuesto! ¿Qué necesitas saber o hacer?';
}

else if (
  userInput.includes('dime un chiste') ||
  userInput.includes('cuéntame un chiste') ||
  userInput.includes('quiero escuchar un chiste')
) {
  return '¿Por qué el fútbol no puede jugar al escondite? Porque siempre se le ve el balón. 😄';
}

else if (
  userInput.includes('estoy feliz') ||
  userInput.includes('me siento bien') ||
  userInput.includes('estoy contento')
) {
  return '¡Qué bueno! Me alegra saber que estás feliz. ¿Hay algo más que te gustaría saber?';
}

else if (
  userInput.includes('tienes amigos') ||
  userInput.includes('quiénes son tus amigos') ||
  userInput.includes('tienes compañeros')
) {
  return 'Soy un asistente virtual, pero tengo muchos amigos en el equipo del Deportivo Valledupar, ¡y estoy feliz de ayudarte! ¿Qué más te gustaría saber?';
}

else if (
  userInput.includes('te gusta el fútbol') ||
  userInput.includes('quién es tu jugador favorito') ||
  userInput.includes('qué equipo te gusta')
) {
  return 'Me encanta el fútbol y el Deportivo Valledupar es uno de mis equipos favoritos. ¿Tienes algún jugador favorito?';
}

else if (
  userInput.includes('necesito ayuda') ||
  userInput.includes('tengo una duda') ||
  userInput.includes('puedes ayudarme con algo')
) {
  return 'Claro, ¿en qué te puedo ayudar hoy?';
}

else if (
  userInput.includes('estoy buscando información sobre') ||
  userInput.includes('quiero saber más de') ||
  userInput.includes('me puedes decir más de')
) {
  return '¡Por supuesto! ¿Sobre qué te gustaría saber más? Puedo contarte sobre el Deportivo Valledupar, su historia, eventos y mucho más.';
}

else if (
  userInput.includes('tengo hambre') ||
  userInput.includes('quiero comer algo') ||
  userInput.includes('me gustaría algo de comida')
) {
  return '¡La comida es importante! Pero mientras tanto, ¿te gustaría hablar sobre nuestros jugadores o próximos partidos?';
}

else if (
  userInput.includes('dónde están los jugadores') ||
  userInput.includes('quiénes son los jugadores') ||
  userInput.includes('cómo puedo ver los jugadores')
) {
  return 'Puedes encontrar información sobre los jugadores en nuestro menú de "Jugadores". ¡Dale un vistazo!';

}

else if (
  userInput.includes('hablamos de fútbol') ||
  userInput.includes('me gustaría hablar de fútbol') ||
  userInput.includes('quiero hablar de fútbol')
) {
  return '¡Genial! El fútbol siempre es un buen tema. ¿Sobre qué parte del fútbol te gustaría hablar?';
}

else if (
  userInput.includes('estoy aburrido') ||
  userInput.includes('no sé qué hacer') ||
  userInput.includes('estoy cansado de todo')
) {
  return '¡Te entiendo! ¿Por qué no hablamos sobre los próximos partidos del Deportivo Valledupar para mantenernos entretenidos?';
}

else if (
  userInput.includes('me gustaría saber más') ||
  userInput.includes('quiero aprender más') ||
  userInput.includes('estoy interesado en')
) {
  return '¡Perfecto! ¿Sobre qué te gustaría saber más? Puedo contarte sobre los equipos, historia del club, jugadores y mucho más.';
}

else if (
  userInput.includes('quiero saber más sobre los partidos') ||
  userInput.includes('cómo ver los partidos') ||
  userInput.includes('dónde puedo ver los partidos')
) {
  return 'Puedes ver los detalles sobre los partidos en nuestro menú de "Partidos". ¡Ahí encontrarás toda la información!';

}
else if (
  userInput.includes('qué opinas sobre el Deportivo Valledupar') ||
  userInput.includes('qué te parece el equipo') ||
  userInput.includes('cómo ves al Deportivo Valledupar')
) {
  return 'El Deportivo Valledupar es un equipo impresionante, con una gran historia y mucho talento. ¡Es emocionante ser parte de este equipo virtualmente!';
}

else if (
  userInput.includes('qué opinas de los jugadores') ||
  userInput.includes('quiénes son los jugadores más destacados') ||
  userInput.includes('qué jugadores se destacan más')
) {
  return 'Los jugadores del Deportivo Valledupar son muy talentosos, ¡todos son increíbles! Algunos de los más destacados son [Nombre del jugador] y [Nombre del jugador]. ¿Tienes algún jugador favorito?';
}

else if (
  userInput.includes('cómo va el torneo') ||
  userInput.includes('qué tal el rendimiento del equipo') ||
  userInput.includes('cómo está jugando el equipo en el torneo')
) {
  return 'El equipo está jugando muy bien, y estamos emocionados por los próximos partidos. ¡Esperemos que sigan con esa racha ganadora!';
}

else if (
  userInput.includes('cuántos partidos ha jugado el Deportivo Valledupar') ||
  userInput.includes('cuántos partidos hemos jugado hasta ahora') ||
  userInput.includes('qué resultados han tenido los partidos')
) {
  return 'El Deportivo Valledupar ha jugado varios partidos emocionantes. Puedes encontrar los detalles y resultados en la sección de "Partidos".';
}

else if (
  userInput.includes('dónde juegan los partidos del Deportivo Valledupar') ||
  userInput.includes('en qué estadio juega el Deportivo Valledupar') ||
  userInput.includes('qué estadio usan para sus partidos')
) {
  return 'El equipo juega en el Estadio Municipal de Valledupar, un lugar lleno de historia y emoción para los aficionados.';
}

else if (
  userInput.includes('cuántos títulos tiene el Deportivo Valledupar') ||
  userInput.includes('qué campeonatos ha ganado el equipo') ||
  userInput.includes('cuántos trofeos ha ganado el club')
) {
  return 'El Deportivo Valledupar ha ganado varios títulos importantes, incluyendo campeonatos regionales y otros logros. ¡Vamos por más!';
}

else if (
  userInput.includes('cómo puedo ver los partidos del Deportivo Valledupar') ||
  userInput.includes('dónde puedo ver los partidos del club') ||
  userInput.includes('cómo seguir los partidos del Deportivo Valledupar')
) {
  return 'Puedes seguir todos los partidos del Deportivo Valledupar en la sección "Partidos" de la página, y también en nuestras redes sociales para más detalles.';
}

else if (
  userInput.includes('quién es el entrenador del Deportivo Valledupar') ||
  userInput.includes('quién dirige al equipo') ||
  userInput.includes('quién es el técnico del club')
) {
  return 'El entrenador del Deportivo Valledupar es [Nombre del entrenador]. Él ha hecho un excelente trabajo llevando al equipo hacia el éxito.';
}

else if (
  userInput.includes('cuál es la formación del equipo') ||
  userInput.includes('cómo juega el Deportivo Valledupar') ||
  userInput.includes('cuál es el estilo de juego del club')
) {
  return 'El Deportivo Valledupar tiene un estilo de juego dinámico y agresivo. Buscan dominar el campo con posesión del balón y ataques rápidos.';
}

else if (
  userInput.includes('qué jugadores son nuevos') ||
  userInput.includes('quiénes son los fichajes recientes') ||
  userInput.includes('quiénes se han unido al equipo este año')
) {
  return 'Este año, el Deportivo Valledupar ha fichado a nuevos talentos como [Nombre del jugador] y [Nombre del jugador]. ¡Estamos emocionados por verlos jugar!';
}

else if (
  userInput.includes('por qué el Deportivo Valledupar es tan bueno') ||
  userInput.includes('qué hace especial al Deportivo Valledupar') ||
  userInput.includes('por qué el equipo es tan exitoso')
) {
  return 'El Deportivo Valledupar es especial por su dedicación, su enfoque en el desarrollo juvenil y la pasión de sus jugadores y aficionados. ¡Es un equipo que nunca se rinde!';
}

else if (
  userInput.includes('cuándo es el próximo partido') ||
  userInput.includes('a qué hora juega el Deportivo Valledupar') ||
  userInput.includes('qué día juega el Deportivo Valledupar')
) {
  return 'El próximo partido del Deportivo Valledupar será el [fecha] contra [nombre del equipo]. ¡No te lo pierdas!';
}

else if (
  userInput.includes('cuántos jugadores tiene el Deportivo Valledupar') ||
  userInput.includes('cuántos jugadores componen el equipo') ||
  userInput.includes('cuántos jugadores están en el plantel')
) {
  return 'El Deportivo Valledupar tiene una plantilla de [número] jugadores talentosos en diferentes posiciones. ¡Cada uno tiene su papel clave en el equipo!';
}

else if (
  userInput.includes('cómo se llama el capitán del equipo') ||
  userInput.includes('quién es el líder del Deportivo Valledupar') ||
  userInput.includes('quién es el capitán del club')
) {
  return 'El capitán del Deportivo Valledupar es [Nombre del capitán]. Él es un líder tanto dentro como fuera del campo, guiando al equipo con su experiencia.';
}

else if (
  userInput.includes('cuál es la categoría más importante del Deportivo Valledupar') ||
  userInput.includes('qué categorías tiene el club') ||
  userInput.includes('en qué categorías juega el Deportivo Valledupar')
) {
  return 'El Deportivo Valledupar tiene varias categorías, desde Sub 13 hasta Sub 17, y cada una tiene un papel crucial en el desarrollo del club.';
}

else if (
  userInput.includes('dónde puedo ver las fotos del Deportivo Valledupar') ||
  userInput.includes('dónde están las fotos del club') ||
  userInput.includes('dónde encuentro fotos del equipo')
) {
  return 'Puedes ver todas las fotos del Deportivo Valledupar en la sección de "Fotos" en el menú principal de la página.';
}

else if (
  userInput.includes('dónde puedo ver los videos del Deportivo Valledupar') ||
  userInput.includes('dónde están los videos del club') ||
  userInput.includes('cómo ver los videos del equipo')
) {
  return 'Los videos del Deportivo Valledupar están disponibles en la sección "Videos" del menú. ¡Hay resúmenes de partidos y más contenido!';
}

else if (
  userInput.includes('cómo puedo ver la alineación del equipo') ||
  userInput.includes('cuáles son los titulares del partido') ||
  userInput.includes('dónde encuentro la alineación del Deportivo Valledupar')
) {
  return 'La alineación de cada partido la puedes encontrar en la sección de "Partidos" antes de cada juego, ¡para que no te pierdas de nada!';
}

else if (
  userInput.includes('quiero saber más sobre los jugadores del club') ||
  userInput.includes('quiénes son los jugadores del Deportivo Valledupar') ||
  userInput.includes('quiénes están en el plantel actual')
) {
  return 'Puedes encontrar información sobre todos los jugadores en la sección de "Jugadores" en el menú de la página.';
}

else if (
  userInput.includes('cómo puedo unirme al Deportivo Valledupar') ||
  userInput.includes('quiero ser parte del Deportivo Valledupar') ||
  userInput.includes('cómo puedo ingresar al equipo')
) {
  return 'Para unirte al Deportivo Valledupar, simplemente ve al menú "Nosotros" y llena el formulario de inscripción. ¡Te esperamos!';
}

else if (
  userInput.includes('cómo puedo comprar boletos para los partidos') ||
  userInput.includes('dónde puedo comprar entradas para los partidos') ||
  userInput.includes('cómo obtener boletos para el Deportivo Valledupar')
) {
  return 'Los boletos para los partidos del Deportivo Valledupar están disponibles en la sección "Boletos" de nuestra página web. ¡Compra el tuyo ahora!';
}

else if (
  userInput.includes('cómo puedo seguir al equipo en redes sociales') ||
  userInput.includes('en qué redes está el Deportivo Valledupar') ||
  userInput.includes('dónde puedo seguir al club')
) {
  return 'Puedes seguir al Deportivo Valledupar en todas nuestras redes sociales: Facebook, Twitter e Instagram. ¡No te pierdas ninguna actualización!';
}

else if (
  userInput.includes('dónde puedo ver los resultados de los partidos') ||
  userInput.includes('cómo ver los resultados del Deportivo Valledupar') ||
  userInput.includes('dónde están los resultados de los últimos partidos')
) {
  return 'Puedes ver todos los resultados en la sección "Partidos" de la página. Ahí podrás encontrar los marcadores y más detalles.';
}

else if (
  userInput.includes('cómo puedo contactar con el Deportivo Valledupar') ||
  userInput.includes('quiero hablar con alguien del club') ||
  userInput.includes('cómo contactar con el club')
) {
  return 'Puedes contactarnos a través de nuestro formulario en línea en la sección "Contacto", o escribirnos a nuestras redes sociales.';
}

else if (
  userInput.includes('cuál es el próximo evento del Deportivo Valledupar') ||
  userInput.includes('qué eventos tiene el club próximamente') ||
  userInput.includes('dónde será el próximo evento del Deportivo Valledupar')
) {
  return 'El próximo evento del Deportivo Valledupar será [nombre del evento] el [fecha] en [lugar]. ¡Nos encantaría verte allí!';
}

else if (
  userInput.includes('qué noticias hay sobre el Deportivo Valledupar') ||
  userInput.includes('quiero leer las noticias del club') ||
  userInput.includes('dónde están las noticias del Deportivo Valledupar')
) {
  return 'Las últimas noticias del Deportivo Valledupar están disponibles en la sección de "Noticias" de la página. ¡Échales un vistazo!';
}

else if (
  userInput.includes('qué tal está la pretemporada') ||
  userInput.includes('cómo va la pretemporada del equipo') ||
  userInput.includes('qué tal el entrenamiento del Deportivo Valledupar')
) {
  return 'La pretemporada va muy bien, los jugadores están entrenando duro para la nueva temporada. ¡Estamos listos para grandes desafíos!';
}
else if (
  userInput.includes('cómo puedo obtener entradas para un partido') ||
  userInput.includes('dónde puedo comprar boletos para el partido') ||
  userInput.includes('cómo conseguir entradas para los partidos')
) {
  return 'Los partidos del Deportivo Valledupar son totalmente gratuitos, no necesitas comprar entradas. ¡Nos encanta que nos acompañes!';
}

else if (
  userInput.includes('cuándo es el próximo partido') ||
  userInput.includes('qué día juega el Deportivo Valledupar') ||
  userInput.includes('cuál es la fecha del siguiente partido')
) {
  return 'El próximo partido es el [fecha] contra [equipo]. ¡Nos vemos en el estadio!';
}

else if (
  userInput.includes('dónde juega el Deportivo Valledupar') ||
  userInput.includes('en qué estadio juega el equipo') ||
  userInput.includes('en qué estadio juega el Deportivo Valledupar')
) {
  return 'El equipo juega en el Estadio Municipal de Valledupar. ¡Es un lugar lleno de historia!';
}

else if (
  userInput.includes('dónde practican') ||
  userInput.includes('dónde entrena el Deportivo Valledupar') ||
  userInput.includes('dónde hacen sus entrenamientos')
) {
  return 'El equipo entrena en la cancha de fútbol de Villamiriam, conocida como "La Sintética". ¡Es el lugar perfecto para practicar y mejorar!';
}

else if (
  userInput.includes('qué categorías tiene el Deportivo Valledupar') ||
  userInput.includes('qué divisiones tiene el club') ||
  userInput.includes('que categorias hay en el equipo') ||
  userInput.includes('cuales son las categorias del equipo') ||
  userInput.includes('cuales son las categorias del equipo') ||
  userInput.includes('en qué categorías juega el Deportivo Valledupar')
) {
  return 'El club tiene varias categorías, desde Sub 13 hasta Sub 17, cada una con jóvenes muy prometedores.';
}

else if (
  userInput.includes('quién es el capitán del equipo') ||
  userInput.includes('quién es el líder del Deportivo Valledupar') ||
  userInput.includes('quién es el capitán del club')
) {
  return 'El capitán del Deportivo Valledupar es [Nombre del Capitán]. Él es un líder dentro y fuera del campo.';
}
else if (
  userInput.includes('como te llamas') ||
  userInput.includes('cual es tu nombre') ||
  userInput.includes('quien eres')
) {
  return 'hola, soy DPV.BOT par ayudarte a solucionar problemas , aunque todavia estoy en desarrollo pero si te puedo ayudar en tus dudas.';
}

else if (
  userInput.includes('como me uno al equipo') ||
  userInput.includes('requisitos para unirme al equipo') ||
  userInput.includes('quiero unirme a deportivo')
) {
  return 'en el menu de nosotros da click y al final encontraras un formulario el cual debebs llenar tus datos.';
}


else if (
  userInput.includes('eres rel') ||
  userInput.includes('puto') ||
  userInput.includes('bot de mierda') ||
  userInput.includes('mierda')
) {
  return 'los mensages quedan registrados.';
}


else if (
  userInput.includes('juegos') ||
  userInput.includes('partidos') ||
  userInput.includes('hora de los partidos') ||
  userInput.includes('ultimo partido') ||
  userInput.includes('ultimo partido jugado') ||
  userInput.includes('cuanto quedaron en el ultimo partido')
) {
  return 'los mensages quedan registrados.';
}

else if (
  userInput.includes('cómo puedo unirme al Deportivo Valledupar') ||
  userInput.includes('quiero ser parte del Deportivo Valledupar') ||
  userInput.includes('cómo puedo ingresar al equipo')
) {
  return 'Para unirte al Deportivo Valledupar, simplemente ve a la sección "Nosotros" en el menú y llena el formulario de inscripción. ¡Te esperamos!';
}

else if (
  userInput.includes('dónde puedo ver las fotos de los partidos') ||
  userInput.includes('dónde están las fotos del club') ||
  userInput.includes('cómo ver las fotos del Deportivo Valledupar')
) {
  return 'Puedes encontrar todas las fotos del equipo en la sección de "Fotos" en el menú de la página web.';
}

else if (
  userInput.includes('donde practico') ||
  userInput.includes('entrenamientos') ||
  userInput.includes('en cual cancha juegan') ||
  userInput.includes('donde son los entrenamientos') ||
  userInput.includes('a que hoara son los entrenamientos') ||
  userInput.includes('hora de entreno') ||
  userInput.includes('dias de entreno') ||
  userInput.includes('cuales son los dias de entreno') ||
  userInput.includes('donde entrenamos') ||
  userInput.includes('donde jugamos') ||
  userInput.includes('donde son las practicas') ||
  userInput.includes('donde juego') ||
  userInput.includes('donde son los entrenos') ||
  userInput.includes('donde practica el equipo') ||
  userInput.includes('donde pracica deportivo valledupar') ||
  userInput.includes('donde entrena deportivo valledupar') ||
  userInput.includes('donde son los entrnenamientos')
) {
  return 'en la parte de nosotros esta toda esa informacion ';
}





else if (
  userInput.includes('cual es mi entrenador') ||
  userInput.includes('quienenes son los entrenadores') ||
  userInput.includes('entrenadores') ||
  userInput.includes('cuales son los entrenadores ') ||
  userInput.includes('entrenador') ||
  userInput.includes('entrenador de la 2007') ||
  userInput.includes('dias de entreno') ||
  userInput.includes('entrenador de la sub 17') ||
  userInput.includes('entrenador de a sub 18') ||
  userInput.includes('entrenador de la pequeña') ||
  userInput.includes('entrenador de la categoria pequeña') ||
  userInput.includes('quien entrena las categorias') ||
  userInput.includes('quien entrena la sub 17') ||
  userInput.includes('quien entrena la pequeña') ||
  userInput.includes('quien entrena la categoria pequeña') ||
  userInput.includes('quien entrena la 2011') ||
  userInput.includes('quien entrena la sub 15')
) {
  return 'esta informacion la podras encontrar en el aprtado de nosotros';
}




else if (
  userInput.includes('dónde puedo ver los videos del Deportivo Valledupar') ||
  userInput.includes('dónde están los videos del club') ||
  userInput.includes('cómo ver los videos del equipo')
) {
  return 'Los videos del Deportivo Valledupar están disponibles en la sección "Videos" del menú. ¡Hay resúmenes de partidos y más contenido!';
}

else if (
  userInput.includes('cómo puedo seguir al Deportivo Valledupar en redes sociales') ||
  userInput.includes('en qué redes está el Deportivo Valledupar') ||
  userInput.includes('dónde puedo seguir al club')
) {
  return 'Puedes seguir al Deportivo Valledupar en todas nuestras redes sociales: Facebook, Twitter, Instagram, y YouTube. ¡Síguenos para no perderte ninguna noticia!';
}

else if (
  userInput.includes('dónde puedo encontrar los resultados de los partidos') ||
  userInput.includes('cómo ver los resultados del Deportivo Valledupar') ||
  userInput.includes('dónde están los resultados de los partidos del club')
) {
  return 'Los resultados de los partidos del Deportivo Valledupar se encuentran en la sección de "Partidos" en el menú. ¡Ahí podrás ver los marcadores y más detalles!';
}

else if (
  userInput.includes('qué opinas sobre el Deportivo Valledupar') ||
  userInput.includes('qué te parece el equipo') ||
  userInput.includes('cómo ves al Deportivo Valledupar')
) {
  return 'El Deportivo Valledupar es un equipo impresionante, con una gran historia y mucho talento. ¡Es emocionante ser parte de este equipo virtualmente!';
}

else if (
  userInput.includes('cómo va el torneo') ||
  userInput.includes('qué tal el rendimiento del equipo') ||
  userInput.includes('cómo está jugando el equipo en el torneo')
) {
  return 'El equipo está jugando muy bien, y estamos emocionados por los próximos partidos. ¡Esperemos que sigan con esa racha ganadora!';
}

else if (
  userInput.includes('quién es el entrenador del Deportivo Valledupar') ||
  userInput.includes('quién dirige al equipo') ||
  userInput.includes('quién es el técnico del club')
) {
  return 'El entrenador del Deportivo Valledupar varias por categorias. hacen  un excelente trabajo llevando al equipo hacia el éxito.';
}else {
  return 'Lo siento, no entiendo tu pregunta o no tengo respuesta a ella. Por favor, intenta de nuevo o comunicate con un entrenador 😊.';
}



   
}
 // JavaScript para abrir y cerrar el chatbot
 const chatbotButton = document.getElementById("chatbot-button");
 const closeChatbotButton = document.getElementById("close-chatbot");
 const chatbotContainer = document.getElementById("chatbot-container");

 // Mostrar el chatbot cuando se haga clic en el botón flotante
 chatbotButton.addEventListener("click", function() {
   chatbotContainer.style.display = "flex"; // Muestra el chatbot
   chatbotButton.style.display = "none"; // Oculta el botón flotante
 });

 // Cerrar el chatbot cuando se haga clic en el botón de cerrar
 closeChatbotButton.addEventListener("click", function() {
   chatbotContainer.style.display = "none"; // Oculta el chatbot
   chatbotButton.style.display = "flex"; // Muestra nuevamente el botón flotante
 });

 // Función para manejar las respuestas predeterminadas
  function answerQuestion(question) {
   let response = '';
   
   switch(question) {
     case '¿Cómo puedo unirme al equipo?':
       response = 'en el apartado de nosotros al final encontraras un formulario llenalo 😊';
       break;
     case '¿Dónde practica el Deportivo Valledupar?':
       response = 'Horarios de entrenamientos Cancha sintética de fútbol Del barrio villa miriam Comuna 4 valledupar cesar Martes 4:30pm, Miércoles 3:30pm, Jueves 4:30pm, Viernes 6:30pm';
       break;
     case 'cuantas categorias hay?':
       response = 'Jugadores  2014 | Jugadores  2015 | Jugadores  2016 | Jugadores  2018 | Jugadores  Sub 13 A | Jugadores | Sub 13 B, Jugadores | Sub 15 A, Jugadores | Sub 15 B, Jugadores  Sub 17 A | Jugadores  Sub 17 B';
       break;
     case '¿donde esta la oficina de deportivo valledupar?':
       response = 'direccion 🍎 30 🏠 26 barrio villa Mirian';
       break;
     default:
       response = 'Lo siento, no tengo una respuesta para eso. ¿Tienes alguna otra pregunta?';
       break;
   }

   // Muestra la respuesta en el chat
   document.getElementById("chat-response").innerHTML = `<p><strong>Respuesta:</strong> ${response}</p>`;
 }




 
