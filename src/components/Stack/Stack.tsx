import './Stack.css'

interface StackProps {
    techs: string[];
}

function Stack(props: StackProps) {

    return(
        <div className="container">
            <ul className='list-group list-group-horizontal-md flex-row'>
                {props.techs.map((techno: String) => (
                    <li className='list-group-item'>
                    <span className='badge text-bg-primary rounded-pill'>{techno}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Stack