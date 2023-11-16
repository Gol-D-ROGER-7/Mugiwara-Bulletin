import React, { useState } from 'react'
// import Mugiwara from "../../images/Mugiwara.png"
import { Link } from 'react-scroll';
import img from '../../images/Mugiwara.png'
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import './Navbar.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      <nav className="nav">
        <Link to="/" 
           smooth={true} 
           offset={50} 
           duration={500} >
          <img src={img} alt="logo" height={200} width={220} />
        </Link>

        <div className="menu">
          <ul className={menuOpen ? 'menu-item' : 'menu-close'}
            onClick={() => setMenuOpen(false)}>
            <li>
              <Link to="/"
                 smooth={true} 
                 offset={50} 
                 duration={500} >
                 Home
              </Link>
            </li>
            <li>
              <Link to="/latest"
                 smooth={true} 
                 offset={50} 
                 duration={500} >
                 Latest
              </Link>
            </li>
            <li>
              <Link to="/top-stories"
                 smooth={true} 
                 offset={50} 
                 duration={500} >
                 Top stories
              </Link>
            </li>
            <li>
              <Link to="/deep-dives"
                 smooth={true} 
                 offset={50} 
                 duration={500} >
                 Deep dives
              </Link>
            </li>
          </ul>
          <div className="hamburger"
            >
            {menuOpen
              ? <BiMenuAltRight size={50} color='black' onClick={() => setMenuOpen(!menuOpen)} />
              : <RiCloseLine size={50} color='black' onClick={() => setMenuOpen(!menuOpen)}/>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
