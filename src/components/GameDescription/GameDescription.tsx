import './GameDescription.css'

import githubIcon from '../../assets/github-brands-solid-full.svg'

function GameDescription({isOpen, onClose, title, 
    platform, description, video, stack, assets, githubLink}) {
    var modalBackdrop = document.getElementsByClassName("modalBackdrop")[0]
    if (!isOpen) {
        document.body.style.overflow = 'unset'
        return null;
    }
    
    document.body.style.overflow = 'hidden'

    const handleContentClick = (e) => {
        e.stopPropagation();
        modalBackdrop.classList.remove("hidden")
    };

    window.onclick = function(event) {
        if (event.target == modalBackdrop) {
            modalBackdrop.classList.add("hidden")
        }
    }



    /*const useClickOutside = (callback) => {
        const ref = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [callback]);

        return ref;
    };*/

    return(
        <>
            <div className='modalBackdrop'></div>
            <div className='container modal-container-game' onClick={handleContentClick}>
                <button onClick={onClose} className='closeBtn col-3'>{"Back"}</button>
                <div className='row'>
                    <video src={video} autoPlay loop muted></video>
                    <h3 className='col-8 title'>{title}</h3>
                </div>
                <div className='row'>
                    <h4 className='platform col-6'>{platform}</h4>
                    <a href={githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='col-6'
                        >
                            <img className='icons' src={githubIcon}/>
                    </a>
                </div>
                
                <h5 className='assets'>{assets}</h5>
                <p>{description}</p>
                <h5 className='stack'>Stack</h5>
                <div className='row'>
                    <div className='col'>Java</div>
                    <div className='col'>SB</div>
                    <div className='col'>Docker</div>
                    <div className='col'>Jenkins</div>
                </div>
            </div>
        </>
    )
}

export default GameDescription;