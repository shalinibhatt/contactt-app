import React,{useState} from 'react'
import { useNavigate,useLocation} from 'react-router-dom';


const EditContact = (props) => {
    const location=useLocation();
    const navigate=useNavigate();
console.log(location.state.contact);
    const {id,name,email}=location.state.contact;

    const [newname,setnewname]=useState(name);
    const [newemail,setnewemail]=useState(email);


  
    const edit = (e) => {
      e.preventDefault();
      if (newname === "" || newemail === "") {
        alert("All the fields are mandatory");
        return;
      }
      props.editcontacthandler({ id, name:newname, email:newemail });
      setnewname("");
      setnewemail("");
      navigate("/");
    };
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={edit}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newname}
              onChange={(e) => setnewname(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={newemail}
              onChange={(e) => setnewemail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
}

export default EditContact;