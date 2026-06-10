import './Jobs.css'

import kitty from '../../assets/typing-typing-furiously.gif'
import booksIcon from '../../assets/books.png'
import hammerIcon from '../../assets/thor.png'
import { useState } from 'react';
import JobDescription from '../JobDescription/JobDescription';

import { Link } from 'react-router-dom';

interface JobsProps {
    bHasVisual?: Boolean;
    videoPath?: string;
    title: String;
    platform?: String;
    githubLink?: String;
    assets?: String;
    description: String;
    learning?: String;
    technologies?: string[];
    stack: string[];
    smallDescription?: String;
    subTitle: String;
    years: String;
    devTech?: string;
    gameTypeIcon?: string;
}

function Jobs(props: JobsProps) {

    const [isOpen, setIsOpen] = useState(false);

    const cardStyle = {
        margin: 10,
    }

    let icon;
    if (props.gameTypeIcon == "book") {
        icon = <img src={booksIcon} className='icons' id='jobIcons'/>
    } else if (props.gameTypeIcon == "hammer") {
        icon = <img src={hammerIcon} className='icons' id='jobIcons'/>
    }

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
                learning: props.learning,
                stack: props.technologies
                }}>
                {icon}
                <video src={props.videoPath} className='card-img-top' autoPlay loop muted>
                    <img src={kitty} className='card-img-top'/>
                </video>
                    <div className='card-btm-text-style' style={{}}>
                        <p>{props.devTech}</p>
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
                <JobDescription 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)}
                    title={props.title}
                    subTitle={props.subTitle}
                    jobYears={props.years}
                    description={props.description}
                    apiStack={props.stack}
                    />
                <h3 className='card-subtitle'>{props.subTitle}</h3>
                <p className='card-text'>{props.smallDescription}</p>
            </div>
        </div>
    )
    }
}

export default Jobs