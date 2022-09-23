import { useEffect, useState } from 'react'
import usersApi from '../../api/users'
import UserCard from '../../Components/UserCard'

const UsersList = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    const getUsers = async () => {
      const result = await usersApi.getUsers()
      console.log(result)
      setUsers(result)
    }
    getUsers()
  }, [])
  return (
    <div className='col-12'>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {users &&
          Object.keys(users).map(key => {
            return <UserCard key={key} cardData={users[key]} userId={key} />
          })}
      </div>
    </div>
  )
}

export default UsersList
