import {FC} from "react";
import styles from "./Footer.module.scss"
import container from "../../common/styles/Container.module.scss"
import {faFacebook, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type MainType = {}

export const Footer: FC<MainType> = () => {

    return (
        <footer className={styles.footer}>
            <div className={`${container.container} ${styles.footerContainer}`}>
                <div className={styles.footerLogo}>
                    <span>Ishmiev
                        <span></span>
                    </span>
                </div>
                <ul className={styles.footerSocials}>
                    <li>
                        <a className={styles.footerLink} href="#">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </li>
                    <li>
                        <a className={styles.footerLink} href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a className={styles.footerLink} href="#">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </li>

                </ul>
                <p className={"copyright"}>© 2018 Ishmiev. All Rights Reserved</p>
            </div>

        </footer>
    )
}