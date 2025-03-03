import React, { Fragment, useState } from 'react'

function RegisterPage() {

   

    return (
        <Fragment>
            <h2 className='heading'>REGISTER HERE</h2>
            <div className='main'>
                <div className='form-container'>
                    <input type='text' placeholder='username' />
                    <input type='email' placeholder='email' />
                    <input type='number' placeholder='mobile' />
                    <input type='password' placeholder='password' />
                    <input type='text' placeholder='address' />
                    <button>REGISTER</button>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterPage