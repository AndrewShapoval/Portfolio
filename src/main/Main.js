import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions} />
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span className={style.hello}>Hello, I'm</span>
                    <h1>Andrew Shapoval</h1>
                    <p>Front-end developer ReactJS</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}