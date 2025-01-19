// Efeito smooth em links da sidebar
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }

            if (targetId === 'playbooks') closeModal();
        } else if (href) {
            const sectionId = href.split('#')[1];
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Mostrar e fechar modal
function showModal(playbook) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDetails = document.getElementById("modal-details");

    modalTitle.style.textAlign = "center";
    modalDetails.innerHTML = '<p>Carregando conteúdo...</p>';

    const filePath = `./modals/${playbook}`;
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar: ${response.statusText}`);
            return response.text();
        })
        .then(data => modalDetails.innerHTML = data)
        .catch(error => modalDetails.innerHTML = `<p>Erro ao carregar: ${error.message}</p>`);

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fechar modal ao clicar fora ou pressionar "Esc"
window.onclick = event => {
    const modal = document.getElementById("modal");
    if (event.target === modal) closeModal();
};

window.addEventListener('keydown', event => {
    if (event.key === "Escape") closeModal();
});


function toggleMenu() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
}
    // Fechar sidebar ao clicar fora
    document.addEventListener("click", event => {
        if (!event.target.closest(".menu-hamburguer")) {
            document.querySelector(".sidebar").classList.remove("active");
            document.querySelector(".sidebar").style.left = "-250px";
        }
    });

// Evitar cliques e seleções indesejadas
document.addEventListener("contextmenu", event => event.preventDefault());
document.addEventListener("selectstart", event => event.preventDefault());
