import './Stack.css'

function Stack(props) {

    return(
        <div className="container">
            <ul className='list-group list-group-horizontal-md flex-row'>
                {props.techs.map((techno) => (
                    <li className='list-group-item'>
                    <span className='badge text-bg-primary rounded-pill'>{techno}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Stack