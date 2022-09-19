//https://www.omdbapi.com/?apikey=3c851f46&s=fast


const moviesContainerEl = document.querySelector(".movies__container");
const landingContainerEl = document.querySelector(".landing__container");


async function searchBarForm(event) {
    const formValue = event.target.value;
    const movie = await fetch(
        `https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`
        );

    const movieData = await movie.json();
    if (!movieData.Search) {
        moviesContainerEl.style.display = "none";
        landingContainerEl.style.display = "block";
    }
    else if (movieData.Search){
        moviesContainerEl.style.display = "flex";
        landingContainerEl.style.display = "none";
    }
    moviesContainerEl.innerHTML = movieData.Search.slice(0, 9)
        .map((movie) => moviesHTML(movie))
        .join("");

    event.preventDefault();
}

function moviesHTML(movie) {
    return `<div class="movie__container">
    <div class="movie">
        <div class="movie__poster">
            <img src=${movie.Poster} class="movie__poster--img" alt="">
        </div>
        <div class="movie__info--container">
            <div class="movie__title">${movie.Title}</div>
            <div class="movie__year">${movie.Year}</div>
        </div>
    </div>
</div>`;
}
