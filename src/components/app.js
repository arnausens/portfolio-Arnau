import React, {Component} from 'react';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ResumenParalaxImg from "./ResumenParalaxImg";
import TopTitle from './title';
import Skills from "./skills";
import SvgComponent from "./svg";
import MyWork from './myWork';


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="top-page">
                    <div className="top-page__top">
                        <a href="https://www.linkedin.com/in/arnau-esquerre-gallego/" className="linkedin-icon"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <h1 className="email">arnaust3n11@gmail.com</h1>
                    </div>
                    <TopTitle/>
                </div>
                <div className='resume-photo'>
                    <SvgComponent/>
                    <ResumenParalaxImg/>
                </div>
                <div className='line'></div>
                <MyWork/>
                <div className='line'></div>
                <Skills/>
            </div>
        );
    }
}

