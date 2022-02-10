import React, { useEffect } from 'react';
import Parallax from "parallax-js";
import matrix from "../../static/assets/matrix.png";
import fotoArnau from "../../static/assets/arnaupng.png";
import pantalla from "../../static/assets/pantallaAzul.png";

const ResumenParalaxImg = () => {

    useEffect(() => {
        var parallaxImg = document.getElementById("parallax-wrapper");
        var parallaxInstance = new Parallax(parallaxImg ,{
            relativeInput: true,
            hoverOnly: true, 
        });
    })
    return (
        <div className="resumen-foto">
            <div className='resumen-wrapper'>
                <div className="resumen-p">
                    <img src={pantalla} alt="pantalla" />
                    <div className="glitch" data-text="De la generación del MS-DOS, cd-install, los disquetes y esos modems tan ruidosos.
                        Apasionado de la informática y la tecnología, me fascina ver como hemos avanzado e imaginar cuanto más nos queda por avanzar.
                        Por la pandemia pude probar la miel del 'coding' con un pre-curso de HTML, CSS y JS. Fue ahí cuando decidí dejar mi profesión
                        en la hostelería y estudiar programación. Profundizando en el front-end, pero con un ojo puesto en el back-end, sigo aprendiendo 
                        de este gigantesco mundo. Let's Code!">De la generación del MS-DOS, cd-install, los disquetes y esos modems tan ruidosos.
                        Apasionado de la informática y la tecnología, me fascina ver como hemos avanzado e imaginar cuanto más nos queda por avanzar.
                        Por la pandemia pude probar la miel del "coding" con un pre-curso de HTML, CSS y JS. Fue ahí cuando decidí dejar mi profesión
                        en la hostelería y estudiar programación. Profundizando en el front-end, pero con un ojo puesto en el back-end, sigo aprendiendo 
                        de este gigantesco mundo. Let's Code!
                    </div> 
                </div>
            </div>
            <div className='parallax-wrapper' id="parallax-wrapper">
                <img className="parallax-img__mundo" src="https://media.giphy.com/media/ko7twHhomhk8E/giphy.gif" data-depth="0.2"/>
                <img className="parallax-img__codigo" src={matrix} data-depth="0.4"/>
                <img className="parallax-img__arnau" src={fotoArnau} data-depth="0.6"/>
                <img className="parallax-img__interferencia" src="https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif" data-depth="0"/>
            </div>
        </div>
    )
}


export default ResumenParalaxImg;
