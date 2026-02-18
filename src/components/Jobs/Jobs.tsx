import './Jobs.css'

import kitty from '../../assets/typing-typing-furiously.gif'
import { useState } from 'react';
import JobDescription from '../JobDescription/JobDescription';

function Jobs(props) {

    const [isOpen, setIsOpen] = useState(false);

    const cardStyle = {
        margin: 10,
        /*width: 350*/
    }

    if (props.bHasVisual) {
        return(
        <div className='card col-5' style={cardStyle}>
            <img src={kitty} className='card-img-top' alt='...'/>
                <div className='card-btm-text-style' style={{}}>
                    <p>UE5</p>
                </div>
            <div className='card-body'>
                <h4 className='card-title'>{props.title}</h4>
                <h3 className='card-subtitle'>{props.subTitle}</h3>
                <p className='card-text'>{props.smallDescription}</p>
            </div>
        </div>
    )
    }
    else {
        return(
        <div className='card col-5' style={cardStyle}>
            <div className='card-body'>
                <div onClick={() => setIsOpen(true)}>
                    <h4 className='card-title'>{props.title}</h4>
                </div>
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