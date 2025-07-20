import Link from "next/link";
import { db } from "@/utils/utilities";

export default async function CommentsPage({ params }) {
  const { id } = await params;

  //   const reviews = (
  //     await db.query(
  //       `SELECT  films.title, (
  //   SELECT ARRAY_AGG(comment)   FROM reviews
  //   WHERE reviews.film_id = films.id
  // )       as reviews
  // FROM films `
  //     )
  //   ).rows[0];

  const reviews = (await db.query(`SELECT * FROM reviews WHERE id = $1`, [id]))
    .rows;

  console.log(reviews);
  return (
    <div>
      <h1>The film reviews</h1>
      <ul>
        {reviews.map((review) => (
          <div key={review.id}>
            <li>{review.name}</li>
            <li>{review.comment}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
