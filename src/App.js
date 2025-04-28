import './App.css';
import React from 'react';
import MovieSearch from './containers/MovieSearch';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Movie Search App</h1>
      </header>
      <main>
        <MovieSearch />
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Movie Search App | Powered by OMDB API</p>
      </footer>
    </div>
  );
};

export default App;
