import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault();
        dispatch({type:"ADD_CONTACT", payload:{name, number}})
    }

  return (
    <form id='contact-form' onSubmit={addContact}>
        <ul>
            <li>
                <label for="name">이름을 입력해주세요.</label>
                <input id='name' type='text' onChange={(event) => {
                    setName(event.target.value)
                }}/>
            </li>
            <li>
                <label for="number">'-'를 제외한 전화번호를 입력해주세요.</label>
                <input id='number' type='text' onChange={(event) => {
                    setNumber(event.target.value)
                }}/>
            </li>
            <li>
                <label for="email">이메일을 입력해주세요.</label>
                <input id='email' type='text' onChange={(event) => {
                    setEmail(event.target.value)
                }}/>
            </li>
        </ul>
        <button className='save-btn' type='submit'>저장하기</button>
        <button className='cancel-btn'>취소하기</button>
    </form>
  )
}

export default ContactForm