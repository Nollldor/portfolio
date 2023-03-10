import {FC, useState} from "react";
import container from "../../common/styles/Container.module.css"
import styles from "./Header.module.css"

import {Menu} from "./menu/Menu";


type HeaderType = {}

export const Header: FC<HeaderType> = () => {
    const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true)
    const collapseMenu = () => {
        setMenuCollapsed(!menuCollapsed)
    }

    return (
        <nav className={styles.header}>
            <div className={`${container.container} ${styles.headerContainer}`}>
                <a href="#" className={styles.headerBrand}>
                    Ishmiev
                    <span className={styles.theme}></span>
                </a>
                <button className={styles.headerToggler} onClick={collapseMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Menu collapsed={menuCollapsed}/>
            </div>
        </nav>
    )
}