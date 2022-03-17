import React from "react";

const ContactsListItem = ({ contact, index, handleSelect }) => {
  return (
    <a
      onClick={() => handleSelect(contact)}
      className={`panel-block ${index === 0 ? "is-active" : ""}`}
    >
      <span className="panel-icon">
        <i className="fas fa-address-book" aria-hidden="true"></i>
      </span>
      {contact.name}
    </a>
  );
};

export default ContactsListItem;
