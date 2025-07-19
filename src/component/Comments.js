import Link from "next/link";
import { db } from "@/utils/utilities";

export default async function CommentsPage({ params }) {
  const { id } = await params;

  const reviews = (
    await db.query(
      `SELECT  films.title, (
  SELECT ARRAY_AGG(comment)   FROM reviews
  WHERE reviews.film_id = films.id
)       as reviews
FROM films `
    )
  ).rows[0];

  console.log(reviews);
  return (
    <div>
      <h1>The film reviews</h1>
      <ul>
        {reviews.reviews.map((review, index) => (
          <li key={index}>{review.name}</li>
        ))}
      </ul>
    </div>
  );
}
