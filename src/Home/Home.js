// import Input from "../Component/Atom/Input";
import Navbar from "../Component/Navbar/Navbar";
import DynamicInput from "../DynamicInput/DynamicInput";
import style from './Home.module.css'

export default function Home(){
    return(
        <div>
           <Navbar/>
           <div className={style.input}>
            <div className={style.heading}> <h3>Field Name</h3>
            <h3>Type</h3></div>
            {/* <Input/> */}
            <DynamicInput/>
            </div> 
        </div>
    )
}