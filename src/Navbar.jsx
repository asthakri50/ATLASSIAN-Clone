import React from 'react'
import {NavbarBrand} from "reactstrap"
import web1 from '../src/images/Atlassian-horizontal-blue-rgb.svg'
import web2 from '../src/images/Jira Software-blue.svg'
const Navbar = () => {
    return(
        <>
 <div className="container-fluid nav_bg1">
     <div className='row1'>
         <div className="col-10 mx-auto">

<div className="navbar navbar-expand-lg navbar-light bg-light">
  <NavbarBrand href="/">
    <img src={web1} alt="ATLASSIAN-logo"/>
    </NavbarBrand>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          For Teams
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Support
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>
    <ul className="navbar-nav ml-auto">
    <li class="nav-item active">
        <a class="nav-link" href="#">Buy Now <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Log in</a>
      </li>

    </ul>
    

  </div>
</div>
</div>


     </div>

 </div>

 <div className="container-fluid nav_bg2">
     <div className='row2'>
         <div className="col-10 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="https://www.atlassian.com/software/jira">Jira Software</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
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
</nav>
</div>


     </div>

 </div>
</>
    );

};

export default Navbar;
