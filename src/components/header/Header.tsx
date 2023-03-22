import {FC, useEffect, useState} from "react";
import container from "../../common/styles/Container.module.scss"
import styles from "./Header.module.scss"

import {Menu} from "./menu/Menu";


type HeaderType = {}
export type CollapsedType = 'close' | 'collapsed' | 'uncollapsed'


export const Header: FC<HeaderType> = () => {
    const [menuCollapsed, setMenuCollapsed] = useState<CollapsedType>('collapsed')
    const [scroll, setScroll] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    const collapseMenu = () => {
        if (menuCollapsed === 'collapsed') {
            setMenuCollapsed('uncollapsed')
        } else {
            setMenuCollapsed('close')
            setTimeout(()=>{
                setMenuCollapsed('collapsed')
            }, 500)
        }
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

/*
const [menuClassName, setMenuClassName] = useState(styles.menu)
useEffect(() => {
    if (collapsed === 'collapsed') {
        setMenuClassName(`${styles.menu} ${styles.collapsed}`)
    } else if (collapsed === 'close') {
        setMenuClassName(`${styles.menu} ${styles.close}`)
    } else if (collapsed === 'uncollapsed') {
        setMenuClassName(styles.menu)
    }
}, [collapsed])*/
