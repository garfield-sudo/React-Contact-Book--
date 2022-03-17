import React from "react";

const CreateContactButton = ({ handleButton, isDisabled }) => {
  return (
    <div className="panel-block">
      <button
        onClick={handleButton}
        className="button is-link is-outlined is-fullwidth"
        disabled={isDisabled}
      >
        Add New Contact
      </button>
    </div>
  );
};

export default CreateContactButton;
