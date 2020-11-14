import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

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
        <div id={"home"} className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.text}>
                        <span className={style.hello}>Hello, I'm</span>
                        <h1>Andrew Shapoval</h1>
                        <ReactTypingEffect text="Front-end developer ReactJS"/>
                    </div>
                    <Tilt className="Tilt" options={{ max : 25 }}>
                        <div className={style.photo}></div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}