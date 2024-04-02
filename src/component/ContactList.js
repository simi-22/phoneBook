import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useDispatch, useSelector } from 'react-redux'

const ContactList = () => {
    const { contactList, keyword } = useSelector((state) => state);
    let [filteredList, setFilteredList] = useState([]);
    const dispatch =useDispatch();

    useEffect(() => {
        if (keyword !== "") {
          let list = contactList.filter((item) => item.name.includes(keyword));
    
          setFilteredList(list);
        } else {
          setFilteredList(contactList);
        }
      }, [keyword, contactList]);


      const onDelete = (targetId) => {
        dispatch({
            type: "DELETE_CONTACT",
            payload: {
                id: targetId
            }
        });
    };


  return (
    <div id='contact-list'>
        <SearchBox />
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index.id} onDelete={onDelete}/>
        ))}
    </div>
  )
}

export default ContactList