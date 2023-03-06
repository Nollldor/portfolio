import {FC} from "react";
import container from "../../common/styles/Container.module.css";
import styles from "./Works.module.css"
import {Work} from "./work/Work";
import {SectionTitle} from "../SectionTitle/SectionTitle";


type SkillsType = {}

export const Works: FC<SkillsType> = () => {

    return (
        <section className={styles.worksBlock}>
            <div className={`${container.container} ${styles.worksContainer}`}>
                <SectionTitle title={"My works"}
                              subTitle={'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface.'}/>
                <div className={styles.works}>
                    <Work title={"TodoList"}
                          description={"blablabl blablablablabl ablablablabla ablablablabla ablablablabla ablablablabla ablablablabla"}
                          icon={"icon"}/>
                    <Work title={"Social Network"} description={"blabla"} icon={"icon"}/>
                    <Work title={"Social Network"} description={"blabla"} icon={"icon"}/>
                    <Work title={"Social Network"} description={"blabla"} icon={"icon"}/>
                    <Work title={"Social Network"} description={"blabla"} icon={"icon"}/>
                </div>
            </div>
        </section>
    )
}