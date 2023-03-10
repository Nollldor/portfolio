import {FC} from "react";
import styles from "./Contacts.module.css"
import container from "../../common/styles/Container.module.css"
import {SectionTitle} from "../SectionTitle/SectionTitle";


type MainType = {}

export const Contacts: FC<MainType> = () => {

    return (
        <section id={"contacts"} className={styles.contactsBlock}>
            <div className={`${container.container} ${styles.contactsContainer}`}>
                <SectionTitle title={"Contacts"}
                              subTitle={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface."}/>
                <form className={styles.contactsForm} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea className={styles.contactsFormTextArea} name="" id="" cols={30} rows={10}></textarea>
                </form>
                <button>Send</button>
            </div>
        </section>
    )
}