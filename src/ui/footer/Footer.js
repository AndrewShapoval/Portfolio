import React from "react";
import style from "./Footer.module.scss"
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";
import vk from "../../assets/image/vk.svg"
import telegram from "../../assets/image/telegram.svg"
import linkedin from "../../assets/image/linkedin.svg"
import gitHub from "../../assets/image/github.svg"


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={"Andrew Shapoval"} />
                <div className={style.socialIcons}>
                        <a href="https://t.me/AndrewShapoval"
                           style={{backgroundImage: `url(${telegram})`}}>
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-shapoval-6143871b9/"
                           style={{backgroundImage: `url(${linkedin})`}}>
                        </a>
                        <a href="https://vk.com/id211445486"
                           style={{backgroundImage: `url(${vk})`}}>
                        </a>
                        <a href="https://github.com/AndrewShapoval"
                           style={{backgroundImage: `url(${gitHub})`}}>
                        </a>
                </div>
                <span className={style.copyright}>2020 all rights reserved</span>
            </div>
        </div>
    )
}