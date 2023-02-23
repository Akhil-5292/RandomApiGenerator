
export default function Btn({text,style,onClick}){
    return(
        <button 
        onClick={onClick}
        className={style}>
        {text}
        </button>
    )
}