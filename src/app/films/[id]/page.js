import pg from "pg";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/utilities";
import CommentsPage from "@/component/Comments";

export default async function IndividualFilmPage({ params }) {
  const { id } = await params;

  const singleFilm = (await db.query(`SELECT * FROM films WHERE id = $1`, [id]))
    .rows[0];

  return (
    <div>
      <h1> Film id: {singleFilm.id}</h1>
      <h2>Film director:{singleFilm.director}</h2>
      <figurecaption key={singleFilm.id}>
        <Image
          src={singleFilm.cover}
          alt="the film cover"
          width={200}
          height={300}
        />
        <figurecaption>{singleFilm.title}</figurecaption>
      </figurecaption>
      <br />
      <p>Fancy deleting this film? Please click to button below</p>

      <CommentsPage params={params} />

      {/* <button onClick={() => handleDeleteFilm}>Delete Film</button> */}
      <br />
      <Link href="/films">Back to Films</Link>
      <Link href="/films/add-film">Fancy Adding a film to the database?</Link>
    </div>
  );
}
