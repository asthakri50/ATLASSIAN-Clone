import React from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,} from "reactstrap";
import web2 from './images/Jira Software-blue.svg';
import './LowerBar.css';
const LowerBar = () => {
    return(
        <>
        <div className="fixed top">
        <div className='row2'>
        <div className="container-fluid nav_bg2s">
          <div className="col-10 mx-auto">
   
   <div className="navbar navbar-expand-lg navbar-light bg-light">
     < NavbarBrand href="https://www.atlassian.com/software/jira">
       <img src={web2} height="30px" width = "200px" alt="Zira logo"></img>
       </NavbarBrand>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
   
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
       <li class="nav-item">
           <a class="nav-link" color="rgb(0,0,100)" href="#">Features</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Product guide</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Pricing</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Enterprise</a>
         </li>
         
        </ul>
       <ul className="navbar-nav ml-auto">
       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Get it free</button>
   </ul>
       
   
     </div>
   </div>
   </div>
     </div>
    </div>
    </div>
   </>
    
    );
};
export  default LowerBar;