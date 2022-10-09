import React,{useRef} from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

  const inputelement = useRef("");
  const getsearchterm = (e) => {

props.searchkeyterm(inputelement.current.value);

      }   
       return (
    <>
     <div className="ui menu">
      <div className="ui container center">
        <h2 className="header"> Contact-Manager</h2>
       
        </div>
        <div className="ui search">
          <div className="ui icon input">
            <input className="prompt" type="text" ref={inputelement} value={props.term} onChange={getsearchterm} placeholder="Search contacts..." />
            <i className="search icon" />
          </div>
        </div>
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    
   <Link to="/" className="ui blue button" style={{padding:"9px", margin:"10px"}}>Home</Link>
        <h3 className="item" > Contact List</h3>
        <Link to="/add" className="ui blue button" style={{margin:"10px"}}>Add Contact</Link>
   
        
    </div>
    </>
   
    
  );
};
export default Header;
