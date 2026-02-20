import { useState } from 'react'
import './App.css'
import Intro from './components/Intro/Intro'
import Jobs from './components/Jobs/Jobs'
import Education from './components/Education/Education'
import Stack from './components/Stack/Stack'
import Header from './components/Header/Header'
import SectionTitle from './components/SectionTitle/SectionTitle'

import cvJson from './assets/cv.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header
      name={cvJson.info.name}
      title={cvJson.info.title}
    />
    <Intro
      summary={cvJson.summary.profesional}
    /> 
    <SectionTitle titleSize="3" title="Software Development"/>
    <SectionTitle titleSize="4" title="Microservices"/>
    
    <div className="container center">
      <div className='row justify-content-center'>
        {cvJson.jobs.map((job) => (
          <Jobs
            title={job.client}
            subTitle={job.subtitle}
            years={job.years}
            smallDescription={job.quickSummary}
            description={job.description}
          />
        ))}
        
      </div>
    </div>

    <SectionTitle titleSize="4" title="Games"/>
    <div className="container center">
      <div className='row justify-content-center'>
        {cvJson.games.map((game) => (
          <Jobs
            bHasVisual={true}
            title={game.gameName}
            platform={game.platform}
            stack={game.stack}
            assets={game.assets}
            smallDescription={game.quickSummary}
            description={game.description}
            videoPath={game.video}
          />
        ))}
      </div>
    </div>
    <SectionTitle titleSize="3" title="Education"/>
    <Education
      university={cvJson.education.university}
      years={cvJson.education.years}
      title={cvJson.education.title}
      degree="Bachelors Degree"
    />
    <SectionTitle titleSize="3" title="Stack"/>
    <Stack techs={cvJson.technical.stack}/>
    </>
  )
}

export default App
