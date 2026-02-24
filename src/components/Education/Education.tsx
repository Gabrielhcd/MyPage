import './Education.css'

interface EducationProps {
    university: string;
    years: string;
    title: string;
    degree: string;
}

function Education(props: EducationProps) {
    return(
        <div className="container text center">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.university}</h5>
                    <p>{props.years}</p>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.title}</h6>
                    <h5>{props.degree}</h5>
                </div>
            </div>
        </div>
    )
}

export default Education