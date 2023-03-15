import {FC} from "react";
import styles from "./Main.module.css"
import container from "../../common/styles/Container.module.css"

type MainType = {}

export const Main: FC<MainType> = () => {

    return (
        <section id={"home"} className={styles.mainBlock}>
            <div className={`${container.container}`}>
                <div className={styles.row}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.content}>
                            <h4>Hello, my name is</h4>
                            <h5>Arthur Ishmiev</h5>
                            <p>I'm the frontend based in Canada. I make the visual to be more interactive.</p>
                            <div className={styles.cvLinkWrapper}>
                                <a href="#" className={styles.cvLink}>Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#skills" className={styles.mouseIcon}>
                <span className={styles.wheel}></span>
            </a>
        </section>
    )
}