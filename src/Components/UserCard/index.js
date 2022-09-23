import { Link } from 'react-router-dom'
const UserCard = props => {
  const { userId } = props
  const { name, lastname } = props.cardData
  return (
    <div className='col'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>
            {name} {lastname}
          </h5>
          <Link to={`user-detail/${userId}`}>
            <button className='btn btn-secondary'>Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserCard
