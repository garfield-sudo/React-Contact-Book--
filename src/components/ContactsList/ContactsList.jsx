import React from "react";
import ContactsListItem from "../ContactsListItem/ContactsListItem";

const ContactsList = ({ contacts, handleSelect }) => {
  return (
    <div className="contacts_list">
      {contacts.map((contact, index) => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          index={index}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default ContactsList;
