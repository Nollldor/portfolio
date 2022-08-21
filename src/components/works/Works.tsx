import {FC} from "react";
import container from "../../common/styles/Container.module.css";
import styles from "./Works.module.css"
import {Work} from "./work/Work";


type SkillsType = {

}

export const Works: FC<SkillsType> = () => {

    return (
        <div className={styles.worksBlock}>
            <div className={`${container.container} ${styles.worksContainer}`}>
                <h2>My works</h2>
                <div className={styles.works}>
                    <Work title={"TodoList"} description={"blablabl blablablablabl ablablablabla"} icon={"icon"}/>
                    <Work title={"Social Network"} description={"blabla"} icon={"icon"}/>
                </div>
            </div>
        </div>
    )
}