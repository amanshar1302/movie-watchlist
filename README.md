# 🎬 Movie Watchlist Project

A sleek and interactive **Movie Watchlist Web App** built using **HTML, CSS, JavaScript, and React**. This app allows users to search for movies, save them to a personal watchlist, and even pick a random movie for their next watch session.

---

## 🚀 Features

### 🔍 Live Movie Search

* Search for movies in real-time using the **OMDb API**
* Results update dynamically as the user types or on search click

### ⭐ Watchlist Toggle

* Add or remove movies from your watchlist with a single click
* Each movie card includes a toggle button

### 📭 Empty States

* Friendly UI messages when:

  * No movies are found
  * Watchlist is empty

### 🎨 Modern UI

* Dark theme inspired by platforms like Disney+ and HBO Max
* Sticky sidebar for "Saved Movies"
* Smooth and responsive layout

### 🎲 Optional Feature: Random Movie Night

* Picks a random movie from your watchlist
* Perfect for indecisive movie nights 🍿

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Framework:** React
* **APIs Used:**

  * OMDb API → https://www.omdbapi.com/
  * TMDB API → https://developer.themoviedb.org/docs/getting-started
  * Watchmode API → https://api.watchmode.com/

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/movie-watchlist.git
cd movie-watchlist
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

---

## 🔑 API Setup

* Get your API keys from:

  * OMDb API
  * TMDB API
  * Watchmode API

* Create a `.env` file in the root directory:

```env
REACT_APP_OMDB_API_KEY=your_api_key
REACT_APP_TMDB_API_KEY=your_api_key
REACT_APP_WATCHMODE_API_KEY=your_api_key
```

---

## 📂 Project Structure

```
/src
  /components
    MovieCard.js
    SearchBar.js
    WatchlistSidebar.js
  /pages
    Home.js
  /utils
    api.js
  App.js
  index.js
```

---

## 💡 Future Enhancements

* Add movie details page (cast, ratings, trailers)
* Integrate streaming availability using Watchmode API
* Add user authentication
* Persist watchlist using local storage or database

---

## 🎯 Goal of the Project

To practice:

* API integration
* React state management
* UI/UX design
* Component-based architecture

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests to improve the project!

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 🎉 Acknowledgements

* OMDb API
* TMDB API
* Watchmode API

---

**Happy Coding & Enjoy Your Movie Nights! 🍿**


