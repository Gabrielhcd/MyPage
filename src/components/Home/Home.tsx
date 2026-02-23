import './Home.css'

import Intro from '../Intro/Intro'
import Jobs from '../Jobs/Jobs'
import Education from '../Education/Education'
import Stack from '../Stack/Stack'
import Header from '../Header/Header'
import SectionTitle from '..//SectionTitle/SectionTitle'

import cvJson from '../../assets/cv.json'

import cursor from '../../assets/CursorV1.png'


import Cursor from '../CustomCursor/Cursor'

function Home() {

    /*const customCursor = document.querySelector('.custom-cursor');

    if (!customCursor === null) {
        document.addEventListener('mousemove', (e) => {
        customCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        })
    }*/

    return (
        <>
            <Cursor/>
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
                    learning={game.learning}
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

export default Home