import {FC} from "react";
import styles from "./Work.module.css"


type SkillType = {
    title: string
    icon: string
    description: string
}

export const Work: FC<SkillType> = ({title, description, icon}) => {

    return (
        <div className={styles.workBlock}>
            <div className={styles.icon}>
                <img src={icon} alt={"work icon"}/>
                <button className={styles.workButton}>See more</button>
            </div>
            <h3 className={styles.workTitle}>{title}</h3>
            <span className={styles.workDescription}>{description}</span>
        </div>
    )
}