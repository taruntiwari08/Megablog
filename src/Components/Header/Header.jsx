import React from 'react'
import {LogoutBtn, Logo, Container} from '../index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'

export function Header() {
   
    const authStatus = useSelector(state => state.auth.status)
    
    const navigate = useNavigate()
 
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
    return ( 
      <header className='py-3 shadow bg-blue-900 w-full text-gray-100'>
      <Container>
        <nav className='flex justify-between items-center'>
          <div className=''>
            <Link to='/'>
              <Logo classname='hidden lg:block h-[60px] w-[60px]'/>
            </Link>
          </div>
          <ul className='md:flex ml-auto hidden'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'
                  >
                    {item.name} 
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <div className='md:hidden'>
          <Hamburger/>
          </div>
        </nav>
      </Container>
    </header>
    
    )
  }