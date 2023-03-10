import {FC} from "react";
import styles from "./Main.module.css"
import container from "../../common/styles/Container.module.css"


type MainType = {}

export const Main: FC<MainType> = () => {

    return (
        <section id={"home"} className={styles.mainBlock}>
            <div className={`${container.container}`}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>"Arthur Ishmiev"</h1>
                    <p>I'm frontend developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>

        </section>
    )
}