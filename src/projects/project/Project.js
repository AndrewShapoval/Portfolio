import React from "react";
import style from "./Project.module.css"

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <a className={style.viewBtn}>Watch</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}