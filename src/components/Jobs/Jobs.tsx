import './Jobs.css'

import kitty from '../../assets/typing-typing-furiously.gif'
import { useState } from 'react';
import JobDescription from '../JobDescription/JobDescription';

import { Link } from 'react-router-dom';

function Jobs(props) {

    const [isOpen, setIsOpen] = useState(false);

    const cardStyle = {
        margin: 10,
    }

    const gameDetailsProps = {}

    if (props.bHasVisual) {
        return(
        <div className='card-job col-5' style={cardStyle}>
            <Link to='/game-details' 
            style={{textDecoration: 'none',
                color: 'white'
            }}
            state={
                {video: props.videoPath,
                title: props.title, 
                platform: props.platform,
                githubLink: props.githubLink,
                assets: props.assets,
                description: props.description,
                learning: props.learning
                }}>
                <video src={props.videoPath} className='card-img-top' autoPlay loop muted>
                    <img src={kitty} className='card-img-top'/>
                </video>
                    <div className='card-btm-text-style' style={{}}>
                        <p>UE5</p>
                    </div>
                <div className='card-body'>
                    <h4 className='card-title'>{props.title}</h4>
                    <h3 className='card-subtitle'>{props.platform}</h3>
                    <p className='card-text'>{props.smallDescription}</p>
                </div>
            </Link>
        </div>
    )
    }
    else {
        return(
        <div className='card-job col-5' style={cardStyle}>
            <div className='card-body' onClick={() => setIsOpen(true)}>
                    <h4 className='card-title'>{props.title}</h4>
                <JobDescription isOpen={isOpen} onClose={() => setIsOpen(false)}
                    title={props.title}
                    subTitle={props.subTitle}
                    jobYears={props.years}
                    description={props.description}
                    />
                <h3 className='card-subtitle'>{props.subTitle}</h3>
                <p className='card-text'>{props.smallDescription}</p>
            </div>
        </div>
    )
    }
}

export default Jobs