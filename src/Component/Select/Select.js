import React, { useState } from 'react'
import {faker} from '@faker-js/faker'
import { TextField } from '@mui/material'
import style from './Select.module.css'
import Btn from '../Atom/Btn'
export default function Select(){
  const [categories]=useState(Object.keys(faker))
  const [subCategories,setSubCategories]=useState([])
  const [selectedCategory,setSelectedCategory]=useState('')
  const [selectedSubCategory,setSelectedSubCategory]=useState('')
  const [count,setCount]=useState(0)
  const [key,setKey]=useState('') 
  const [data,setData]=useState([])
  
  
  const onCategoryChange=({target:{name, value}})=>{
      console.log(value)
      setSelectedCategory(value)
      setSubCategories(Object.keys(faker[value]))
  }

  const onSubCategoryChange=({target:{name, value}})=>{
    console.log(value)
   setSelectedSubCategory(value)
  }

  const onGenerate=()=>{
    const API=[]
    for (let index = 0; index < count; index++) {
      const obj={
        [key] : faker[selectedCategory][selectedSubCategory]() 
      }
      API.push(obj)
    }
  console.log(API)
  setData(API)
  }

  const onCountChange=({target: {name, value}})=>{
    setCount(value)
  }

  const onKeyChange=(e)=>{
    setKey(e.target.value)
  }
  return(
    <div >
    <TextField onChange={onKeyChange} type='text' placeholder='key' name='' />
    <select className={style.select}  name='categories' onChange={onCategoryChange} >
     {
       categories.map((x)=>(
         <option value={x}>{x}</option>
       ))
     }
    </select>
    <select className={style.select} name='subCategories' onChange={onSubCategoryChange} >
      {subCategories.map((x)=>
      (
        <option value={x}>{x}</option>
      ))
      }
      </select>
      <TextField className={style.count} onChange={onCountChange} value={count} type='number' placeholder='count' name='count'/>
      
      <div>
      <Btn onClick={onGenerate}
      text='Generate'
      style={style.btn}/>
      </div>
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