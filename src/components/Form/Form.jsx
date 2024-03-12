import style from "./Form.module.css";
import { useState } from "react";
import {validation} from "../Functions/validation.js"

const Form = (props) =>{

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target;        

        setUserData({...userData, [name]:value});

        setErrors(validation({...userData, [name]:value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        props.login(userData);
    }

    return(
        <div className={style.fDiv}>
            <img className={style.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
            <form className={style.form} onSubmit={handleSubmit}>
                <label className={style.label}>
                    E-mail: 
                    <input className={style.input} type="text" name="email" value={userData.email} onChange={handleChange} />
                    <p className={style.p}>{errors.email}</p>
                </label>

                <label className={style.label}>
                    Password: 
                    <input className={style.input} type="password" name="password" value={userData.password} onChange={handleChange} />
                    <p className={style.p}>{errors.password}</p>
                </label>

                <button className={style.btn}>Submit</button>
            </form>
        </div>
    )
}


export default Form;