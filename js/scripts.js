// Função para mostrar o modal
function showModal(playbook) {
    // Exibe o modal
    document.getElementById('modal').style.display = 'block';
    // Define o título do modal
    document.getElementById('modal-title').textContent = "Playbook: " + playbook.charAt(0).toUpperCase() + playbook.slice(1);

    // Esconde todos os conteúdos do modal
    var allContent = document.querySelectorAll('.modal-playbook-content');
    allContent.forEach(function(content) {
        content.style.display = 'none';
    });

    // Exibe o conteúdo correspondente ao playbook
    document.getElementById(playbook).style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal clicando fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fechar o modal pressionando a tecla ESC
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { // Verifica se a tecla pressionada foi ESC
        closeModal(); // Fecha o modal
    }
});
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault(); // Previne o comportamento padr o

            const targetId = href.substring(1); // ID do destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Rolagem com ajuste de deslocamento (caso haja header fixo ou similar)
                const offset = 80; // Exemplo: ajuste de 80px
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Rolagem suave
                });
            }

            // Verifica se o link   de um playbook e fecha o modal
            if (targetId === 'playbooks') {
                closeModal();
            }
        } else {
            // Se for um link para uma se o, leva para a se o
            const sectionId = href.split('#')[1];
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.transition = 'all 0.5s ease-in-out';
            content.style.height = content.scrollHeight + 'px';
            setTimeout(() => {
                content.style.height = '0';
            }, 1);
            setTimeout(() => {
                content.style.display = 'none';
            }, 500);
        } else {
            content.style.display = 'block';
            content.style.height = '0';
            content.style.transition = 'all 0.5s ease-in-out';
            setTimeout(() => {
                content.style.height = content.scrollHeight + 'px';
            }, 1);
        }
    });
});

document.addEventListener("contextmenu", event => event.preventDefault());
document.addEventListener("selectstart", event => event.preventDefault());


