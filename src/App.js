import React, { useState } from "react";
import ContactsList from "./components/ContactsList/ContactsList";
import CreateContactButton from "./components/ContactForm/CreateContactButton";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactCard from "./components/ContactCard/ContactCard";
import SearchInput from "./components/SearchInput/SearchInput";
import ContactsPagination from "./components/ContactsPagination/ContactsPagination";

const contactsData = [
  {
    name: "Dosy",
    phone: "996 551 111111",
    email: "some@gmail.com",
    address: "Bishkek",
    img: "https://bulma.io/images/placeholders/96x96.png",
    id: 1,
  },
  {
    name: "Mirdin",
    phone: "996 551 111111",
    email: "some@gmail.com",
    address: "Bishkek",
    img: "https://bulma.io/images/placeholders/96x96.png",
    id: 2,
  },
  {
    name: "Sanzhar",
    phone: "996 551 111111",
    email: "some@gmail.com",
    address: "Bishkek",
    img: "https://bulma.io/images/placeholders/96x96.png",
    id: 3,
  },
  {
    name: "Polina",
    phone: "996 551 111111",
    email: "some@gmail.com",
    address: "Bishkek",
    img: "https://bulma.io/images/placeholders/96x96.png",
    id: 4,
  },
  {
    name: "Aliy",
    phone: "996 551 111111",
    email: "some@gmail.com",
    address: "Bishkek",
    img: "https://bulma.io/images/placeholders/96x96.png",
    id: 5,
  },
  {
    name: "Aizada",
    phone: "996 551 111111",
    email: "some@gmail.com",
    address: "Bishkek",
    img: "https://bulma.io/images/placeholders/96x96.png",
    id: 6,
  },
  {
    name: "DedInside",
    phone: "996 551 111111",
    email: "some@gmail.com",
    address: "Bishkek",
    img: "https://bulma.io/images/placeholders/96x96.png",
    id: 7,
  },
];

const emptyContact = {
  id: Date.now(),
  name: "",
  phone: "",
  email: "",
  address: "",
  img: "https://bulma.io/images/placeholders/96x96.png",
};

function App() {
  const perPageLimit = 10;

  const [allContacts, setAllContacts] = useState(contactsData);
  const [contacts, setContacts] = useState(
    filterContacts(allContacts, "", perPageLimit)
  );
  const [isDisabledCreateBtn, setIsDisabledCreateBtn] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showContactCard, setShowContactCard] = useState(true);
  const [selectedContact, setSelectedContact] = useState(
    getDefaultContactSelection(contacts)
  );
  const [formData, setFormData] = useState({});

  function filterContacts(array, searchText, maxResults, page = 1) {
    sortContacts(array);
    const filteredResuls = array.filter(
      (item) =>
        contains("name", searchText, item) ||
        contains("phone", searchText, item) ||
        contains("email", searchText, item) ||
        contains("address", searchText, item)
    );
    const offset = (page - 1) * maxResults;

    return filteredResuls.slice(offset, offset + maxResults);
  }

  function sortContacts(data) {
    data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  function contains(key, value, emoji) {
    if (emoji[key].toLowerCase().includes(value.toLowerCase())) return true;
    else return false;
  }

  function updateAllContacts(newArray) {
    setAllContacts(newArray);
    setContacts(filterContacts(newArray, "", perPageLimit));
  }

  function handleContactsSearch(searchText) {
    const foundContacts = filterContacts(allContacts, searchText, perPageLimit);
    setContacts(foundContacts);
  }

  function handleContactSelection(contact) {
    setSelectedContact(contact);
  }

  function getDefaultContactSelection(ontactsArray) {
    if (ontactsArray.length === 0) return emptyContact;
    else return ontactsArray[0];
  }

  function openCreateContactForm() {
    const formData = {
      ...emptyContact,
      title: "Create Contact",
      onFormSubmit: handleCreateContact,
    };
    setFormData(formData);
    openContactForm();
  }

  function handleCreateContact(newContact) {
    const newContacts = [...allContacts, newContact];
    updateAllContacts(newContacts);
    handleContactSelection(newContact);
    closeContactForm();
  }

  function openEditContactForm(contact) {
    const formData = {
      ...contact,
      title: "Edit Contact",
      onFormSubmit: handleEditContact,
    };
    setFormData(formData);
    openContactForm();
  }

  function handleEditContact(updatedContact) {
    const newContacts = allContacts.map((contact) => {
      if (contact.id === updatedContact.id) return updatedContact;
      else return contact;
    });
    updateAllContacts(newContacts);
    handleContactSelection(updatedContact);
    closeContactForm();
  }

  function handleDeleteContact(id) {
    const arr = allContacts.filter((contact) => contact.id !== id);
    updateAllContacts(arr);
    handleContactSelection(getDefaultContactSelection(arr));
  }

  function openContactForm() {
    setShowContactCard(false);
    setShowContactForm(true);
    setIsDisabledCreateBtn(true);
  }

  function closeContactForm() {
    setShowContactCard(true);
    setShowContactForm(false);
    setIsDisabledCreateBtn(false);
  }

  function turnPage(pageToGo) {
    const foundContacts = filterContacts(
      allContacts,
      "",
      perPageLimit,
      pageToGo
    );
    setContacts(foundContacts);
  }

  function calcTotalPages() {
    return Math.ceil(allContacts.length / perPageLimit);
  }

  return (
    <div className="container is-max-desktop">
      <nav className="panel">
        <p className="panel-heading">
          <i className="fas fa-book" aria-hidden="true"></i>
          <span style={{ marginLeft: 8 }}>Contacts Book</span>
        </p>
        <div className="columns">
          <div className="column">
            <SearchInput filterLit={handleContactsSearch} />
            <p className="panel-tabs">
              <a href="#" className="is-active">
                All
              </a>
              <a href="#">Favourites</a>
              <a href="#">Relatives</a>
              <a href="#">Friends</a>
              <a href="#">Colleagues</a>
              <a href="#">Blocked</a>
            </p>

            <ContactsList
              contacts={contacts}
              handleSelect={handleContactSelection}
            />
            <CreateContactButton
              handleButton={openCreateContactForm}
              isDisabled={isDisabledCreateBtn}
            />
            <ContactsPagination
              totalPages={calcTotalPages()}
              turnPage={turnPage}
            />
          </div>
          <div className="column">
            {showContactCard && (
              <ContactCard
                contact={selectedContact}
                handleDeleteButton={handleDeleteContact}
                handleEditButton={openEditContactForm}
              />
            )}
            {showContactForm && (
              <ContactForm cancelForm={closeContactForm} formData={formData} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
