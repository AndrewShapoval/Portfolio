import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Андрей Шаповал</h2>
                <div className={style.rectangle}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <h3>2020 все права защищены</h3>
            </div>
        </div>
    )
}