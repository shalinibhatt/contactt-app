import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import user from "../image/user.png";
const ContactDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const {name, email} = location.state.contact;
console.log(name);

    console.log(location);
  return (

    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="user"/>
            </div>
            <div className='content'>
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
            <button className='ui blue button' onClick={()=>{
                navigate("/");
            }}>Back to contact list</button>
        </div>
        </div>



  )
}

export default ContactDetails