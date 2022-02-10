import React from 'react'

import HTML5 from "../../static/assets/logos/logoHtml.png";
import css3 from "../../static/assets/logos/logoCss.png";
import javascript from "../../static/assets/logos/logoJs.png";
import react from "../../static/assets/logos/logoReact.png";
import python from "../../static/assets/logos/logoPython.png";
import django from "../../static/assets/logos/logoDjango.png";
import wordpress from "../../static/assets/logos/logoWordpress.png";
import php from "../../static/assets/logos/logoPHP.png";

const MyWork = () => {

    return (
        <div className='mywork-wrapper-high'>
            <div className='mywork-wrapper'>
                <h1></h1>
                <div className="works-wrapper">
                    <div className="work">
                        <img src={HTML5} style={{borderTop: "solid 5px green"}}/>
                    </div>
                    <div className="work" >
                        <img src={css3} style={{borderTop: "solid 5px green"}}/>
                    </div>
                    <div className="work">
                        <img src={javascript} style={{borderTop: "solid 5px yellow"}}/>
                    </div>
                    <div className="work">
                        <img src={react} style={{borderTop: "solid 5px yellow"}}/>
                    </div>
                    <div className="work">
                        <img src={python} style={{borderTop: "solid 5px yellow"}}/>
                    </div>
                    <div className="work">
                        <img src={django} style={{borderTop: "solid 5px orange"}}/>
                    </div>
                    <div className="work">
                        <img src={wordpress} style={{borderTop: "solid 5px green"}}/>
                    </div>
                    <div className="work">
                        <img src={php} style={{borderTop: "solid 5px yellow"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MyWork;
