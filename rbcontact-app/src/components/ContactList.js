import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const rendercontactlist = props.contacts.map((contact) => {
    return <ContactCard deletecontacthandler={props.deletecontacthandler} editcontacthandler={props.editcontacthandler} contact={contact} />;
  });
  return <div className="ui celled list">{rendercontactlist} </div>;
};

export default ContactList;
