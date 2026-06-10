import "./About.css"
import booksIcon from '../../assets/books.png'
import hammerIcon from '../../assets/thor.png'
import gearsIcon from '../../assets/settings.png'

function About() {
    return(
        <div>
            <div>
                <p>This page works mainly as a portfolio and CV somewhat. The objective is to show some small games I have made from either courses/tutorials or from ideas. So far most of them are POCs. Their main focus is to serve for testing and learning.</p>
                <h5>Each Game Card contains 1 of these icons:</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src={booksIcon} className='icons' id='iconsMean'/>
                        </div>
                        <div className="col-8">
                            <p>This means this game was made by following tutorials/courses. There are some changes on it for personal testing and learning. Mostly to show that I have learn certain topics related to either the editor or the game type.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <img src={hammerIcon} className='icons' id='iconsMean'/>
                        </div>
                        <div className="col-8">
                            <p>This game was design and develop from personal preference. Either based on something that already exists or just an idea I had to try and learn more.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <img src={gearsIcon} className='icons' id='iconsMean'/>
                        </div>
                        <div className="col-8">
                            <p>Means this is a company project. </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About;