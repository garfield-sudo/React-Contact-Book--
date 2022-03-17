import React from "react";
import ContactCardButton from "./ContactCardButton";

const ContactCard = ({ contact, handleDeleteButton, handleEditButton }) => {
  function deleteContact() {
    handleDeleteButton(contact.id);
  }
  function editContact() {
    handleEditButton(contact);
  }

  return (
    <div id="contact_card" className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                className="is-rounded"
                src={contact.img}
                alt="Profile picture"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{contact.name}</p>
            <p className="subtitle is-6">
              <a href="#">#colleagues</a>
            </p>
          </div>
        </div>
        <div className="content">
          <p>
            <strong>Mobile: </strong>
            <span>{contact.phone}</span>
          </p>
          <p>
            <strong>Email: </strong>
            <span>{contact.email}</span>
          </p>
          <p>
            <strong>Address: </strong>
            <span>{contact.address}</span>
          </p>
        </div>
      </div>
      <footer className="card-footer">
        {<ContactCardButton text={"Share"} />}
        {<ContactCardButton text={"Edit"} handleClick={editContact} />}
        {<ContactCardButton text={"Delete"} handleClick={deleteContact} />}
      </footer>
    </div>
  );
};

export default ContactCard;
