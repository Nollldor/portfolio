import {FC} from "react";
import styles from "./Menu.module.css"


type MenuType = {
    collapsed: boolean
}

export const Menu: FC<MenuType> = ({collapsed}) => {

    const menuClassName = `${styles.menu} ${collapsed? styles.collapsed : ''}`

    return (
        <ul className={menuClassName}>
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