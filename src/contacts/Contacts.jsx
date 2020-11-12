import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';

export const Contacts = () => {
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"}/>
                <Fade>
                    <form className={style.form}>
                        <input type="text" className={style.formArea} placeholder="Name"/>
                        <input type="text" className={style.formArea} placeholder="E-mail"/>
                        <textarea className={style.messageArea} placeholder="Message"/>
                        <button type="submit">Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}