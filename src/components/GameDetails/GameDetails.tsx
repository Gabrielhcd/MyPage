import './GameDetails.css'

import githubIcon from '../../assets/github-brands-solid-full.svg'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Cursor from '../CustomCursor/Cursor';

function GameDetails(props) {

    const location = useLocation();

    return(
        <>
            <Cursor/>
            <div className='modalBackdrop'></div>
            <div className='container modal-container-game'>
                <Link to='/'>
                    <button className='closeBtn col-3'>{"Back"}</button>
                </Link>
                <div className='row'>
                    <video src={location.state.video} autoPlay loop muted></video>
                    <h3 className='col-8 title'>{location.state.title}</h3>
                </div>
                <div className='row'>
                    <h4 className='platform col-6'>{location.state.platform}</h4>
                    <a href={location.state.githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='col-6'
                        >
                            <img className='icons' src={githubIcon}/>
                    </a>
                </div>
                
                <h5 className='assets'>{location.state.assets}</h5>
                <p>{location.state.description}</p>
                <h4>What I learned: </h4>
                <p>{location.state.learning}</p>
                <h5 className='stack'>Stack</h5>
                <ul className='list-group list-group-horizontal-md flex-row'>
                    {location.state.stack.map((tech) => (
                        <li className='list-group-item'>
                        <span className='badge text-bg-secondary rounded-pill'>{tech}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default GameDetails;