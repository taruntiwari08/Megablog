import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  './HamburgerMenu.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogoutBtn } from './LogoutBtn'
function Hamburger() {
    const[isOpen, setIsOpen] = useState(false)
    const authStatus = useSelector(state => state.auth.status)
     
     const navItems = [
       {
         name: 'Home',
         slug: "/",
         active : true
       },{
         name: "Login",
         slug: "/login", 
         active: !authStatus 
       },
       {
         name: "Signup",
         slug: "/signup",
         active: !authStatus, 
     },
     {
         name: "All Posts",
         slug: "/all-posts",
         active: authStatus,  
     },
     {
         name: "Add Post",
         slug: "/add-post",
         active: authStatus,   
     },
     {
       name: "Profile",
       slug: "/profile",
       active: authStatus,   
   },
     
   
     ]
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const closeMenu = () => {
        setIsOpen(false);
    }
    useEffect(() => {
        const handleDocumentClick = (event) => {
          if (!event.target.closest('.hamburger-menu')) {
            setIsOpen(false);
          }
        };
    
        document.body.addEventListener('click', handleDocumentClick);
    
        return () => {
          document.body.removeEventListener('click', handleDocumentClick); // cleanup function
        };
      }, []);
    
  return (
    <div className="hamburger-menu p-4 ">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
       
       {isOpen && (
        <div className="menu-content ml-1 mt-2 ">
          <ul>
            {navItems.map((item) => (
                item.active ? (
              <li key={item.name}>
                <Link to={item.slug} onClick={closeMenu}>
                  {item.name}
                </Link>
              </li>
                ) : null
            ))}
            {authStatus && (
                <li className ='-mt-4 '>
                  <Link to="/logout" onClick={closeMenu}>
                    <LogoutBtn/>
                  </Link>
                </li>
            )}
          </ul>

        </div>
      )}
      </div>
  )
}

export default Hamburger