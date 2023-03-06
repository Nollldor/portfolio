import {FC} from "react";
import styles from "./RemoteJob.module.css"
import container from "../../common/styles/Container.module.css"


type MainType = {}

export const RemoteJob: FC<MainType> = () => {

    return (
        <section className={styles.RemoteJobBlock}>
            <div className={`${container.container} ${styles.RemoteJobContainer}`}>
                <h2 className={styles.title}>Searching Remote Job</h2>
                <button>Hire me</button>
            </div>

        </section>
    )
}