import {FC} from "react";
import styles from "./Skills.module.css"
import container from "../../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../SectionTitle/SectionTitle";


type SkillsType = {

}

export const Skills: FC<SkillsType> = () => {

    return (
        <section className={styles.skillsBlock}>
            <div className={`${container.container} ${styles.skillsContainer}`}>
                <SectionTitle title={"Skills"}
                              subTitle={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface."}/>
                <div className={styles.skills}>
                    <Skill title={"JS"} description={"blablabl blablablablabl ablablablabla"} icon={"icon"}/>
                    <Skill title={"REACT"} description={"blabla"} icon={"icon"}/>
                    <Skill title={"CSS"} description={"blabla"} icon={"icon"}/>
                </div>
            </div>
        </section>
    )
}