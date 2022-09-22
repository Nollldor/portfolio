import {FC} from "react";
import styles from "./Skills.module.css"
import container from "../../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";


type SkillsType = {

}

export const Skills: FC<SkillsType> = () => {

    return (
        <div className={styles.skillsBlock}>
            <div className={`${container.container} ${styles.skillsContainer}`}>
                <h2 className={styles.skillsBlockTitle}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"JS"} description={"blablabl blablablablabl ablablablabla"} icon={"icon"}/>
                    <Skill title={"REACT"} description={"blabla"} icon={"icon"}/>
                    <Skill title={"CSS"} description={"blabla"} icon={"icon"}/>
                </div>
            </div>
        </div>
    )
}