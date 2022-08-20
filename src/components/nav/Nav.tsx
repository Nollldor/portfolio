import {FC} from "react";
import styles from "./Nav.module.css"


type NavType = {}

export const Nav: FC<NavType> = () => {

    return (
        <div className={styles.nav}>
            <a className={styles.nav__link} href="">Главная</a>
            <a className={styles.nav__link} href="">Скиллы</a>
            <a className={styles.nav__link} href="">Работы</a>
            <a className={styles.nav__link} href="">Контакты</a>
        </div>
    )
}