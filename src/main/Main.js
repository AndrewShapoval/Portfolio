import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Приветствую!</span>
                    <h1>Я Андрей Шаповал</h1>
                    <p>React разработчик</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}