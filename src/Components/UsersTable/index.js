import { Table } from 'reactstrap'

const UsersTable = props => {
  const { data, handlers } = props
  return (
    <Table dark className='mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map(userKey => {
          const { name, lastname, role } = data[userKey]
          return (
            <tr>
              <th scope='row'>{userKey}</th>
              <td>{name}</td>
              <td>{lastname}</td>
              <td>{role}</td>
              <td>
                <button
                  className='btn btn-warning'
                  onClick={() => {
                    handlers.updateUser(userKey)
                  }}
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    handlers.deleteUser(userKey)
                  }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          )
        })
        /*[user1]*/
        }
      </tbody>
    </Table>
  )
}

export default UsersTable
