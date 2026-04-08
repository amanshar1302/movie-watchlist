# 🎬 Movie Watchlist Project

A sleek and interactive **Movie Watchlist Web App** built using **HTML, CSS, and JavaScript**. This app allows users to search, filter, and sort movies, manage a personal watchlist, and even pick a random movie for their next watch session.

---

## 🚀 Features

### 🔍 Live Movie Search

* Search for movies in real-time using the **OMDb API**
* Results update dynamically as the user types or on search click

---

### 🎯 Filtering

* Filter movies based on:

  * Year
  * Type (movie, series, episode)
* Helps users quickly refine search results

---

### 🔃 Sorting

* Sort movies by:

  * Title (A–Z / Z–A)
  * Year (Newest / Oldest)
* Enhances browsing and usability

---

### ⭐ Watchlist Toggle

* Add or remove movies from your watchlist with a single click
* Each movie card includes an interactive toggle button

---

### 🎮 Button Interactions

* Smooth and responsive button actions:

  * Add/Remove from watchlist
  * Search trigger
  * Random movie picker 🎲
* Provides instant feedback to users

---

### 🌗 Dark / Light Mode

* Toggle between **Dark Mode 🌙** and **Light Mode ☀️**
* Improves user experience and accessibility

---

### 📭 Empty States

* Friendly UI messages when:

  * No movies are found
  * Watchlist is empty

---

### 🎲 Random Movie Night

* Picks a random movie from your watchlist
* Perfect for indecisive movie nights 🍿

---

## 🎨 UI Highlights

* Modern and responsive design
* Sticky sidebar for "Saved Movies"
* Clean card-based layout
* Smooth transitions and animations

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **APIs Used:**

  * OMDb API → [https://www.omdbapi.com/](https://www.omdbapi.com/)
  * TMDB API → [https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started)
  * Watchmode API → [https://api.watchmode.com/](https://api.watchmode.com/)

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/movie-watchlist.git
cd movie-watchlist
```

2. Open the project:

* Simply open `index.html` in your browser
  **OR**
* Use Live Server (recommended in VS Code)

---

## 🔑 API Setup

* Get your API keys from:

  * OMDb API
  * TMDB API
  * Watchmode API

* Create a `config.js` (or similar) file:

```javascript
const API_KEYS = {
  OMDB: "your_api_key",
  TMDB: "your_api_key",
  WATCHMODE: "your_api_key"
};
```

---

## 📂 Project Structure

```
/project-folder
  index.html
  style.css
  script.js
  /components (optional JS modules)
  /assets
```

---

## 💡 Future Enhancements

* Movie details popup/page (cast, ratings, trailers)
* Streaming availability integration
* Save watchlist using LocalStorage
* Pagination for search results
* PWA support (installable app)

---

## 🎯 Goal of the Project

To practice:

* API integration
* DOM manipulation
* UI/UX design
* JavaScript logic building

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

