import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = (props) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"benbne;n lnerbonro tbnonb krtnbintb"}/>
                    <Skill title={"CSS"} description={"benbne;n lnerbonro tbnonb krtnbintb"}/>
                    <Skill title={"React"} description={"benbne;n lnerbonro tbnonb krtnbintb elbkn h3h h334gh btrht h4trn4"}/>
                </div>
            </div>
        </div>
    );
}