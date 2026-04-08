const API_KEY = '4c99670d';
const savedMovies = [];
const likedMovies = [];
let lastResults = [];
let activeFilter = null;
let lastQuery = '';

const movieColors = ['#2563eb', '#4d7c0f', '#c2410c', '#7c3aed', '#0891b2', '#be123c', '#a16207', '#059669'];

const searchInput = document.getElementById('search_input');
const searchBtn = document.getElementById('search_btn');
const movieResultsContainer = document.getElementById('movie_results');
const savedMoviesList = document.getElementById('saved_movies_list');
const sortSelect = document.getElementById('sort_select');
const yearFrom = document.getElementById('year_from');
const yearTo = document.getElementById('year_to');
const filterBtn = document.getElementById('filter_btn');
const clearFilterBtn = document.getElementById('clear_filter_btn');
const controlsBar = document.getElementById('controls_bar');
const themeToggle = document.getElementById('theme_toggle');
const savedSearch = document.getElementById('saved_search');
const resultsCount = document.getElementById('results_count');
const sidebarStats = document.getElementById('sidebar_stats');
const heroSection = document.getElementById('hero_section');

searchBtn.addEventListener('click', async () => {
    const query = searchInput.value;
    if (!query.trim()) return;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();

    if (!data.Search) return;

    lastResults = data.Search;
    lastQuery = query;
    activeFilter = null;
    yearFrom.value = '';
    yearTo.value = '';
    sortSelect.value = 'default';
    controlsBar.classList.remove('hidden');
    heroSection.classList.add('compact');
    renderMovies(getDisplayedMovies());
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});

function renderMovies(movies) {
    resultsCount.classList.remove('hidden');
    resultsCount.innerHTML = `${movies.length} results <span>for "${lastQuery}"</span>`;

    movieResultsContainer.innerHTML = movies.map(movie => {
        const isSaved = savedMovies.find(m => m.imdbID === movie.imdbID);
        return `
        <div class="movie_card">
            <img src="${movie.Poster}" class="movie_poster" onerror="this.style.background='#2a2a2a'">
            <div class="movie_info">
                <h2 class="movie_title">${movie.Title}</h2>
                <span class="movie_year">${movie.Year}</span>
                <div class="card_actions">
                    <button class="like_btn ${likedMovies.find(id => id === movie.imdbID) ? 'liked' : ''}" onclick="toggleLike('${movie.imdbID}')">
                        ${likedMovies.find(id => id === movie.imdbID) ? '❤️' : '🤍'}
                    </button>
                    <button class="save_btn ${isSaved ? 'saved' : ''}" onclick="saveMovie('${movie.imdbID}', \`${movie.Title.replace(/`/g, '')}\`, '${movie.Year}')">
                        ${isSaved ? '✓ Saved' : '+ Save'}
                    </button>
                </div>
            </div>
        </div>
    `}).join('');

    movieResultsContainer.classList.remove('hidden');
}

function getDisplayedMovies() {
    let movies = [...lastResults];

    if (activeFilter) {
        movies = movies.filter(movie => {
            const y = parseInt(movie.Year);
            return y >= activeFilter.from && y <= activeFilter.to;
        });
    }

    const sortVal = sortSelect.value;
    if (sortVal === 'az') {
        movies = movies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortVal === 'za') {
        movies = movies.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (sortVal === 'newest') {
        movies = movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (sortVal === 'oldest') {
        movies = movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    return movies;
}

sortSelect.addEventListener('change', () => {
    renderMovies(getDisplayedMovies());
});

filterBtn.addEventListener('click', () => {
    const from = parseInt(yearFrom.value) || 1900;
    const to = parseInt(yearTo.value) || 2099;
    activeFilter = { from, to };
    renderMovies(getDisplayedMovies());
});

clearFilterBtn.addEventListener('click', () => {
    activeFilter = null;
    yearFrom.value = '';
    yearTo.value = '';
    renderMovies(getDisplayedMovies());
});

window.toggleLike = (id) => {
    const idx = likedMovies.findIndex(likedId => likedId === id);
    if (idx === -1) {
        likedMovies.push(id);
    } else {
        likedMovies.splice(idx, 1);
    }
    renderMovies(getDisplayedMovies());
};

window.saveMovie = (id, title, year) => {
    if (savedMovies.find(movie => movie.imdbID === id)) return;
    savedMovies.push({ imdbID: id, Title: title, Year: year });
    renderSavedMovies();
    updateStats();
    if (lastResults.length) renderMovies(getDisplayedMovies());
};

window.removeMovie = (id) => {
    const idx = savedMovies.findIndex(movie => movie.imdbID === id);
    if (idx !== -1) savedMovies.splice(idx, 1);
    renderSavedMovies();
    updateStats();
    if (lastResults.length) renderMovies(getDisplayedMovies());
};

function getColor(index) {
    return movieColors[index % movieColors.length];
}

function renderSavedMovies(filter = '') {
    const filtered = savedMovies.filter(movie =>
        movie.Title.toLowerCase().includes(filter.toLowerCase())
    );

    savedMoviesList.innerHTML = filtered.map((movie, i) => {
        const colorIndex = savedMovies.findIndex(m => m.imdbID === movie.imdbID);
        return `
        <li class="saved_movie_item">
            <div class="saved_color" style="background-color: ${getColor(colorIndex)}"></div>
            <div class="saved_info">
                <span class="saved_title">${movie.Title}</span>
                <span class="saved_year">${movie.Year}</span>
            </div>
            <button class="remove_btn" onclick="removeMovie('${movie.imdbID}')">✕</button>
        </li>
    `}).join('');
}

function updateStats() {
    sidebarStats.textContent = `${savedMovies.length} saved · 0 watchlist`;
}

savedSearch.addEventListener('input', () => {
    renderSavedMovies(savedSearch.value);
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});
