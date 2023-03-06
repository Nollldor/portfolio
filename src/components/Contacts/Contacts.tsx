import {FC} from "react";
import styles from "./Contacts.module.css"
import container from "../../common/styles/Container.module.css"


type MainType = {}

export const Contacts: FC<MainType> = () => {

    return (
        <section className={styles.contactsBlock}>
            <div className={`${container.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
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