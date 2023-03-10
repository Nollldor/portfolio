import {FC} from "react";
import container from "../../common/styles/Container.module.css";
import styles from "./Works.module.css"
import {Work} from "./work/Work";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {WorksState} from "./works-state";


type SkillsPropsType = {}

export const Works: FC<SkillsPropsType> = () => {
    const WorksData = WorksState
    return (
        <section id={"works"} className={styles.worksBlock}>
            <div className={`${container.container} ${styles.worksContainer}`}>
                <SectionTitle title={"My works"}
                              subTitle={'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface.'}/>
                <div className={styles.works}>
                    {
                        WorksData.map((work, id)=> <Work title={work.title}
                              description={work.subtitle}
                              icon={work.icon}/>)
                    }
                </div>
            </div>
        </section>
    )
}