import './SectionTitle.css'

interface SectionTitleProps {
    titleSize: string;
    title: String;
}

function SectionTitle(props: SectionTitleProps) {
    if (props.titleSize === "2") {
        return(
        <div className="container" style={{ backgroundColor: ''}}>
            <div className='row'>
                <h2 className='h2-style'>{props.title}</h2>
            </div>
        </div>
    );
    }
    if (props.titleSize === "3") {
        return(
        <div className="container" style={{ backgroundColor: ''}}>
            <div className='row'>
                <h3 className='h3-style'>{props.title}</h3>
            </div>
        </div>
    );
    }
    if (props.titleSize === "4") {
        return(
        <div className="container" style={{ backgroundColor: ''}}>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-11'>
                    <h4 className='h4-style'>{props.title}</h4>
                </div>
            </div>
        </div>
    );
    }
}

export default SectionTitle