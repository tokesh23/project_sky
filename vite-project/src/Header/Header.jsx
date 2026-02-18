 
import { useState } from "react";
import logo from "../assets/image/logosky-removebg-preview.png"
import "./Header.css"
import Contact from "../Commponents/PouppBox/Contact"
function Header() {

  const [contact, setContact] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-1">
      <div className="container">

        {/* Logo */}
       <div className="bg-black rounded-1"> <img src={logo} alt="" className='img-fluid ' style={{width:"90px"}} />
</div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 " style={{fontWeight:"900"}}>
            <li className="nav-item dropdown " style={{cursor:"pointer"}}>
              <p className="nav-link dropdown-toggle"  data-bs-toggle="dropdown"  style={{cursor:"pointer"}}> 
           <strong>     Services</strong>
              </p>
              <ul className="dropdown-menu text-center drop shadow"   >
               <li className="" style={{fontWeight:"600"}}>Web Development</li>
                <li style={{fontWeight:"600"}}>App Development</li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Consulting
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">IT Consulting</a></li>
                <li><a className="dropdown-item" href="#">Business Consulting</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Industries</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Insights</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
          </ul>

          {/* Contact Button */}
           <button 
              className="btncolor px-4 shadow"
              onClick={() => setContact(true)} 
            >
              Contact
            </button>

        </div>
       {contact && (
        <Contact closepop={() => setContact(false)} />
      )}
      </div>
    </nav>
  );
}

export default Header;
