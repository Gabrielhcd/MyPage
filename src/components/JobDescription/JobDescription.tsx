import {useEffect, useRef} from 'react';
import './JobDescription.css'

function JobDescription({isOpen, onClose, title, subTitle, jobYears, description, stack}) {
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
                <ul className='list-group list-group-horizontal-md flex-row'>
                    {stack.map((tech) => (
                        <li className='list-group-item'>
                        <span className='badge text-bg-success rounded-pill'>{tech}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default JobDescription;