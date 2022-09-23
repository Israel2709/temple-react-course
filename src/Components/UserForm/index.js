import { useState } from 'react'
import { useForm } from 'react-hook-form'
import usersApi from '../../api/users'
import { Alert } from 'reactstrap'
import FormAlerts from '../FormAlerts'
import { useNavigate } from 'react-router-dom'
const UserForm = props => {
  const [showSuccess, setShowSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const onSubmit = async data => {
    console.log(data)
    const response = await usersApi.saveUser(data)
    console.log(response)
    response.name && setShowSuccess(true)
    setTimeout(function () {
      setShowSuccess(false)
      reset()
      navigate('/users-list')
    }, 3000)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-dark text-white p-3 border rounded'
    >
      <div className='form-group'>
        <label htmlFor=''>Nombre</label>
        <input
          type='text'
          className='form-control'
          name='name'
          {...register('name', {
            required: { value: true, message: 'This field is required' },
            minLength: {
              value: 4,
              message: 'El nombre debe tener al menos 4 caracteres'
            }
          })}
        />
        {errors.name?.type === 'required' && (
          <FormAlerts message={errors.name?.message} />
        )}
        {errors.name?.type === 'minLength' && (
          <FormAlerts message={errors.name?.message} />
        )}
      </div>
      <div className='form-group'>
        <label htmlFor=''>Apellidos</label>
        <input
          type='text'
          className='form-control'
          name='lastname'
          {...register('lastname')}
        />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Email</label>
        <input
          type='text'
          className='form-control'
          name='email'
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
        />
        {errors.email?.type === 'pattern' && (
          <Alert color='warning' className='mt-3'>
            Ingresa un correo válido
          </Alert>
        )}
      </div>
      <div className='form-group'>
        <label htmlFor=''>Rol</label>
        <input
          type='text'
          className='form-control'
          name='role'
          {...register('role')}
        />
      </div>
      <button type='submit' className='btn btn-primary mt-3'>
        Guardar
      </button>
      {showSuccess && (
        <Alert color='success' className='mt-3'>
          El usuario se guardó con éxito!
        </Alert>
      )}
    </form>
  )
}

export default UserForm
