
const containerMovies = document.getElementById('movies-grid');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');



const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalCast = document.getElementById("modal-cast");



menuBtn.addEventListener('click', () => {
    menu.classList.toggle('abierto')
})
function showMovies() {
    const containerMovie = document.createElement('div');
    fetch("../assets/data/peliculas.json")
        .then(response => response.json())
        .then(pelicula => {
            pelicula.forEach(peli => {
                const containerMovie = document.createElement('div');
                containerMovie.classList.add('containerMovie');

                const imgMovie = document.createElement('img');
                imgMovie.classList.add('imagenPelicula');
                imgMovie.src = peli.ruta_caratula;
                imgMovie.alt = peli.nombre;

                const titleMovie = document.createElement('h3');
                titleMovie.classList.add('tituloPelicula');
                titleMovie.textContent = peli.nombre;

                const yearMovie = document.createElement('p');
                yearMovie.classList.add('añoPelicula');
                yearMovie.textContent = peli.anio;

                //Agregar evento para abrir el modal al hacer clic en la tarjeta
                containerMovie.addEventListener('click', () => {
                    openModal(peli)
                });

                containerMovie.appendChild(imgMovie);
                containerMovie.appendChild(titleMovie);
                containerMovie.appendChild(yearMovie);

                containerMovies.appendChild(containerMovie);
            });

        })
        .catch(error => {
            containerMovie.textContent = 'Ha habido un error', error
        })
}
document.addEventListener('DOMContentLoaded', showMovies)

function openModal({ ruta_caratula, nombre, categoria, sinopsis, reparto }) {
    
    modalImg.src = ruta_caratula;
    modalTitle.textContent = nombre;
    modalCategory.textContent = categoria;
    modalDescription.textContent = sinopsis;
    modalCast.innerHTML = `<b>Reparto:</b> ${reparto.join(', ')}`;
    modal.style.display = "flex";

    // Evitar scroll en el fondo
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = "none";
    // Restaurar scroll al cerrar
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener("click", closeModal);


window.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});