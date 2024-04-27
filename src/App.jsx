import config from './Config/config'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import { Header,Footer } from './Components/index'
import './App.css'
import './index.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth.userData)

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }).catch((error)=> {
      console.log('app.jxs :: line no.22', error);
    }).finally(()=>{
      setLoading(false)
    })
  }, [userData])

  return !loading ? 
  <div className=' min-h-screen flex flex-wrap content-between bg-white'><div className=' w-full '>
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer />
    </div></div> : null;

}

export default App