import React from "react";
import style from "./Work.module.css"

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <div className={style.description}>{props.description}</div>
        </div>
    )
}