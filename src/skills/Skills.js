import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import HTMLIcon from "../assets/image/telegram.svg"
import JSIcon from "../assets/image/telegram.svg"
import ReactIcon from "../assets/image/telegram.svg"
import CSSIcon from "../assets/image/telegram.svg"

export const Skills = () => {

    const HTML = {
        backgroundImage: `url(${HTMLIcon})`,
    };

    const JS = {
        backgroundImage: `url(${JSIcon})`,
    };

    const ReactI = {
        backgroundImage: `url(${ReactIcon})`,
    };

    const CSS = {
        backgroundImage: `url(${CSSIcon})`,
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"React"} icon={ReactI} description={"benbne;n lnerbonr"}/>
                    <Skill title={"JavaScript"} icon={JS} description={"benbne;n lnerbonro tbnonb krtntb"}/>
                    <Skill title={"HTML"} icon={HTML} description={"benbne;n lnerbonro tbnointb"}/>
                    <Skill title={"CSS"} icon={CSS} description={"benbne;n lnerbonro tbnonb krtnbintb"}/>
                </div>
            </div>
        </div>
    );
}