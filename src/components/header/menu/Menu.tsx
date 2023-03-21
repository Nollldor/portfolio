import {FC, useEffect, useState} from "react";
import styles from "./Menu.module.scss"
import {CollapsedType} from "../Header";


type MenuType = {
    collapsed: CollapsedType
}

export const Menu: FC<MenuType> = ({collapsed}) => {
    const [menuClassName, setMenuClassName] = useState(styles.menu)
    useEffect(() => {
        if (collapsed === 'collapsed') {
            setMenuClassName(`${styles.menu} ${styles.collapsed}`)
        } else if (collapsed === 'close') {
            setMenuClassName(`${styles.menu} ${styles.close}`)
        } else if (collapsed === 'uncollapsed') {
            setMenuClassName(styles.menu)
        }
    }, [collapsed])

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