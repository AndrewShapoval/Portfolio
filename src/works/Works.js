import React from "react";
import style from "./Works.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/Work";

export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Работы</h2>
                <div className={style.works}>
                    <Work title={'Social network'} description={'kerknnglrw lwelnglrngn wlgnwlkgn wlkegnwelkgn'}/>
                    <Work title={'Todolist'} description={'jwbv wenfnfrjng jgjnrjg ergnrjkg rg erngnr egnegn'}/>
                </div>
            </div>
        </div>
    )
}