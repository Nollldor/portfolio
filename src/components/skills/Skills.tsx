import {FC} from "react";
import styles from "./Skills.module.scss"
import container from "../../common/styles/Container.module.scss";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {SkillsState} from "./skill/skills-state";

type SkillsPropsType = {}

export const Skills: FC<SkillsPropsType> = () => {
    const SkillsData = SkillsState
    return (
        <section id={"skills"} className={styles.skillsBlock}>
            <div className={`${container.container} ${styles.skillsContainer}`}>
                <SectionTitle title={"Skills"}
                              subTitle={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface."}/>
                <div className={styles.skills}>
                    {
                        SkillsData.map((skill, id) => <Skill key={id} title={skill.title}
                                                             description={skill.description} icon={skill.icon}/>)
                    }
                </div>
            </div>
        </section>
    )
}