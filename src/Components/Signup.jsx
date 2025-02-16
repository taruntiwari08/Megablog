import React, { useState } from 'react'
import { login } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { useForm} from 'react-hook-form'
import { Button, Input } from './index'
import authService from '../appwrite/auth'
import { Logo } from './index'



export function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error,Seterror] = useState("")
    const {register,handleSubmit} = useForm()

    const Create = async(data) =>{
        Seterror("")
        try {
            const session = await authService.createAccount(data)
            if(session){
                const userData= await authService.getCurrentUser()
                if(userData) dispatch(login(session));
                navigate("/")
            }
        } catch (error) {
            Seterror(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center">
          <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <div >
                        <Logo classname='md:mr-[110px]' />
                    </div>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p> }
           
             <form onSubmit={handleSubmit(Create)}>
             <div className='space-y-5'>
            <Input label="Name:" placeholder="Enter Your Full Name"
            {...register("name",{
                required:true
            })}
            />
              <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
             <Input label="password" type="password" placeholder="Enter Your Password"
             {...register("password",{
                required:true
             })}
             />
              <Button type="submit" className="w-full bg-black text-white">
                            Create Account
                        </Button>
                </div>       
             </form>
           
             
             </div>   


    </div>
  )
}

