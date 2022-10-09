import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddContact = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory");
      return;
    }
    props.addcontacthandler({ name, email });
    setname("");
    setemail("");
    console.log(props);
    navigate("/");
  };
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
