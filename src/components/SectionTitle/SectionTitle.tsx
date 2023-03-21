import {FC} from "react";
import styles from "./SectionTitle.module.scss"

type SectionTitlePropsType = {
    title: string
    subTitle: string
}

export const SectionTitle: FC<SectionTitlePropsType> = ({title, subTitle}) => {
    return <div className={styles.SectionTitleWrapper}>
        <div className={styles.SectionTitle}>
            <h2>
                {title}
            </h2>
            <p>
                {subTitle}
            </p>
        </div>
    </div>
}