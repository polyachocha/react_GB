import style from './Message.module.css'

export const Message = ({ text }) => {
    return <>
        <p className={style.p}>{text}</p>
    </>
} 
