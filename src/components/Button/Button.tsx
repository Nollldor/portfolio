import {FC} from "react";
import styles from './Button.module.scss'


type ButtonPropsType = {
    title: string
    callback?: () => void
    type?: "button" | "submit" | "reset" | undefined
}

export const Button: FC<ButtonPropsType> = ({title, callback,type}) => {
    const onClickHandler = () => {
        callback && callback()
    }
    return <button className={styles.themeButton} onClick={onClickHandler} type={type? type : 'button'}>{title}</button>
}