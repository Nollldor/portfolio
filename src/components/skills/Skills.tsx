import {FC} from "react";
import styles from "./Skills.module.css"
import container from "../../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";

type SkillsPropsType = {}

export const Skills: FC<SkillsPropsType> = () => {

    return (
        <section className={styles.skillsBlock}>
            <div className={`${container.container} ${styles.skillsContainer}`}>
                <SectionTitle title={"Skills"}
                              subTitle={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface."}/>
                <div className={styles.skills}>
                    <Skill title={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                           icon={faJs}/>
                    <Skill title={"REACT"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                           icon={faReact}/>
                    <Skill title={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                           icon={faCss3}/>
                </div>
            </div>
        </section>
    )
}