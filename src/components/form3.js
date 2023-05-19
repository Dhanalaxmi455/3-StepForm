import React, { useRef, useState, useEffect } from 'react';
import "../styles/form3.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form3Data } from '../redux/slice/formSlice';

const Form3 = () => {

    const formRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        password: ""
    });
    const handleChange = (e) => {
        setData({ ...data, password: e.target.value })
    }



    const handleClickNext = (e) => {
        e.preventDefault();


        if (formRef.current.password.value == "") {
            formRef.current.password.style.boxShadow = "0px 0px 5px palevioletred";
        }
        else {
            dispatch(Form3Data(data))
        }
    }
    const handleClickPrev = (e) => {
        e.preventDefault();
        navigate("/form2")
    }


    return (


        <form ref={formRef} className='form-container'>

            <div>

            </div>

            <input className='inp' type='password' name='password' placeholder='ENTER YOUR PASSWORD' />

            <div className='btn-container'>
                <button onClick={handleClickPrev} className='btn'>PREVIOUS</button>
                <button onClick={handleClickNext} className='btn'>NEXT</button>
            </div>

        </form>
    )
}

export default Form3;