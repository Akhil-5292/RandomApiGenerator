import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import style from './Navbar.module.css'
import { useState } from 'react';
import Dropdown from '../DropdownMenu/Dropdown';
import Btn from '../Atom/Btn';

export default function Navbar (){
   

    return(
        <div className={style.wrapper}>
       
        <div className={style.option}>
        <h3>mockaroo</h3>
            <ul>
                <li>
                    SCHEMAS
                </li>
                <li>
                    DATASETS
                </li>
                <li>
                    MOCK API
                </li>
                <li>
                    SCENARIOS
                </li>
                <li>
                    PROJECTS
                </li>
            </ul>
        </div>

        <div className={style.right}>
            <ul>
                <li><SettingsIcon/></li>
                <li>
                    <Dropdown/>
                </li>
                <li>
                    SIGNIN
                </li>
            </ul>
             
             <Btn text='UPGRADE NOW'
             style={style.btn}/>
        </div>
        </div>
    )
}