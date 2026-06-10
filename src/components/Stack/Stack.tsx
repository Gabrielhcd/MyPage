import './Stack.css'

interface StackProps {
    techs: string[];
    stackType: string;
}

function Stack(props: StackProps) {

    let stackListByType;
    if (props.stackType === "API") {
        stackListByType = props.techs.map((techno: String) => (
            <li className='list-group-item'>
                <span className='badge text-bg-success rounded-pill fs-6'>{techno}</span>
            </li>
        ))
    } else if (props.stackType === "Games") {
        stackListByType = props.techs.map((techno: String) => (
            <li className='list-group-item'>
                <span className='badge text-bg-primary rounded-pill fs-6'>{techno}</span>
            </li>
        ))
    }

    return(
        <div className="container">
            <ul className='list-group list-group-horizontal-md flex-row'>
                {stackListByType}
            </ul>
        </div>
    )
}

export default Stack