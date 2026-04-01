const API_KEY = '4c99670d';
const savedMovies = [];

const searchInput = document.getElementById('search_input');
const searchBtn = document.getElementById('search_btn');
const movieResultsContainer = document.getElementById('movie_results');
const savedMoviesList = document.getElementById('saved_movies_list');

searchBtn.addEventListener('click', async () => {
    const query = searchInput.value;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();

    if (!data.Search) return;

    movieResultsContainer.innerHTML = data.Search.map(movie => `
        <div class="movie_card">
            <img src="${movie.Poster}" class="movie_poster">
            <div class="movie_info">
                <h2 class="movie_title">${movie.Title}</h2>
                <span class="movie_year">${movie.Year}</span>
                <button class="save_btn" onclick="saveMovie('${movie.imdbID}', \`${movie.Title.replace(/`/g, '')}\`, '${movie.Year}')">+ Save</button>
            </div>
        </div>
    `).join('');
    
    movieResultsContainer.classList.remove('hidden');
});

window.saveMovie = (id, title, year) => {
    savedMovies.push({ imdbID: id, Title: title, Year: year });
    savedMoviesList.innerHTML = savedMovies.map(movie => `
        <li class="saved_movie_item">
            <span class="saved_title">${movie.Title}</span>
            <span class="saved_year">${movie.Year}</span>
        </li>
    `).join('');
};
