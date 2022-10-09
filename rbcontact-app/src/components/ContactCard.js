import React from "react";
import {Link} from "react-router-dom";
import user from "../image/user.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="pngimahe" />
      <div className="content">
      <Link  to={`/contact/${id}`} state={{contact:props.contact}}>
        <div className="header">{name}</div>
        <div>{email}</div></Link>
      </div>
      <Link to="/edit" state={{contact:props.contact}}>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue",margin:"10px", float: "right" }}
      ></i></Link>
       <i onClick={
            ()=>props.deletecontacthandler(id)
       }
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "10px", float: "right" }}
      ></i>
    </div>
  );
};

export default ContactCard;
