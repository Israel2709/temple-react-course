import Tag from '../Tag'

const JobCard = props => {
  const { title, imgSrc, role, listaDeClases = [], tagList } = props
  console.log(props)
  /*
   props = {
    title:'photoshop',
    imgSrc :'....',
    role:'Senior Front-end Developer
   }
   */
  return (
    <div className={`job-card ${listaDeClases.join(' ')}`}>
      <div className='job-description'>
        <img src={imgSrc} alt='' className='job-image' />
        <div className='job-heading'>
          <h4>{title}</h4>
          <span className='pill'>New!</span>
          <span className='pill'>Featured</span>
          <h2>{role}</h2>
          <p>
            <span>1d Ago</span>
            <span>Full Time</span>
            <span>USA only</span>
          </p>
        </div>
      </div>
      <div className='tag-wrapper'>
        {tagList.map(tag => (
          <Tag tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default JobCard
