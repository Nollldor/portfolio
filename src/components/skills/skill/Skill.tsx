import {FC} from "react";
import styles from "./Skill.module.scss"
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type SkillPropsType = {
    title: string
    icon: IconDefinition
    description: string
}

export const Skill: FC<SkillPropsType> = ({title, description, icon}) => {

    return (
        <div className={styles.skillBlockWrapper}>
            <div className={styles.skillBlock}>
                <a href={"#"} className={styles.icon}>
                    <FontAwesomeIcon icon={icon}/>
                </a>
                <div className={styles.content}>
                    <h5 className={styles.skillTitle}>{title}</h5>
                    <p className={styles.skillDescription}>{description}</p>
                </div>
            </div>
        </div>
    )
}