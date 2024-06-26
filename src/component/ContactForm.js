import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('010');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const contactId = useRef(0);

    const addContact = (event) => {
        event.preventDefault();
        dispatch({
            type:"ADD_CONTACT", 
            payload:{
            name, number, email, id:contactId.current,
            }
    });
        contactId.current++;
        cancelItem();
        
    }


    const cancelItem = () => {
        setName('');
        setNumber('010');
        setEmail('');
    }

  return (
    <form id='contact-form' onSubmit={addContact}>
        <ul>
            <li>
                <label for="name">이름을 입력해주세요.</label>
                <input id='name' type='text' value={name} onChange={(event) => {
                    setName(event.target.value)
                }}/>
            </li>
            <li>
                <label for="number">'-'를 제외한 전화번호를 입력해주세요.</label>
                <input id='number' type='text' value={number} onChange={(event) => {
                    setNumber(event.target.value)
                }}/>
            </li>
            <li>
                <label for="email">이메일을 입력해주세요.</label>
                <input id='email' type='text' value={email} onChange={(event) => {
                    setEmail(event.target.value)
                }}/>
            </li>
        </ul>
        <button className='save-btn' type='submit'>저장하기</button>
        <button className='cancel-btn' type='button' onClick={cancelItem}>취소하기</button>
    </form>
  )
}

export default ContactForm