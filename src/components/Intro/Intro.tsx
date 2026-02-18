import './Intro.css'

import cvJson from '../../assets/cv.json'

function Intro(props) {
    return(
        <div className="container text center" style={{ backgroundColor: ''}}>
            <div className='row'>
                <p>
                    {props.summary}
                </p>
            </div>
        </div>
    )
}

export default Intro