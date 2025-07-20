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
    <div className="individual-film-page">
      <h3> Film id: {singleFilm.id}</h3>
      <h4>Film director: {singleFilm.director}</h4>
      <figurecaption key={singleFilm.id}>
        <Image
          src={singleFilm.cover}
          alt="the film cover"
          width={200}
          height={300}
        />
        <figurecaption>{singleFilm.title}</figurecaption>
      </figurecaption>

      <p>Fancy deleting this film? Please click to button below</p>

      <CommentsPage params={params} />
      {/* <button onClick={() => handleDeleteFilm}>Delete Film</button> */}

      <Link href="/films" className="backtofilms">
        Back to Films
      </Link>
    </div>
  );
}
