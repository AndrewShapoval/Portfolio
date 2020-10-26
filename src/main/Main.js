import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
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