import pg from "pg";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/utilities";

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
      <button>Click me to remove a film</button>
    </div>
  );
}
