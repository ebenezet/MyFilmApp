import { db } from "@/utils/utilities";

export default function NewFilm() {
  async function AddAFilm(formData) {
    "use server";

    const title = formData.get("title");
    const director = formData.get("director");
    const year = formData.get("year");
    const cover = formData.get("cover");

    // insert the data into the films database
    await db.query(
      `INSERT INTO films (title, director, year, cover) VALUES ($1, $2, $3, $4)`,
      [title, director, year, cover]
    );
    console.log("Thank you for adding a film!");

    revalidatePath("/posts");

    redirect("/posts");
  }

  return (
    <form action={AddAFilm}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="director">Director</label>
      <input id="director" name="Director" type="text" />
      <label htmlFor="year">Year</label>
      <input id="year" name="year" type="text" />
      <label htmlFor="cover">Cover</label>
      <input id="cover" name="cover" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
