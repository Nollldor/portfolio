import {FC} from "react";
import container from "../../common/styles/Container.module.css";
import styles from "./Works.module.css"
import {Work} from "./work/Work";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import work1Image from "../../common/img/work-img1.jpg"


type SkillsPropsType = {}

export const Works: FC<SkillsPropsType> = () => {

    return (
        <section className={styles.worksBlock}>
            <div className={`${container.container} ${styles.worksContainer}`}>
                <SectionTitle title={"My works"}
                              subTitle={'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface.'}/>
                <div className={styles.works}>
                    <Work title={"TodoList"}
                          description={"blablabl blablablablabl ablablablabla ablablablabla ablablablabla ablablablabla ablablablabla"}
                          icon={work1Image}/>
                    <Work title={"Social Network"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                          icon={work1Image}/>
                    <Work title={"Social Network"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                          icon={work1Image}/>
                    <Work title={"Social Network"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                          icon={work1Image}/>
                    <Work title={"Social Network"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                          icon={work1Image}/>
                </div>
            </div>
        </section>
    )
}