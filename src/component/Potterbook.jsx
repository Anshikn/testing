import { useState, useEffect } from "react";

function Potterbook() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('https://potterapi-fedeperin.vercel.app/en/books')
      .then(response => response.json())
      .then(data => setBooks(data)
      )

  }, []);

  return (
    <>


      <table border="1">
        <tr>
          <th>Title Of books</th>
          <th>Description Of boooks</th>
        </tr>
        {books.map(book =>
          <tr>
            <td>{book.title}</td>

            <td>{book.description}</td>
          </tr>)}


      </table>
      <button onClick={() => useEffect([])}>Click Me</button>

    </>
  )
}
export default Potterbook
