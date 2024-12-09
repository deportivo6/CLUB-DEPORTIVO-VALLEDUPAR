
      document.querySelector('.site-menu-toggle').addEventListener('click', function() {
          document.querySelector('.site-mobile-menu').classList.toggle('active');
      });
      document.querySelector('.site-mobile-menu-close').addEventListener('click', function() {
          document.querySelector('.site-mobile-menu').classList.remove('active');
      });
  
  
    document.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.querySelector(".site-menu.main-menu"); // Menú principal
  const mobileMenuBody = document.querySelector(".site-mobile-menu-body"); // Contenedor móvil

  if (mainMenu && mobileMenuBody) {
    const clonedMenu = mainMenu.cloneNode(true); // Clonar el menú principal
    clonedMenu.classList.remove("js-clone-nav", "mr-auto", "d-none", "d-lg-block"); // Quitar clases no necesarias
    clonedMenu.classList.add("mobile-menu-clone"); // Agregar clase identificadora

    // Ajustar ID y comportamiento del sistema de login en el menú móvil
    const loginRegisterLinks = clonedMenu.querySelector("#loginRegisterLinks");
    const perfilLink = clonedMenu.querySelector("#perfilLink");

    if (loginRegisterLinks) {
      loginRegisterLinks.id = "loginRegisterLinksMobile";
    }
    if (perfilLink) {
      perfilLink.id = "perfilLinkMobile";
    }

    // Agregar el menú clonado al menú móvil
    mobileMenuBody.appendChild(clonedMenu);
  }

  // Sincronizar estado de login entre menús
  auth.onAuthStateChanged((user) => {
    const loginRegisterLinksDesktop = document.getElementById("loginRegisterLinks");
    const perfilLinkDesktop = document.getElementById("perfilLink");
    const loginRegisterLinksMobile = document.getElementById("loginRegisterLinksMobile");
    const perfilLinkMobile = document.getElementById("perfilLinkMobile");

    if (user) {
      // Usuario autenticado
      if (loginRegisterLinksDesktop) loginRegisterLinksDesktop.style.display = "none";
      if (perfilLinkDesktop) perfilLinkDesktop.style.display = "block";
      if (loginRegisterLinksMobile) loginRegisterLinksMobile.style.display = "none";
      if (perfilLinkMobile) perfilLinkMobile.style.display = "block";
    } else {
      // Usuario no autenticado
      if (loginRegisterLinksDesktop) loginRegisterLinksDesktop.style.display = "block";
      if (perfilLinkDesktop) perfilLinkDesktop.style.display = "none";
      if (loginRegisterLinksMobile) loginRegisterLinksMobile.style.display = "block";
      if (perfilLinkMobile) perfilLinkMobile.style.display = "none";
    }
  });
});

  