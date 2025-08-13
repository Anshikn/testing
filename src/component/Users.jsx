import { useEffect, useState } from "react"

let Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data)
      )

  }, []);

  return (
    <>
      {/* <h1>List Users</h1>
      <ul>{users.map(user => <li>{user.name}</li>)}</ul>

      <h1>User Email</h1>
      <ul>{users.map(user => <li>{user.email}</li>)}</ul> */}
      <table style='width:200px'>
        <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
        </tr>
        <tr>
          <td>{users.map(user => user.name)}</td>
          <td>{users.map(user => user.email)}</td>
        </tr>
      </table>

    </>
  )

}
export default Users