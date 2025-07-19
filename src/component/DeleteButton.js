 


 export default async function DeleteButton({ id }) {

    const {id} = await params;        
    async function handleDeleteFilm (id) {
        try {
            await db.query(`DELETE FROM films WHERE id = $1`, [id]);
            console.log(`Film with id ${id} deleted`);
            // Optionally, you can redirect or update the UI after deletion
        } catch (error) {
            console.error("Error deleting film:", error);
        }
    };



    return (
        <button onClick={() => handleDeleteFilm(params.id)}>Delete</button>
    )
 }