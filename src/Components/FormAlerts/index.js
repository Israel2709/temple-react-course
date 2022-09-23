import { Alert } from 'reactstrap'

const FormAlerts = props => {
  const { message } = props
  return (
    <Alert color='warning' className='mt-3'>
      {message}
    </Alert>
  )
}

export default FormAlerts
