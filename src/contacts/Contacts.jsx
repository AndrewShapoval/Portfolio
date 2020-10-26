import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"} />
                <form className={style.form}>
                    <input type="text" className={style.formArea} placeholder="Name"/>
                    <input type="text" className={style.formArea} placeholder="E-mail"/>
                    <textarea className={style.messageArea} placeholder="Message"/>
                    <button type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}