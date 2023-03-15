import {FC, useEffect, useState} from "react";
import container from "../../common/styles/Container.module.css"
import styles from "./Header.module.css"

import {Menu} from "./menu/Menu";


type HeaderType = {}

export const Header: FC<HeaderType> = () => {
    const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true)
    const [scroll, setScroll] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    const collapseMenu = () => {
        setMenuCollapsed(!menuCollapsed)
    }


    return (
        <header>
            <nav className={`${styles.nav} ${scroll ? styles.fixedNav : ''}`}>
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
        </header>
    )
}