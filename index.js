//https://www.omdbapi.com/?apikey=3c851f46&s=fast


const moviesContainerEl = document.querySelector('.movies__container');
const landingContainerEl = document.querySelector('.landing__container');


async function searchBarForm (event) {
    const formValue = event.target.value;
    const movie = await fetch(`https://www.omdbapi.com/?apikey=3c851f46&s=${formValue}`);
