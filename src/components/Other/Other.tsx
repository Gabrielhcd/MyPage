interface OtherProps {
    title: String,
    time: String
    description: String,
    resources: String
}

function Other(props: OtherProps) {
    return(
        <div>
            <div className="card">
                <h3 className="card-title">{props.title}</h3>
                <img src="" alt="" />
                <h5 className="card-subtitle">{props.time}</h5>
                <p className="card-description">{props.description}</p>
                <h6 className="card-resources">{props.resources}</h6>
            </div>
        </div>
    )
}

export default Other;