import UserForm from '../../Components/UserForm'

const CreateUser = () => {
  const userToken = localStorage.getItem('templetoken')
  return (
    <div className='col-12 col-md-6 offset-md-3'>
      {userToken ? <UserForm /> : <h1>Debes estar registrado</h1>}
    </div>
  )
}

export default CreateUser
