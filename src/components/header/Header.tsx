import {FC} from "react";
import styles from "./Header.module.css"
import container from "../../common/styles/Container.module.css"
import {Nav} from "../nav/Nav";


type HeaderType = {}

export const Header: FC<HeaderType> = () => {

    return (
        <div className={styles.header}>
            <div className={`${container.container} ${styles.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    )
}