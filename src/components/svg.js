import React from 'react';
import { useInView } from 'react-intersection-observer';

import Arrow from "../../static/assets/whiteArrowS.svg";


const SvgComponent = () => {
    const [ref, inView] = useInView({
        threshold: 0
    });

    return (
        <div ref={ref} className='svgAnimation'>
            <h1 className="about-me">Sobre Mí</h1>
            { inView ==! false ? <object className="svg" type="image/svg+xml" data={Arrow}>svg-animation</object> : <div className="svg-hidden"></div> }
        </div>
    )
}


export default SvgComponent;
