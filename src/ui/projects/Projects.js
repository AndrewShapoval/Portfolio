import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";
import socialImage from "./../../assets/image/social.jpg"
import todoImage from "./../../assets/image/todolist.jpg"
import dietaGramImage from "./../../assets/image/DietaGram.svg"
import Fade from 'react-reveal/Fade';

export const Projects = () => {

    const social = {backgroundImage: `url(${socialImage})`};
    const todolist = {backgroundImage: `url(${todoImage})`};
    const dietaGram = {backgroundImage: `url(${dietaGramImage})`};

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <Fade bottom>
                    <div className={style.projects}>
                        <Project style={dietaGram} title={'DietaGram'}
                                 href={"https://dg-web-repo-ebon.vercel.app/"}
                                 description={'Development of an ssr application on NextJS, localization, adaptive layout, SCSS'}/>
                        <Project style={social} title={'Social network'}
                                 href={"https://andrewshapoval.github.io/way-of-samurai/"}
                                 description={'Educational spa project using ReactJS, Redux, class components, typescript, Axios, redux-thunk'}/>
                        <Project style={todolist} title={'Todolist'}
                                 href={"https://github.com/AndrewShapoval/it-incubator-todolist-ts-21"}
                                 description={'Training spa project using ReactJS, Redux Toolkit, hooks, typescript, Axios, redux-thunk, Formik, unit test'}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}