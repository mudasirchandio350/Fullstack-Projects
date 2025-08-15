import { useState } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <main className="min-h-screen">
        <div className="pattern">
          <div className="wrapper">
            <header>
              <img src="/hero.png" alt="hero banner" />
              <h1>
                Find <span className="text-gradient">Movies</span> You'll Enjoy
                Without the Hassle
              </h1>
            </header>

            {/* Search bar */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <section className="all-movies">
            <h2 className="px-8">All Movies</h2>
            <MovieList searchTerm={searchTerm} />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
