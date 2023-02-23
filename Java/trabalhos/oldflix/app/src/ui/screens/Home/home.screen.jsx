import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFilmesApi } from "../../../hooks/useFilmesApi/usefilmesapi.hook";
import { Navbar, FilmeCard } from "../../components/index";
import "./home.style.css";

export function Home() {
  const { filmes } = useFilmesApi();
  return (
    <main className="Home_main">
      <Navbar />
      <section className="Home_filmes">
        {filmes?.map((filme) => {
          return (
            <Link
              key={filme.id}
              className="Home_filmedetails"
              to={`/movie/${filme.id}`}
            >
              <FilmeCard filme={filme} />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
