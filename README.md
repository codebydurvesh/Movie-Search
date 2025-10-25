# 🎬 Movie Explorer App

A modern, responsive movie discovery application built with React and Vite that allows users to explore popular movies and search for their favorite films using The Movie Database (TMDB) API.

## ✨ Features

- **Popular Movies**: Browse through trending and popular movies
- **Search Functionality**: Search for movies by title
- **Favorites**: Save your favorite movies for quick access
- **Responsive Design**: Seamless experience across all devices
- **Modern UI**: Clean and intuitive user interface

## 🚀 Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **TMDB API**: Movie database API for fetching movie information
- **CSS**: Custom styling for a unique look and feel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone [your-repository-url]
   cd Movie-App
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the frontend directory and add your TMDB API key:

   ```
   VITE_API_KEY=your_tmdb_api_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 Usage

- The home page displays popular movies
- Use the search bar to find specific movies
- Click on the heart icon to add movies to your favorites
- Navigate to the favorites page to view your saved movies

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/      # Reusable UI components
│   ├── contexts/        # React context providers
│   ├── pages/          # Main application pages
│   ├── services/       # API and other services
│   └── css/            # Styling files
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- React and Vite communities for excellent documentation and tools
