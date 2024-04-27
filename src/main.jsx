import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import { Protected } from './Components/AuthLayout.jsx'
import {Home,LogIn,SignUp,AddPost,AllPosts,EditPost,Post,Profile} from './Pages/index.js'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={
        <Protected authenication={false}>
          <LogIn/>
        </Protected>
      }/>

<Route path='/signup' element={
        <Protected authenication={false}>
          <SignUp/>
        </Protected>
      }/>

<Route path='/add-post' element={
        <Protected authenication>
           {" "}
          <AddPost/>
        </Protected>
      }/>

<Route path='/all-posts' element={
        <Protected authenication>
          <AllPosts/>
        </Protected>
      }/>

<Route path='/edit-post/:slug' element={
        <Protected authenication>
           {" "}
          <EditPost/>
        </Protected>
      }/>

<Route path='/post/:slug' element={
          <Post/>
      }/>

<Route path='/profile' element={
  <Profile/>
}
/>

    </Route> 

    

  ))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
