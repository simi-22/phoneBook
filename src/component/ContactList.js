import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const { contactList, keyword } = useSelector((state) => state);
    let [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        if (keyword !== "") {
          let list = contactList.filter((item) => item.name.includes(keyword));
    
          setFilteredList(list);
        } else {
          setFilteredList(contactList);
        }
      }, [keyword, contactList]);
  return (
    <div id='contact-list'>
        <SearchBox />
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
    </div>
  )
}

export default ContactList