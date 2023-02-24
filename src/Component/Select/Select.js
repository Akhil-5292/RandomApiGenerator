import { useState } from "react";
import {faker} from '@faker-js/faker'

export default function Select(){
    const [categories]=useState(Object.keys(faker))
    const [subCategories,setSubCategories]=useState([])
    const[selectedCategory,setSelectedCategory]=useState('')
    const [selectedSubCategory,setSelectedSubCategory]=useState('')
    const [count,setCount]=useState(0)
    const onCategoryChange=({target: {name,value}})=>{
        console.log(value)
        setSelectedCategory(value)
        setSubCategories(Object.keys(faker[value]))
      }
  
      const onSubCategryChange=(value)=>{
          setSelectedSubCategory(value)
      }

      const onGenerate=()=>{
        console.log(faker[selectedCategory][selectedSubCategory]())
      }

      const onCountChange=({target: {name,value}})=>{
        setCount(value)
      }
    return(
        <>
        {selectedCategory}
            <input type='text' placeholder="key" name="" />  
            <select name="category" onChange={onCategoryChange}>
                {categories.map((x)=>(
                    <option value={x}>
                        {x}
                    </option>
                ))}
            </select>
            <select name="subCategory" onChange={onSubCategryChange}>
                {subCategories.map((x)=>(
                    <option value={x}>
                        {x}
                    </option>
                ))}
            </select>
            <input type='number'placeholder="count" value={count} onChange={onCountChange} />

            <button onClick={onGenerate}>generate</button>
        </>
    )
}