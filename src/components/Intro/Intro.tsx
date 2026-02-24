import './Intro.css'

interface IntroProps {
    summary: string;
}

function Intro(props: IntroProps) {
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