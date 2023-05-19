import React, { useEffect, useRef, useState } from 'react';
import "../styles/form1.css";
import { useDispatch, useSelector } from 'react-redux';
import { Form1Data } from '../redux/slice/formSlice';
import { useNavigate } from 'react-router-dom';


const Form1 = () => {

    const formRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        userName: ""
    });
    
    const form1Data = useSelector((e) => e.Form1data.form1)

    const handleChange = (e) => {
        setData({ ...data, userName: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (formRef.current.userName.value == "") {
            formRef.current.userName.style.boxShadow = "0px 0px 5px palevioletred";
        }
        else {
            dispatch(Form1Data(data))
            navigate("/form2");
        }
    }

    return (


        <form ref={formRef} className='form-container'>

            <div>

            </div>

            <p>Let's get Started : </p>

            <input className='inp' value={form1Data.userName} onChange={handleChange} required type='text' name='userName' placeholder='ENTER YOUR USERNAME' />

            <button onClick={handleClick} className='btn'>NEXT</button>

        </form>
    )
}

export default Form1;