import { Select,MenuItem } from '@mui/material';
import { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import style from './Dropdown.module.css'
export default function Dropdown (){
    const [list,setList]=useState(<HelpIcon/>)
    return(
        <Select className={style.dropdown} value={list} displayEmpty>
                        {/* <MenuItem value=''><HelpIcon/></MenuItem> */}
                        <MenuItem value={1}>Comunity Forum</MenuItem>
                        <MenuItem value={2}>Api Reference</MenuItem>
                        <MenuItem value={3}>Tutorials</MenuItem>
                        <MenuItem value={4}>FAQ</MenuItem>
                        <MenuItem value={5}>About</MenuItem>
                        <MenuItem value={6}>Pricing</MenuItem>
                        <MenuItem value={7}>Request a Quote</MenuItem>
                        <MenuItem value={8}>Contact Support</MenuItem>
                    </Select>
    )
}