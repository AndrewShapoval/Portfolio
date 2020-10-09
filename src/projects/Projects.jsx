import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'kerknnglrw lwelnglrngn wlgnwlkgn wlkegnwelkgn'}/>
                    <Project title={'Todolist'} description={'jwbv wenfnfrjng jgjnrjg ergnrjkg rg erngnr egnegn'}/>
                    <Project title={'Home project'} description={'jwbv wenfnfrjng jgjnrjg ergnrjkg rg erngnr egnegn'}/>
                </div>
            </div>
        </div>
    )
}