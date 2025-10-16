

const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalCast = document.getElementById("modal-cast");


function openModal({ ruta_caratula, nombre, categoria, sinopsis, reparto }) {
    modalImg.src = ruta_caratula;
    modalTitle.textContent = nombre;
    modalCategory.textContent = categoria;
    modalDescription.textContent = sinopsis;
    modalCast.textContent = reparto.join("", "");
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);


window.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".watch-btn")?.addEventListener("click", () => {
        openModal({
            ruta_caratula: "https://via.placeholder.com/400x200",
            nombre: "Película de Ejemplo",
            categoria: "Acción",
            sinopsis: "Esta es una descripción breve de la película.",
            reparto: "Actor 1, Actor 2, Actor 3"
        });
    });
});

