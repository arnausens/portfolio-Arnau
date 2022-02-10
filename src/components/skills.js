import React from 'react'

import SearchPage from "../../static/assets/works/searchpage.jpg";
import EcommercePage from "../../static/assets/works/ecomerceweb.jpg";
import Funnybooks from "../../static/assets/works/funnybooksweb.jpg";
import PortfolioWeb from "../../static/assets/works/portfolioproject.jpg";
import WebTurotulo from "../../static/assets/works/web-tu-rotulo.jpg";



const Skills = () => {

    return (
        <div className='skills-wrapper'>
            <div className='skill'>
                <h1>Web Wordpress</h1>
                <a href="https://turotulo.es/"><img src={WebTurotulo}/></a>
                <p>Web hecha con wordpress y Divi, en ella también hay unos ejemplos más</p>
            </div>
            <div className='skill'>
                <h1>Web Búsqueda</h1>
                <a href="https://aesquerreg-bottega-dailymarty.herokuapp.com/"><img src={SearchPage}/></a>
                <p>Web de búsqueda, React, Redux...</p>
            </div>
            <div className='skill'>
                <h1>Ecommerce project</h1>
                <a href="https://front-end-react-redux-ecom.herokuapp.com/"><img src={EcommercePage}/></a>
                <p>Proyecto de Ecommerce, React, Redux...</p>
            </div>
            <div className='skill'>
                <h1>Libros interactivos</h1>
                <a href="https://funnybooks.herokuapp.com/"><img src={Funnybooks}/></a>
                <p>Proyecto en proceso de web de libros interactivos,<br/>React, Mobx, para el Back, Python, Django...</p>
            </div>
            <div className='skill'>
                <h1>Portafolio project</h1>
                <a href="https://aeg-bottega-react-portfolio.herokuapp.com/"><img src={PortfolioWeb}/></a>
                <p>Proyecto de portafolio, React...</p>
            </div>

        </div>
        
    )
}


export default Skills
