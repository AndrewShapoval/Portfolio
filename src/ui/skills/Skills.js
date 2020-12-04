import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import ReactIcon from "../../assets/image/React-icon.svg"
import ReduxIcon from "../../assets/image/Redux_Logo.png"
import RestIcon from "../../assets/image/rest-api.png"
import JSIcon from "../../assets/image/Javascript.png"
import TSIcon from "../../assets/image/Typescript.png"
import HTMLIcon from "../../assets/image/html.svg"
import CSSIcon from "../../assets/image/css-3.svg"
import SassIcon from "../../assets/image/Sass.png"
import GitIcon from "../../assets/image/Git.png"
import TestIcon from "../../assets/image/UnitTest.jpg"
import MIIcon from "../../assets/image/MaterialUI.png"
import SoftIcon from "../../assets/image/SoftSkills.jpg"
import AxiosIcon from "../../assets/image/Axios1.jpeg"
import FormikIcon from "../../assets/image/Formik.png"
import StorybookIcon from "../../assets/image/Storybook.png"
import ReduxFormIcon from "../../assets/image/Redux-Form.png"
import Fade from 'react-reveal/Fade';

export const Skills = () => {

    const ReactI = {backgroundImage: `url(${ReactIcon})`};
    const ReduxI = {backgroundImage: `url(${ReduxIcon})`};
    const RestI = {backgroundImage: `url(${RestIcon})`};
    const JS = {backgroundImage: `url(${JSIcon})`};
    const TS = {backgroundImage: `url(${TSIcon})`};
    const HTML = {backgroundImage: `url(${HTMLIcon})`};
    const CSS = {backgroundImage: `url(${CSSIcon})`};
    const Saas = {backgroundImage: `url(${SassIcon})`};
    const Git = {backgroundImage: `url(${GitIcon})`};
    const TestI = {backgroundImage: `url(${TestIcon})`};
    const MII = {backgroundImage: `url(${MIIcon})`};
    const SoftSI = {backgroundImage: `url(${SoftIcon})`};
    const AxiosI = {backgroundImage: `url(${AxiosIcon})`};
    const FormikI = {backgroundImage: `url(${FormikIcon})`};
    const StorybookI = {backgroundImage: `url(${StorybookIcon})`};
    const ReduxFormI = {backgroundImage: `url(${ReduxFormIcon})`};

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <Fade bottom>
                    <div className={style.skills}>
                        <Skill title={"React"} icon={ReactI} description={""}/>
                        <Skill title={"Redux"} icon={ReduxI} description={""}/>
                        <Skill title={"Rest API"} icon={RestI} description={""}/>
                        <Skill title={"JavaScript"} icon={JS} description={""}/>
                        <Skill title={"TypeScript"} icon={TS} description={""}/>
                        <Skill title={"HTML"} icon={HTML} description={""}/>
                        <Skill title={"CSS"} icon={CSS} description={""}/>
                        <Skill title={"Sass/SCSS"} icon={Saas} description={""}/>
                        <Skill title={"Git"} icon={Git} description={""}/>
                        <Skill title={"Unit testing"} icon={TestI} description={""}/>
                        <Skill title={"Soft skills"} icon={SoftSI} description={""}/>
                        <Skill title={"Axios"} icon={AxiosI} description={""}/>
                        <Skill title={"Formik"} icon={FormikI} description={""}/>
                        <Skill title={"Storybook"} icon={StorybookI} description={""}/>
                        <Skill title={"Material-UI"} icon={MII} description={""}/>
                        <Skill title={"ReduxForm"} icon={ReduxFormI} description={""}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}