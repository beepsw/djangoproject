document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".sidebar ul li");
    const dashboards = document.querySelectorAll(".dashboard");
    
    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Desactivar todos los dashboards
            dashboards.forEach(dashboard => dashboard.classList.remove("active"));

            // Ocultar todos los botones de la barra lateral
            menuLinks.forEach(link => link.classList.remove("active"));
            
            // Mostrar el dashboard correspondiente
            const dashboardId = `dashboard-${event.target.closest('li').id.split('-')[1]}`;
            document.getElementById(dashboardId).classList.add("active");

            // Destacar el botón activo en la barra lateral
            event.target.closest('li').classList.add("active");

            // Actualizar el título de la página
            const pageTitle = document.getElementById("page-title");
            pageTitle.textContent = event.target.closest('li').textContent.trim();
    });
});



    Object.keys(buttons).forEach(buttonId => {
        document.getElementById(buttonId).addEventListener('click', () => {
            // Ocultar todos los dashboards
            document.querySelectorAll('.dashboard').forEach(d => d.classList.remove('active'));
            // Mostrar el dashboard correspondiente
            document.getElementById(buttons[buttonId]).classList.add('active');

            // Cambiar el título de la página
            const pageTitle = document.getElementById('page-title');
            pageTitle.textContent = document.querySelector(`#${buttonId}`).textContent.trim();

            // Destacar el botón activo
            document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
            document.getElementById(buttonId).classList.add('active');
        });
    });

    // Cerrar el menú de usuario si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        const userDropdown = document.getElementById('userDropdown');
        const userButton = document.querySelector('.user-button');

        if (!userDropdown.contains(event.target) && !userButton.contains(event.target)) {
            userDropdown.style.display = 'none';
        }
    });
    });

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}

function toggleUserMenu() {
    const userDropdown = document.getElementById('userDropdown');
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    window.location.href = 'pagina_login.html';
}

function adjustIframeSize() {
    const iframeContainer = document.getElementById('iframe-container');
    const iframe = document.getElementById('powerbi-iframe');

    if (iframeContainer && iframe) {
        iframe.style.width = $;{iframeContainer.offsetWidth}px;
        iframe.style.height = $;{iframeContainer.offsetHeight}px;
    }
}

// Llamar al ajuste en carga y redimensionamiento
window.addEventListener('load', adjustIframeSize);
window.addEventListener('resize', adjustIframeSize);
        
        const lastView = localStorage.getItem('lastView');
if (lastView) {
    showDashboard(lastView, buttons[lastView]);
}

document.getElementById(buttonId).addEventListener('click', () => {
    localStorage.setItem('lastView', buttonId);
    showDashboard(buttonId, buttons[buttonId]);
});