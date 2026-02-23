import {useEffect, useRef} from 'react';
import './JobDescription.css'

function JobDescription({isOpen, onClose, title, subTitle, jobYears, description}) {
    var modalBackdrop = document.getElementsByClassName("modalBackdrop")[0]
    if (!isOpen) return null;

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
            <div className='container modal-container-job' onClick={handleContentClick}>
                <div className='row'>
                    <h3 className='col-8 title'>{title}</h3>
                    <button className='closeBtn col-4' onClick={onClose}>X</button>
                </div>
                <h4 className='subTitle'>{subTitle}</h4>
                <h5 className='jobYears'>{jobYears}</h5>
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

export default JobDescription;