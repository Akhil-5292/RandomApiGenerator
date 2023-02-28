import { TextField } from "@mui/material";
import { useState } from "react";
import Btn from "../Component/Atom/Btn";
import style from './DynamicInput.module.css'
import { faker } from '@faker-js/faker'

export default function DynamicInput() {
  const [inputs, setInputs] = useState([{
    key  :'',
    categroy  : '',
    selectedCategory : '',
    subCategories : [], 
    subCategory :''
  }])
  const [categories] = useState(Object.keys(faker))
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const onKeyChange = (event , index)=>{
    const value = event.target.value 
    const _inputs = [...inputs]

    _inputs[index].key= value
    setInputs(_inputs)
  }

  const onCategoryChange = ({ target: { name, value } } , index) => {
    const _inputs = [...inputs]
    _inputs[index].selectedCategory= value
    _inputs[index].subCategories= Object.keys(faker[value])
    setInputs(_inputs)
  }

  const onSubCategryChange = ({ target: { name, value } } ,index) => {
    const _inputs = [...inputs]
    _inputs[index].subCategory= value
    setInputs(_inputs)
  }
  const onGenerate = () => {
    const data = []
    console.log(inputs)
    for(let c = 0 ; c < count ; c++){
    const obj = {}
      for(let i = 0 ; i < inputs.length ; i++){
        const key = inputs[i].key
        const category = inputs[i].selectedCategory
        const subCategory = inputs[i].subCategory
        const keyValue = faker[category][subCategory]()
        obj[key] = keyValue
      }  
        data.push(obj)
    }
    setData(data)
  }

  const addField = ()=>{
      const _inputs = [...inputs]
      _inputs.push({
        key  :'',
        categroy  : '',
        selectedCategory : '',
        subCategories : [], 
        subCategory :''
      })
      setInputs(_inputs)
  }
  const onCountChange = ({ target: { name, value } }) => {
    setCount(value)
  }
  const deleteInput=(index)=>{
    const filtered=[...inputs]
    filtered.splice(index,1)
    setInputs(filtered)
  }
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {
          inputs.map((input, index) => (
            <div className={style.input} key={index}>
              <div>
                <TextField
                  type='text'
                  placeholder="Key"
                  name=""
                  className={style.key}
                  onChange={(e) => onKeyChange(e, index)}
                />
              </div>
              <div >
                <select className={style.select} onChange={(e)=>onCategoryChange(e , index)} name="category">
                  {
                    categories.map((x) => (
                      <option value={x}>{x}</option>
                    ))
                  }
                </select>

                <select className={style.select} name='subCategory' onChange={(e)=>onSubCategryChange(e , index)}>
                  {
                    inputs[index].subCategories.map((x) => (
                      <option value={x}>{x}</option>
                    ))
                  }
                </select>

              </div>

              <Btn text='X'
                onClick={deleteInput}
                style={style.delete}
              />
            </div>
          ))}
        <Btn text='Add More'
          onClick={addField}
          style={style.btn} />
      </div>
      <div className={style.count_div}>
        <h3>Count</h3>
        <TextField
          type='number'
          placeholder="Count"
          onChange={onCountChange}
          className={style.count}
        // value={count}
        />
      </div>
      <Btn text='Generate'
        onClick={onGenerate}
        style={style.btn} />

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