import './App.css'
import JobCard from './Components/JobCard'

const jobsData = [
  {
    title: 'Photoshop',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2101px-Adobe_Photoshop_Express_logo.svg.png',
    role: 'Sr. Designer',
    tagList: [
      'JavaScript',
      'Design',
      'Front-End',
      'Software Development',
      'Learning'
    ]
  },
  {
    title: 'JavaScript',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    role: 'Sr. Front-End Developer',
    tagList: ['JavaScript', 'Software Development', 'Learning']
  },
  {
    title: 'React',
    imgSrc:
      'https://mpng.subpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg',
    role: 'Sr. React Developer',
    tagList: ['JavaScript', 'Design']
  },
  {
    title: 'Photoshop',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2101px-Adobe_Photoshop_Express_logo.svg.png',
    role: 'Sr. Designer',
    tagList: ['Software Development', 'Learning']
  },
  {
    title: 'JavaScript',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    role: 'Sr. Front-End Developer',
    tagList: ['Software Development', 'Learning']
  },
  {
    title: 'React',
    imgSrc:
      'https://mpng.subpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg',
    role: 'Sr. React Developer',
    tagList: ['Software Development', 'Learning']
  }
]

function App () {
  return (
    <div className='App'>
      <div className='jobs-page'>
        {jobsData.map(job => {
          const { title, imgSrc, role, tagList } = job
          return (
            <JobCard
              title={title}
              imgSrc={imgSrc}
              role={role}
              tagList={tagList}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
