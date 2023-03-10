import {FC} from "react";
import styles from "./Menu.module.css"


type MenuType = {
    collapsed: boolean
}

export const Menu: FC<MenuType> = ({collapsed}) => {

    return (
        <ul className={`${styles.menu} ${collapsed? styles.collapsed : ''}`}>
            <li>
                <a className={styles.menu__link} href="#home">home</a>
            </li>
            <li>
                <a className={styles.menu__link} href="#skills">skills</a>
            </li>
            <li>
                <a className={styles.menu__link} href="#works">works</a>
            </li>
            <li>
                <a className={styles.menu__link} href="#contacts">contacts</a>
            </li>
        </ul>
    )
}