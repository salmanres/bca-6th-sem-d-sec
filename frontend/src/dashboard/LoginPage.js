import React, { Fragment, useState } from 'react'
import axios from 'axios'

function LoginPage() {

    const [data, setData] = useState({});

    const getData = (item) => {
        setData({
            ...data, //spread operator
            [item.target.name]: item.target.value
        });
        console.log(data);
    }

    const login = async () => {
        const response = await axios.post('http://localhost:3500/login', data);
        console.log(response);
        alert(response.data.message);
        
    }

    return (
        <Fragment>
            <h2 className='heading'>LOGIN HERE</h2>
            <div className='main'>
                <div className='form-container'>
                    <input type='email' placeholder='email' name='email' onInput={getData} />
                    <input type='password' placeholder='password' name='password' onChange={getData} />
                    <button onClick={login}>LOGIN</button>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginPage