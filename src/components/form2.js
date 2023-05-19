import React, { useRef, useState, useEffect } from 'react';
import "../styles/form2.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form2Data } from '../redux/slice/formSlice';

const Form2 = () => {

    const formRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: ""
    });
    const handleChange = (e) => {
        setData({ ...data, email: e.target.value })
    }

    const form2Data = useSelector((e) => e.Form1data.form2)

    const handleClickNext = (e) => {
        e.preventDefault();


        if (formRef.current.email.value == "") {
            formRef.current.email.style.boxShadow = "0px 0px 5px palevioletred";
        }
        else {
            dispatch(Form2Data(data))
            navigate("/form3");
        }
    }
    const handleClickPrev = (e) => {
        e.preventDefault();
        navigate("/");
    }




    return (


        <form ref={formRef} className='form-container'>

            <div>

            </div>

            <input className='inp' value={form2Data.email} onChange={handleChange} type='text' name='email' placeholder='ENTER YOUR EMAIL ADDRESS' />

            <div className='btn-container'>
                <button onClick={handleClickPrev} className='btn'>PREVIOUS</button>
                <button onClick={handleClickNext} className='btn'>NEXT</button>
            </div>

        </form>
    )
}

export default Form2;