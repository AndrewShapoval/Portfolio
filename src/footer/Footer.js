import React from "react";
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={"Andrew Shapoval"} />
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}>2020 all rights reserved</span>
            </div>
        </div>
    )
}