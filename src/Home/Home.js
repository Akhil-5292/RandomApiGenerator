// import Input from "../Component/Atom/Input";
import Navbar from "../Component/Navbar/Navbar";
import Select from "../Component/Select/Select";
import DynamicInput from "../DynamicInput/DynamicInput";
import style from './Home.module.css'

export default function Home(){
    return(
        <div className={style.wrapper}>
           <Navbar/>
           <div className={style.input}>
            <div className={style.heading}> <h3>Field Name</h3>
            <h3>Type</h3></div>
            {/* <Input/> */}
            {/* <DynamicInput/> */}
            <Select/>
            </div> 
        </div>
    )
}