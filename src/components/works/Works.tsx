import {FC} from "react";
import container from "../../common/styles/Container.module.scss";
import styles from "./Works.module.scss"
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
                              subTitle={'I develop services for customers of all sizes, specializing in creating stylish, modern websites and web services.'}/>
                <div className={styles.works}>
                    {
                        WorksData.map((work, id) => <Work key={id} title={work.title}
                                                          description={work.subtitle}
                                                          icon={work.icon}
                                                          link={work.link}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}