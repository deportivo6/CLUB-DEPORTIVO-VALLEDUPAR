const firebaseConfig = {
    apiKey: "AIzaSyAIbnabR4nasL0qvYVGOM7OXsDueaOuxQU",
    authDomain: "deportivo-valledupar-co.firebaseapp.com",
    projectId: "deportivo-valledupar-co",
    storageBucket: "deportivo-valledupar-co.firebasestorage.app",
    messagingSenderId: "63537988805",
    appId: "1:63537988805:web:1503ecb5b796898a189cac"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa Auth y Database para la versión 8.6.8
const auth = firebase.auth();
const database = firebase.database();


function register(event) {
    event.preventDefault();
    
    const email = document.getElementById('emailR').value;
    const password = document.getElementById('passwordR').value;
    const full_name = document.getElementById('full_name').value;
    const role = document.getElementById('roleSelect').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            const userData = {
                email: email,
                full_name: full_name,
                role: role
            };

            database.ref('users/' + user.uid).set(userData)
                .then(() => {
                    Swal.fire({
                        title: "Registro Exitoso",
                        icon: "success"
                    }).then(() => {
                        window.location.href = 'index2.html';
                    });
                });
        })
        .catch((error) => {
            Swal.fire({
                title: "Error de Registro",
                text: error.message,
                icon: "error"
            });
        });
}

function login(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            const user = auth.currentUser;
            
            database.ref('users/' + user.uid).once('value')
                .then((snapshot) => {
                    const userData = snapshot.val();
                    
                    if (userData.role === 'admin') {
                        window.location.href = 'admin.html';
                    } else if (userData.role === 'user') {
                        window.location.href = 'index.html';
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "Rol de usuario no reconocido.",
                            icon: "error"
                        });
                    }
                });
        })
        .catch((error) => {
            Swal.fire({
                title: "Error de Inicio de Sesión",
                text: error.message,
                icon: "error"
            });
        });
}

// Determinar si estamos en la página de administración
const esPaginaAdmin = window.location.pathname.includes('admin.html');

function agregarPartido(event) {
    event.preventDefault();

    const equipo1 = document.getElementById('equipo1').value;
    const equipo2 = document.getElementById('equipo2').value;
    const fecha = document.getElementById('fecha').value;
    const categoria = document.getElementById('categoria').value;
    let hora = document.getElementById('hora').value;
    const cancha = document.getElementById('cancha').value;
    const uniforme = document.getElementById('uniforme').value;

    // Convertir la hora de formato 24 horas a AM/PM
    let [hora24, minutos] = hora.split(":");
    hora24 = parseInt(hora24);

    let periodo = hora24 >= 12 ? "PM" : "AM";
    if (hora24 > 12) hora24 -= 12;
    if (hora24 === 0) hora24 = 12; // Convertir "00" a "12"

    // Crear la hora en formato AM/PM
    hora = `${hora24}:${minutos} ${periodo}`;

    const partidoData = {
        equipo1,
        equipo2,
        fecha,
        categoria,
        hora,
        cancha,
        uniforme,
        marcador: '' // Inicializamos el marcador vacío
    };

    const partidosRef = firebase.database().ref('partidos');
    const nuevoPartidoRef = partidosRef.push(partidoData); // Agregar partido

    const partidoId = nuevoPartidoRef.key; // Obtener ID generado automáticamente

    Swal.fire({
        title: "Partido Agregado",
        text: "ID del partido: " + partidoId,
        icon: "success"
    });
}

// Función para actualizar el marcador
function actualizarMarcador(event) {
    event.preventDefault();

    const partidoId = document.getElementById('partidoId').value;
    const marcador = document.getElementById('marcador').value;

    if (!partidoId || !marcador) {
        Swal.fire({
            title: "Error",
            text: "Por favor ingresa un ID de partido y un marcador.",
            icon: "error"
        });
        return;
    }

    const partidosRef = firebase.database().ref('partidos').child(partidoId);

    partidosRef.once('value', (snapshot) => {
        const partido = snapshot.val();
        if (partido) {
            partidosRef.update({ marcador })
                .then(() => {
                    Swal.fire({
                        title: "Marcador Actualizado",
                        text: "El marcador se ha actualizado correctamente.",
                        icon: "success"
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Error",
                        text: error.message,
                        icon: "error"
                    });
                });
        } else {
            Swal.fire({
                title: "Error",
                text: "No se encontró un partido con ese ID.",
                icon: "error"
            });
        }
    });
}

// Mostrar la lista de partidos
const partidosRef = firebase.database().ref('partidos');
const partidosList = document.getElementById('partidosList');

partidosRef.on('value', (snapshot) => {
    partidosList.innerHTML = ''; // Limpiar lista
    const partidos = snapshot.val();

    const table = document.createElement('table');
    table.classList.add('partidos-table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Encabezados condicionales
    const headers = esPaginaAdmin
        ? ['ID', 'Equipo 1 / Equipo 2', 'Categoría', 'Fecha / Hora', 'Cancha', 'Uniforme', 'Marcador', 'Acción']
        : ['Equipo 1 / Equipo 2', 'Categoría', 'Fecha / Hora', 'Cancha', 'Uniforme', 'Marcador'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    for (const id in partidos) {
        const partido = partidos[id];
        const tr = document.createElement('tr');

        // Celdas condicionales
        if (esPaginaAdmin) {
            const idCell = document.createElement('td');
            idCell.textContent = id; // ID largo generado por Firebase
            tr.appendChild(idCell);
        }

        const equipoCell = document.createElement('td');
        equipoCell.textContent = `${partido.equipo1} / ${partido.equipo2}`;
        tr.appendChild(equipoCell);

        const categoriaCell = document.createElement('td');
        categoriaCell.textContent = partido.categoria || 'No especificada';
        tr.appendChild(categoriaCell);

        const fechaHoraCell = document.createElement('td');
        fechaHoraCell.textContent = `${partido.fecha} / ${partido.hora}`;
        tr.appendChild(fechaHoraCell);

        const canchaCell = document.createElement('td');
        canchaCell.textContent = partido.cancha || 'No especificada';
        tr.appendChild(canchaCell);

        const uniformeCell = document.createElement('td');
        uniformeCell.textContent = partido.uniforme || 'No especificado';
        tr.appendChild(uniformeCell);

        const marcadorCell = document.createElement('td');
        marcadorCell.textContent = partido.marcador || 'Sin marcador';
        tr.appendChild(marcadorCell);

        if (esPaginaAdmin) {
            const actionCell = document.createElement('td');
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.classList.add('eliminar-btn');
            eliminarBtn.addEventListener('click', () => eliminarPartido(id));
            actionCell.appendChild(eliminarBtn);
            tr.appendChild(actionCell);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    partidosList.appendChild(table);
});

// Función para eliminar un partido
function eliminarPartido(partidoId) {
    const partidosRef = firebase.database().ref('partidos').child(partidoId);

    partidosRef.remove()
        .then(() => {
            Swal.fire({
                title: "Partido Eliminado",
                text: "El partido ha sido eliminado correctamente.",
                icon: "success"
            });
        })
        .catch((error) => {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error"
            });
        });
}

// Definir si el usuario es admin o no (esto puede depender de tu sistema de autenticación)
const esAdmin = true; // Cambia esto a 'false' si no es un admin

// Si no es admin, ocultamos la columna ID
if (!esAdmin) {
    document.body.classList.add('usuario-no-admin');
}

// Llamar la función para agregar partidos cuando el formulario sea enviado
window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const agregarPartidoForm = document.getElementById('agregarPartidoForm');
    const actualizarMarcadorForm = document.getElementById('actualizarMarcadorForm');

    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', register);
    }

    if (agregarPartidoForm) {
        agregarPartidoForm.addEventListener('submit', agregarPartido);
    }

    if (actualizarMarcadorForm) {
        actualizarMarcadorForm.addEventListener('submit', actualizarMarcador);
    }
};
/////boraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa//


////////////////////////////////

function cerrarSesion() {
    firebase.auth().signOut().then(() => {
        // Redirigir al index.html después de cerrar sesión
        window.location.href = 'index.html'; 
    }).catch((error) => {
        console.error('Error al cerrar sesión', error);
        Swal.fire({
            title: "Error",
            text: "Hubo un problema al cerrar sesión.",
            icon: "error"
        });
    });
}



////////////////////////////////////////////////////////////////////jugadoresss/////////////////////////////////////////////////////////
// Configuración de Firebase

// Configuración de Firebase


// Configuración de Firebase

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('playerForm');
    var categorySelectForm = document.getElementById('category');
    var categorySelectView = document.getElementById('categorySelect');
    var playersList = document.getElementById('playersList');
    var categoryView = document.getElementById('categoryView');
    var playerListForDeletion = document.getElementById('playerListForDeletion');

    // Manejar el envío del formulario en admin.html
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var name = document.getElementById('name').value.trim();
            var photo = document.getElementById('photo').value.trim();
            var position = document.getElementById('position').value.trim();
            var number = document.getElementById('number').value.trim();
            var category = categorySelectForm.value.trim();

            if (!category) {
                Swal.fire('Error', 'Debes seleccionar una categoría.', 'error');
                return;
            }

            var playerData = {
                name: name,
                photo: photo,
                position: position,
                number: number
            };

            // Guardar jugador en el nodo de la categoría
            database.ref('players/' + category).push(playerData).then(function() {
                Swal.fire('Jugador Agregado', '', 'success');
                form.reset();
            }).catch(function(error) {
                console.error('Error al agregar jugador:', error);
                Swal.fire('Error', 'No se pudo agregar el jugador', 'error');
            });
        });
    } else {
        console.error('El formulario no existe en el DOM');
    }

    // Manejar la visualización de jugadores en jugadores.html
    if (categorySelectView && playersList) {
        categorySelectView.addEventListener('change', function() {
            var selectedCategory = categorySelectView.value;
            updatePlayerList(selectedCategory);
        });

        // Inicializa la lista de jugadores con la primera categoría
        updatePlayerList(categorySelectView.value);
    } else {
        console.error('El select de categoría o la lista de jugadores no existe en el DOM');
    }

    function updatePlayerList(category) {
        if (playersList) {
            database.ref('players/' + category).on('value', function(snapshot) {
                playersList.innerHTML = ''; // Limpiar la lista antes de mostrarla

                snapshot.forEach(function(childSnapshot) {
                    var player = childSnapshot.val();
                    var playerDiv = document.createElement('div');
                    playerDiv.classList.add('player-card'); // Añadir la clase de tarjeta

                    playerDiv.innerHTML = `
                        <img src="${player.photo}" alt="${player.name}">
                        <div class="player-info">
                            <h2>${player.name}</h2>
                            <p>Posición: ${player.position}</p>
                            <p class="number">#${player.number}</p>
                        </div>
                    `;
                    playersList.appendChild(playerDiv);
                });
            });
        }
    }

    // Manejar la visualización y eliminación de jugadores en admin.html
    if (categoryView && playerListForDeletion) {
        categoryView.addEventListener('change', function() {
            var selectedCategory = categoryView.value;
            loadPlayerListForDeletion(selectedCategory);
        });

        // Inicializa la lista de jugadores para eliminación con la primera categoría
        loadPlayerListForDeletion(categoryView.value);
    }

    function loadPlayerListForDeletion(category) {
        if (playerListForDeletion) {
            database.ref('players/' + category).on('value', function(snapshot) {
                playerListForDeletion.innerHTML = ''; // Limpiar la lista antes de mostrarla

                snapshot.forEach(function(childSnapshot) {
                    var player = childSnapshot.val();
                    var playerKey = childSnapshot.key;
                    var playerDiv = document.createElement('div');
                    playerDiv.classList.add('player-card'); // Añadir la clase de tarjeta

                    playerDiv.innerHTML = `
                        <div class="player-info">
                            <h2>${player.name}</h2>
                            <button onclick="deletePlayer('${category}', '${playerKey}')">Eliminar</button>
                        </div>
                    `;
                    playerListForDeletion.appendChild(playerDiv);
                });
            });
        }
    }
});
function deletePlayer(category, playerKey) {
    database.ref('players/' + category + '/' + playerKey).remove().then(function() {
        Swal.fire('Jugador Eliminado', '', 'success');
        // Recargar la lista después de eliminar
        var categoryView = document.getElementById('categoryView');
        if (categoryView) {
            loadPlayerListForDeletion(categoryView.value);
        }
    }).catch(function(error) {
        console.error('Error al eliminar jugador:', error);
        Swal.fire('exito', 'jugador eliminado', 'error');
    });
}




//ytirseug//
function checkAuth(requiredRole = null) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            // Verificar el rol del usuario
            database.ref('users/' + user.uid).once('value')
                .then((snapshot) => {
                    const userData = snapshot.val();
                    const userRole = userData?.role || null;

                    if (requiredRole && userRole !== requiredRole) {
                        // Usar SweetAlert para mostrar el mensaje de permiso denegado
                        Swal.fire({
                            title: "Acceso Denegado",
                            text: "No tienes permiso para acceder a esta página.",
                            icon: "error",
                            confirmButtonText: "OK"
                        }).then(() => {
                            window.location.href = 'index.html'; // Redirigir a la página principal
                        });
                    }
                });
        } else if (requiredRole) {
            // Si no está autenticado y la página requiere rol, redirigir
            Swal.fire({
                title: "Inicia sesión",
                text: "Debes iniciar sesión para acceder a esta página.",
                icon: "warning",
                confirmButtonText: "OK"
            }).then(() => {
                window.location.href = 'index.html'; // Redirigir a la página principal
            });
        }
    });
}

// Llama esta función en cada página con el rol requerido
// Ejemplo: Solo admins en admin.html
if (window.location.pathname === '/admin.html') {
    checkAuth('admin');
}




////////////////////////////////////////////////////////////noticias/////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const newsForm = document.getElementById('news-form');
    const newsList = document.getElementById('news-list');
    const newsContainer = document.getElementById('news-container');

    // Referencia a Firebase
    const newsRef = firebase.database().ref('noticias');

    // Manejar el formulario para agregar noticias
    if (newsForm) {
        newsForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const titulo = document.getElementById('news-title').value.trim();
            const imagen = document.getElementById('news-image').value.trim();
            const texto = document.getElementById('news-text').value.trim();
            const fecha = document.getElementById('news-date').value;

            if (!titulo || !texto || !fecha) {
                Swal.fire('Error', 'Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }

            const noticia = {
                titulo: titulo,
                imagen: imagen || null,
                texto: texto,
                fecha: fecha,
                likes: 0 // Iniciamos los "me gusta" en 0
            };

            newsRef.push(noticia)
                .then(() => {
                    Swal.fire('Éxito', 'Noticia agregada correctamente.', 'success');
                    newsForm.reset();
                })
                .catch((error) => {
                    console.error('Error al guardar noticia:', error);
                    Swal.fire('Error', 'No se pudo guardar la noticia.', 'error');
                });
        });
    }

    // Mostrar noticias en el panel de administración
    if (newsList) {
        newsRef.on('value', (snapshot) => {
            newsList.innerHTML = ''; // Limpiar lista
            const noticias = snapshot.val();
            if (noticias) {
                for (let id in noticias) {
                    const noticia = noticias[id];
                    const noticiaElemento = document.createElement('div');
                    noticiaElemento.innerHTML = `
                        <p>${noticia.titulo} - ${noticia.fecha}</p>
                        <button onclick="eliminarNoticia('${id}')">Eliminar</button>
                    `;
                    newsList.appendChild(noticiaElemento);
                }
            }
        });
    }

    // Mostrar noticias en el contenedor público
    if (newsContainer) {
        newsRef.orderByChild('fecha').on('value', (snapshot) => {
            newsContainer.innerHTML = ''; // Limpiar contenedor

            const noticias = snapshot.val();
            if (noticias) {
                const noticiasOrdenadas = Object.entries(noticias).reverse();
                noticiasOrdenadas.forEach(([id, noticia]) => {
                    const noticiaElemento = document.createElement('div');
                    noticiaElemento.classList.add('noticia');
                    noticiaElemento.innerHTML = `
                        ${noticia.imagen ? `<img src="${noticia.imagen}" alt="${noticia.titulo}">` : ''}
                        <h2>${noticia.titulo}</h2>
                        <p>${noticia.texto}</p>
                        <small>Fecha: ${noticia.fecha}</small>
                        <button class="like-btn" data-id="${id}">
                            ❤️ Me gusta (<span class="like-count">${noticia.likes}</span>)
                        </button>
                        <div class="heart-animation"></div>
                    `;
                    newsContainer.appendChild(noticiaElemento);
                });
            }
        });
    }

    // Manejo del evento de "Me gusta"
    newsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('like-btn')) {
            const noticiaId = event.target.getAttribute('data-id');

            // Verificar si el usuario ya dio "me gusta" en LocalStorage
            const likedNews = JSON.parse(localStorage.getItem('likedNews')) || [];
            if (likedNews.includes(noticiaId)) {
                Swal.fire('Ya diste tu "Me gusta" a esta noticia.');
                return;
            }

            // Actualizar "me gusta" en Firebase
            const newsLikesRef = firebase.database().ref(`noticias/${noticiaId}/likes`);
            newsLikesRef.transaction((currentLikes) => (currentLikes || 0) + 1)
                .then(() => {
                    // Agregar el ID de la noticia a LocalStorage
                    likedNews.push(noticiaId);
                    localStorage.setItem('likedNews', JSON.stringify(likedNews));

                    // Mostrar animación del corazón
                    const heartAnimation = event.target.nextElementSibling;
                    heartAnimation.classList.add('show');
                    setTimeout(() => {
                        heartAnimation.classList.remove('show');
                    }, 1000);

                    // Actualizar contador visual
                    const likeCount = event.target.querySelector('.like-count');
                    likeCount.textContent = parseInt(likeCount.textContent) + 1;
                })
                .catch((error) => {
                    console.error('Error al dar "me gusta":', error);
                });
        }
    });
});

// Función para eliminar noticia
function eliminarNoticia(id) {
    const newsRef = firebase.database().ref('noticias');
    newsRef.child(id).remove()
        .then(() => Swal.fire('Éxito', 'Noticia eliminada correctamente.', 'success'))
        .catch((error) => {
            console.error('Error al eliminar noticia:', error);
            Swal.fire('Error', 'No se pudo eliminar la noticia.', 'error');
        });
}

////////////////////////////////////////////////////////////////camp////////////////////////////////////////
document.getElementById('player-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var playerName = document.getElementById('player-name').value;
    var playerCategory = document.getElementById('player-category').value;
    var playerGoals = document.getElementById('player-goals').value;
    var playerNumber = document.getElementById('player-number').value;
    var playerPhoto = document.getElementById('player-photo').files[0];
  
    if (!playerPhoto) {
      alert("Por favor selecciona una foto.");
      return;
    }
  
    // Ruta de la carpeta img
    var photoURL = `img/${playerPhoto.name}`;
  
    // Muestra los datos del jugador
    displayPlayer({
      name: playerName,
      category: playerCategory,
      goals: playerGoals,
      number: playerNumber,
      photoURL: photoURL,
    });
  });
  
  document.getElementById('delete-player').addEventListener('click', function () {
    if (confirm('¿Estás seguro de que deseas eliminar al jugador destacado?')) {
      // Limpia la vista
      document.getElementById('player-photo-display').src = '';
      document.getElementById('player-name-display').innerText = '';
      document.getElementById('player-category-display').innerText = '';
      document.getElementById('player-goals-display').innerText = '';
      document.getElementById('player-number-display').innerText = '';
      document.getElementById('player-photo-display').classList.add('d-none');
      document.querySelector('.player-info').classList.add('d-none');
    }
  });
  
  function displayPlayer(player) {
    document.getElementById('player-photo-display').src = player.photoURL;
    document.getElementById('player-name-display').innerText = player.name;
    document.getElementById('player-category-display').innerText = player.category;
    document.getElementById('player-goals-display').innerText = player.goals;
    document.getElementById('player-number-display').innerText = player.number;
    document.getElementById('player-photo-display').classList.remove('d-none');
    document.querySelector('.player-info').classList.remove('d-none');
  }




  /*ultima noticia*///////////////////////////////////////////////////////////////////////////////
    // Referencia a la base de datos
   // Configuración de Firebase
   
  
  
  
    