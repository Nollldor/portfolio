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
                              subTitle={"My services include: Building dynamic and responsive user interfaces, working with modern frameworks and libraries such as React, integrating with various APIs and third-party services."}/>
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