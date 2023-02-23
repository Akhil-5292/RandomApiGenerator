import { TextField } from "@mui/material";
import { useState } from "react";
import Btn from "../Component/Atom/Btn";
import style from './DynamicInput.module.css'


export default function DynamicInput(){
    const inputField={fieldname:'',type:''}
    const [input,setInput]=useState([inputField])
    const addField=()=>{
        setInput([...input,inputField])
    }

    const deleteInput=(index)=>{
      const filtered=[...input]
      filtered.splice(index,1)
      setInput(filtered)
    }
    return(
     <div className={style.wrapper}>
        <div className={style.container}>
            {
                input.map((input,index)=>(
                <div className={style.input} key={index}>
                    <div>
                        <TextField
                        placeholder=""
                        />
                    </div>
                    <div>
                        <TextField
                        placeholder=""
                        />
                    </div>
                    <Btn text='X'
                    onClick={deleteInput}/>
                </div>
                ))}
                <Btn text='Add More'
                onClick={addField}/>
        </div>
     </div>
    )
}