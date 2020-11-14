import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {sendMessageTC} from "../../bll/app-reducer";

export const Contacts = () => {

    const dispatch = useDispatch()
    const status = useSelector(state => state.app.status)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(sendMessageTC(values))
        },
    })

    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"}/>
                <Fade>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <input type="text"
                               className={style.formArea}
                               placeholder="Enter your name"
                               onChange={formik.handleChange}
                               name={"name"} value={formik.values.name}
                        />
                        <input type="text"
                               className={style.formArea}
                               placeholder="Your email"
                               onChange={formik.handleChange}
                               name={"email"} value={formik.values.email}/>
                        {formik.errors.email ? <div className={style.errorEmail}>{formik.errors.email}</div> : null}
                        <textarea className={style.messageArea}
                                  placeholder="Message"
                                  onChange={formik.handleChange}
                                  name={"message"} value={formik.values.message}/>
                        <button type="submit"
                                value={"send"}
                                onClick={formik.handleSubmit}
                        >Send message
                        </button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}