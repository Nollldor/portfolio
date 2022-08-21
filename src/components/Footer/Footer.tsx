import {FC} from "react";
import styles from "./Footer.module.css"
import container from "../../common/styles/Container.module.css"


type MainType = {}

export const Footer: FC<MainType> = () => {

    return (
        <div className={styles.footerBlock}>
            <div className={`${container.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Arthur Ishmiev</h2>
                <div className={styles.footerSocials}>
                    <a className={styles.footerLink} href=""><img src="" alt=""/></a>
                    <a className={styles.footerLink} href=""><img src="" alt=""/></a>
                    <a className={styles.footerLink} href=""><img src="" alt=""/></a>
                    <a className={styles.footerLink} href=""><img src="" alt=""/></a>
                </div>
                <span>CopyRight</span>
            </div>

        </div>
    )
}