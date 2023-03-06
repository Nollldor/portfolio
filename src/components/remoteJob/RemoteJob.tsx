import {FC} from "react";
import styles from "./RemoteJob.module.css"
import container from "../../common/styles/Container.module.css"
import {SectionTitle} from "../SectionTitle/SectionTitle";


type MainType = {}

export const RemoteJob: FC<MainType> = () => {

    return (
        <section className={styles.RemoteJobBlock}>
            <div className={`${container.container} ${styles.RemoteJobContainer}`}>
                <SectionTitle title={"Searching Remote Job"}
                              subTitle={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface."}/>
                <button>Hire me</button>
            </div>

        </section>
    )
}