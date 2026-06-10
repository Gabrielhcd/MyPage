import './Home.css'

import Intro from '../Intro/Intro'
import Jobs from '../Jobs/Jobs'
import Other from '../Other/Other'
import Education from '../Education/Education'
import Stack from '../Stack/Stack'
import Header from '../Header/Header'
import SectionTitle from '..//SectionTitle/SectionTitle'

import cvJson from '../../assets/cv.json'


import Cursor from '../CustomCursor/Cursor'
import About from '../About/About'

function Home() {

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
                    stack={job.mainStack}
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
                    subTitle={""}
                    years={""}
                    platform={game.platform}
                    stack={game.stack}
                    assets={game.assets}
                    smallDescription={game.quickSummary}
                    description={game.description}
                    videoPath={import.meta.env.BASE_URL+game.video}
                    learning={game.learning}
                    technologies={game.technologies}
                    devTech={game.devTechnology}
                    gameTypeIcon={game.gameTypeIcon}
                />
                ))}
            </div>
            </div>
            <SectionTitle titleSize="3" title="Other"/>
            <div className='container center'>
                <div className='row justify-content-center'>
                    <Other
                        title={cvJson.other.title}
                        time={cvJson.other.time}
                        description={cvJson.other.description}
                        resources={cvJson.other.resources}
                    />
                </div>
            </div>
            <SectionTitle titleSize="3" title="Education"/>
            <Education
            university={cvJson.education.university}
            years={cvJson.education.years}
            title={cvJson.education.title}
            degree="Bachelors Degree"
            />
            <SectionTitle titleSize="3" title="API Stack"/>
            <Stack techs={cvJson.technical.stack} stackType="API"/>
            <SectionTitle titleSize="3" title="Game Stack"/>
            <Stack techs={cvJson.technical.gameStack} stackType="Games"/>
            <SectionTitle titleSize="3" title="About this Page"/>
            <About/>
      </>
    )
}

export default Home