const containerMovies = document.getElementById('movies-grid');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');



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

                const imgMovie = document.createElement('img')
                imgMovie.classList.add('imagenPelicula')
                imgMovie.src = peli.ruta_caratula
                imgMovie.alt = peli.nombre
                const titleMovie = document.createElement('h3');
                titleMovie.classList.add('tituloPelicula')
                titleMovie.textContent = peli.nombre
                const yearMovie = document.createElement('p')
                yearMovie.classList.add('añoPelicula')
                yearMovie.textContent = peli.anio

                containerMovie.appendChild(imgMovie)
                containerMovie.appendChild(titleMovie)
                containerMovie.appendChild(yearMovie)

                containerMovies.appendChild(containerMovie)
            });
        })
        .catch(error => {
            containerMovie.textContent = 'Ha habido un error', error
        })
}
document.addEventListener('DOMContentLoaded', showMovies)