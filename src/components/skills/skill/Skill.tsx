import {FC} from "react";
import styles from "./Skill.module.css"


type SkillType = {
    title: string
    icon: string
    description: string
}

export const Skill: FC<SkillType> = ({title, description, icon}) => {

    return (
        <div className={styles.skillBlock}>
            <div className={styles.icon}>
                <img src={icon} alt={"skill icon"}/>
            </div>
            <h3 className={styles.skillTitle}>{title}</h3>
            <span className={styles.skillDescription}>{description}</span>
        </div>
    )
}