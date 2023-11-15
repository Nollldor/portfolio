import {FC} from "react";
import styles from "./Home.module.scss"
import container from "../../common/styles/Container.module.scss"
import commonStyles from "../../common/styles/CommonStyles.module.css"

type MainType = {}

export const Home: FC<MainType> = () => {

    return (
        <section id={"home"} className={styles.homeBlock}>
            <div className={styles.decoration}>
                <div className={`${container.container} ${commonStyles.fullHeight}`}>
                    <div className={styles.decorationItem}></div>
                    <div className={styles.decorationItem}></div>
                    <div className={styles.decorationItem}></div>
                    <div className={styles.decorationItem}></div>
                    <div className={styles.decorationItem}></div>
                </div>
            </div>
            <div className={`${container.container}`}>
                <div className={styles.row}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.content}>
                            <h4>Hello, my name is</h4>
                            <h5>Arthur Ishmiev</h5>
                            <p>I'm the frontend based in Saint-Petersburg. I make the visual to be more interactive.</p>
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