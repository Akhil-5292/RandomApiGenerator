import { TextField } from "@mui/material";
import { useState } from "react";
import Btn from "../Component/Atom/Btn";
import style from './DynamicInput.module.css'
import {faker} from '@faker-js/faker'
import Select from "../Component/Select/Select";

export default function DynamicInput(){
    const inputField={fieldname:'',type:''}
    const [input,setInput]=useState([inputField])
    const [categories]=useState(Object.keys(faker))
    const [key,setKey]=useState('')
    const [subCategories,setSubCategories]=useState([])
    const [selectedCategory,setSelectedCategory]=useState('')
    const [selectedSubCategory,setSelectedSubCategory]=useState('')
    const [count,setCount]=useState(0)
    const [data,setData]=useState([])
    const addField=()=>{
        setInput([...input,inputField])
    }

    const deleteInput=(index)=>{
      const filtered=[...input]
      filtered.splice(index,1)
      setInput(filtered)
    }

    const onKeyChange=(e)=>{
        setKey(e.target.value)
    }

    const onCategoryChange=({target: {name,value}})=>{
      console.log(value)
      setSelectedCategory(value)
      setSubCategories(Object.keys(faker[value]))
    }

    const onSubCategryChange=(value)=>{
      console.log(value)
        setSelectedSubCategory(value)
    }

    const onGenerate=()=>{
      const list=[] 
      for (let index = 0; index < count; index++) {
       const obj={
        [key] : faker[selectedCategory][selectedSubCategory](),
       };
        list.push(obj);
      }
      console.log(list)
      setData(list)
    } 

    const onCountChange=({target: {name,value}})=>{
        setCount(value)
    }

    
    return(
     <div className={style.wrapper}>
        <div className={style.container}>
            {
                input.map((input,index)=>(
                <div className={style.input} key={index}>
                    <div>
                        <TextField
                        type='text'
                        placeholder="Key"
                        name=""
                        value={key}
                        onChange={onKeyChange}
                        />
                    </div>
                    <div >
                       <select className={style.select} onChange={onCategoryChange} name="category">
                        {
                            categories.map((x)=>(
                            <option value={x}>{x}</option>
                            ))
                        }
                       </select>

                      <select className={style.select} name='subCategory' onChange={onSubCategryChange}>
                      {
                            subCategories.map((x)=>(
                            <option value={x}>{x}</option>
                            ))
                        }
                      </select>
                      {/* <Select/> */}
                    </div>
                    <div>
                        <TextField
                        type='number'
                        placeholder="Count"
                        onChange={onCountChange}
                        value={count}
                        />
                    </div>
                    <Btn text='X'
                    onClick={deleteInput}
                    />
                </div>
                ))}
                <Btn text='Add More'
                onClick={addField}
                style={style.btn}/>
        </div>
        <Btn text='Generate'
        onClick={onGenerate}
        style={style.btn}/>

        
          <pre> {
                JSON.stringify(data, null, 3)
            }
            </pre>
        
     </div>
    )
}