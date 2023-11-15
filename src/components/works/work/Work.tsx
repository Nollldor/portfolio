import {FC} from "react";
import styles from "./Work.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


type WorkPropsType = {
    title: string
    icon: string
    description: string
    link: string
}

export const Work: FC<WorkPropsType> = ({title, description, icon,link}) => {

    return (
        <div className={styles.workBlockWrapper}>
            <div className={styles.workBlock}>
                <a href={"#"} className={styles.icon}>
                    <img src={icon} alt={"work icon"} title={"work icon"}/>
                </a>
                <div className={styles.content}>
                    <h4 className={styles.workTitle}>{title}</h4>
                    <p className={styles.workDescription}>{description}</p>
                    <div className={styles.readMore}>
                        <a href={link} className={styles.readMoreLink}>
                            Read more
                            <FontAwesomeIcon icon={faArrowRight} className={styles.readMoreIcon}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}