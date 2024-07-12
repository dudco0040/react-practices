import React from 'react';

function RegisterForm(props) {
    return (
        <form className='Register_Form'>
            <input type='text' name='firstName' placeholder='성' className='InputFirstName' />
            <input type='text' name='lastName' placeholder='이름' className='InputLastName' />
            <input type='text' name='email' placeholder='이메일' className='InputEmail' />
            <input type='submit' value='등록' />
        </form>
    );
}

export default RegisterForm;