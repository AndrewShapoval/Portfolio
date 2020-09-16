import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contacts} action="/page" method="post">
                    <li><input type="text"></input></li>
                    <li><input type="text"></input></li>
                    <textarea/>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    )
}