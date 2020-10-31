import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import socialImage from "./../assets/image/social.jpg"
import todoImage from "./../assets/image/todolist.jpg"

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`,
    };

    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social network'} href={"https://github.com/AndrewShapoval/way-of-samurai"}
                             description={'kerknnglrw lwelnglrngn wlgnwlkgn wlkegnwelkgn'}/>
                    <Project style={todolist} title={'Todolist'} href={"https://github.com/AndrewShapoval/it-incubator-todolist-ts-16"}
                             description={'jwbv wenfnfrjng jgjnrjg ergnrjkg rg erngnr egnegn'}/>
                </div>
            </div>
        </div>
    )
}