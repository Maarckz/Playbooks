
     function showModal(playbook) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-title').textContent = "Playbook: " + playbook.charAt(0).toUpperCase() + playbook.slice(1);

    var allContent = document.querySelectorAll('.modal-playbook-content');
    allContent.forEach(function(content) {
        content.style.display = 'none';
    });

    document.getElementById(playbook).style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { 
        closeModal(); 
    }
});
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

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            if (targetId === 'playbooks') {
                closeModal();
            }
        } else {
            const sectionId = href.split('#')[1];
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

//document.addEventListener("contextmenu", event => event.preventDefault());
//document.addEventListener("selectstart", event => event.preventDefault());

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}


document.addEventListener("click", function(event) {
if (!event.target.closest(".menu-hamburguer")) {
    document.querySelector(".sidebar").classList.remove("open");
}
});

document.addEventListener("click", function(event) {
    if (!event.target.closest(".menu-hamburguer")) {
        document.querySelector(".sidebar").classList.remove("open");
    }
});
   //document.addEventListener("contextmenu", event => event.preventDefault());
        //document.addEventListener("selectstart", event => event.preventDefault());
        function toggleSidebar() {
            document.querySelector('.sidebar').classList.toggle('open');
        }
        

        document.addEventListener("click", function(event) {
        if (!event.target.closest(".menu-hamburguer")) {
            document.querySelector(".sidebar").classList.remove("open");
        }
    });