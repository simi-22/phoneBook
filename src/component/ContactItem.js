import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const ContactItem = ({item, onDelete}) => {
    const handleDelete = () => {
        onDelete(item.id); 
      };

  return (
    <div id='contact-item'>
        <div>
            <img src='https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w800' alt=''></img>
        </div>
        <div>
            <p>{item.name}</p>
            <p>{item.number}</p>
            <p>{item.email}</p>
        </div>
        <button type='button' id="trash-item-btn" onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/></button>
    </div>
  )
}

export default ContactItem