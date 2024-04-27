import React, { useEffect, useState } from 'react'
import {LogoutBtn, Logo, Container} from '../index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authService from '../../appwrite/auth'
import { Link } from 'react-router-dom'

export function Header() {
   
    const authStatus = useSelector(state => state.auth.status)
   // const userID = useSelector(state => state.auth.userData?.$id)
    
    const navigate = useNavigate()
 

    const navItems = [
      {
        name: 'Home',
        slug: "/",
        active : true
      },{
        name: "Login",
        slug: "/login", 
        active: !authStatus // shows only when authstatus is false that is log out 
      },
      {
        name: "Signup",
        slug: "/signup",
        active: !authStatus, // shows only when authstatus is false that is log out 
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,  // show this option only if login
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,   //// show this option only if login
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus,   //// show this option only if login
  },
    
  
    ]
    return ( 
      <header className='py-3 shadow bg-blue-900 w-full text-gray-100'>
      <Container>
        <nav className='flex justify-between items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo classname=' h-[70px] w-[70px]'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
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
        </nav>
      </Container>
    </header>
    
    )
  }