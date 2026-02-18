import './Header.css'

import linkedInIcon from '../../assets/linkedin-brands-solid-full.svg'
import githubIcon from '../../assets/github-brands-solid-full.svg'

function Header(props) {
    return(
        <div className="container text center containerStyle">
            <div className='row'>
                <div className='col-4 nameAndTitle'>
                    <h1>{props.name}</h1>
                    <h6>{props.title}</h6>
                </div>
                <div className='col-5'>

                </div>
                <div className='col-3'>
                    <a href="https://www.linkedin.com/in/gabriel-carrasco-diaz-1s98/"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icons'src={linkedInIcon} />
                    </a>
                    <a href="https://github.com/Gabrielhcd"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='icons' src={githubIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
