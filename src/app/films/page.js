import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/utilities";

export default async function FilmPage({ searchParams }) {
  const query = await searchParams;
  const films = (await db.query(`SELECT * FROM films`)).rows;
  console.log(films);

  if (query.sortBy == "asc") {
    //Sort films in ascending order by title
    films.sort((a, b) => {
      console.log(a, b);
      return a.title.localeCompare(b.title);
    });
    //Sort films in descending order by title
  } else if (query.sortBy == "desc") {
    films.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  }

  return (
    <div>
      <h2>My Films</h2>
      <div className="sort-links">
        <Link href="/films?sortBy=asc">Sort Asc</Link>
        <Link href="/films?sortBy=desc">Sort Desc</Link>
        <Link href="/films">Reset Sort</Link>
      </div>

      <ul>
        {films.map((film) => (
          <div key={film.id} className="films-container">
            <Link href={`/films/${film.id}`}>{film.title}</Link>
          </div>
        ))}
      </ul>
      <Link href="/films/add-film">Fancy Adding a film to the database?</Link>
    </div>
  );
}
