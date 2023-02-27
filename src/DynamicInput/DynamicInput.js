import { TextField } from "@mui/material";
import { useState } from "react";
import Btn from "../Component/Atom/Btn";
import style from './DynamicInput.module.css'
import {faker} from '@faker-js/faker'


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

    const onKeyChange=(e,index)=>{
      // const updatedKey=input.map((input,i)=>index===1 ? Object.assign(input,{[e.target.fieldname] : e.target.value}) : input)
        setKey(e.target.value)
        // setInput(updatedKey)
    }

    const onCategoryChange=({target: {name,value}})=>{
      console.log(value)
      setSelectedCategory(value)
      setSubCategories(Object.keys(faker[value]))
    }

    const onSubCategryChange=({target: {name,value}})=>{
      console.log(value)
        setSelectedSubCategory(value)
    }

    const onGenerate=()=>{
      const list=[] 
      console.log(selectedCategory)
      console.log(selectedSubCategory)
      for (let index = 0; index < count; index++) {
       var obj={
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
                        // value={key}
                        className={style.key}
                        onChange={(e)=>onKeyChange(e,index)}
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
                      
                    </div>
                    <div>
                        <TextField
                        type='number'
                        placeholder="Count"
                        onChange={onCountChange}
                        className={style.count}
                        // value={count}
                        />
                    </div>
                    <Btn text='X'
                    onClick={deleteInput}
                    style={style.delete}
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

        <div className={style.data}>     
        <pre>
          {
            JSON.stringify(data, null, 3)
          }
        </pre>
      </div>
        
     </div>
    )
}