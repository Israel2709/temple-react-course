import './style.css'

const GenericBox = props => {
  console.log(props.children)
  return (
    <div className='generic-box'>
      <div style={{ border: '3px solid peru' }}>{props.children[0]}</div>

      <div style={{ border: '3px solid slategray' }}>{props.children[1]}</div>
    </div>
  )
}

export default GenericBox
