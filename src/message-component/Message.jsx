import MessageCss from './Message.module.css'

export const Message = ({ text }) => {

    return <>
        <p className={MessageCss.p}>{text}</p>

    </>
} 
