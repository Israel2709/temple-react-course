import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'reactstrap'
import usersApi from '../../api/users'
const UserDetail = () => {
  console.log(useParams())
  const { userId } = useParams()
  const [userData, setUserData] = useState()

  const fetchUserData = useCallback(async () => {
    const result = await usersApi.getUserById(userId)
    console.log(result)
    setUserData(result)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])
  return (
    <div className='col-12'>
      {!userData && <Alert color='primary'>Cargando Datos</Alert>}
      {userData && (
        <div className='card'>
          <img src='...' className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>
              {userData.name} {userData.lastname}
            </h5>
            <p className='card-text'>{userData.email}</p>
            <p className='card-text'>{userData.role}</p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetail
