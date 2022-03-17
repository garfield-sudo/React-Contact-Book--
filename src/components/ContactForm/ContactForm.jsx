import React, { useState } from "react";

const ContactForm = ({ cancelForm, formData }) => {
  const [contactName, setContactName] = useState(formData.name);
  const [contactPhone, setContactPhone] = useState(formData.phone);
  const [contactEmail, setContactEmail] = useState(formData.email);
  const [contactAddress, setContactAddress] = useState(formData.address);
  const [contactImage, setContactImage] = useState(formData.img);

  function handleContactNameInput(e) {
    setContactName(e.target.value);
  }
  function handleContactPhoneInput(e) {
    setContactPhone(e.target.value);
  }
  function handleContactEmailInput(e) {
    setContactEmail(e.target.value);
  }
  function handleContactAddressInput(e) {
    setContactAddress(e.target.value);
  }
  function handleContactImgInput(e) {
    setContactImage(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (
      contactName === "" &&
      (contactPhone === "" || contactEmail === "" || contactAddress === "")
    ) {
      return;
    }
    const contact = {
      id: formData.id || Date.now(),
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
      address: contactAddress,
      img: contactImage,
    };
    formData.onFormSubmit(contact);
  }

  function handleFormCancel(e) {
    e.preventDefault();
    cancelForm();
    setContactName("");
    setContactPhone("");
    setContactEmail("");
    setContactAddress("");
  }

  return (
    <form className="box">
      <h4 className="title is-4 is-spaced has-text-centered">
        {formData.title}
      </h4>
      <hr />
      <div className="field">
        <label className="label">Contact Name</label>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={handleContactNameInput}
            className="input"
            type="text"
            placeholder="Name Surname"
            value={contactName}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {contactName === "" && (
            <p className="help is-danger">This field is required</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={handleContactPhoneInput}
            className="input"
            type="tel"
            placeholder="Phone Number"
            value={contactPhone}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-phone-alt"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={handleContactEmailInput}
            className="input"
            type="email"
            placeholder="Email Address"
            value={contactEmail}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Address</label>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={handleContactAddressInput}
            className="input"
            type="text"
            placeholder="Local Address"
            value={contactAddress}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-map-marker-alt"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Image URL</label>
        <div className="control has-icons-left has-icons-right">
          <input
            onChange={handleContactImgInput}
            className="input"
            type="text"
            placeholder="Image URL Address"
            value={contactImage}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-image"></i>
          </span>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button onClick={handleFormSubmit} className="button is-link">
            Submit
          </button>
        </div>
        <div className="control">
          <button
            onClick={handleFormCancel}
            className="button is-link is-light"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
