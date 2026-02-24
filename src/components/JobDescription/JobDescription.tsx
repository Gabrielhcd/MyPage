import type { SyntheticEvent } from 'react';
import './JobDescription.css'

interface JobDescriptionProps {
    isOpen: Boolean;
    onClose: () => void;
    title: String;
    subTitle: String;
    jobYears: String;
    description: String;
    stack: string[];
}

function JobDescription(props: JobDescriptionProps) {
    var modalBackdrop = document.getElementsByClassName("modalBackdrop")[0]
    if (!props.isOpen) return null;

    const handleContentClick = (e: SyntheticEvent) => {
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
                    <h3 className='col-8 title'>{props.title}</h3>
                    <button className='closeBtn col-4' onClick={props.onClose}>X</button>
                </div>
                <h4 className='subTitle'>{props.subTitle}</h4>
                <h5 className='jobYears'>{props.jobYears}</h5>
                <p>{props.description}</p>
                <h5 className='stack'>Stack</h5>
                <ul className='list-group list-group-horizontal-md flex-row'>
                    {props.stack.map((tech: String) => (
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