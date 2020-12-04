import React from 'react';
import style from './Skill.module.scss';

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.icon}></div>
            <h3 className={style.title}>{props.title}</h3>
            {/*<div className={style.description}>{props.description}</div>*/}
        </div>
    );
}