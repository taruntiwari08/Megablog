import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import appwriteService from '../../appwrite/configure'
import { Button,Input } from '../index'
import { updateUserName } from '../../store/authSlice'
function MyProfile() {
    const {handleSubmit,register} = useForm()
    const userInfo = useSelector(state=>state.auth.userData)
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const dispatch = useDispatch()
    const  [name, setname] = useState(false)

    const handlePasswordUpdate = async(data)=>{
      try {
        await appwriteService.updatePassword(data.newPassword,data.password)
        alert('Password updated successfully!');
        setIsEditingPassword(false);
      } catch (error) {
        console.log('Error updating password: ' + error.message)
      }
    }

    const handleUpdateName = async(data)=>{
        try {
            await appwriteService.updateName(data.newName)
            alert('Name Updated Succesfully!')
          dispatch(updateUserName({ name: data.newName }));

            setname(false)
        } catch (error) {
            console.log('Error updating Name: ' + error.message)  
        }
    } 

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mr-10 mb-10 font-serif">My Profile</h1>

    {/* Name section */}
    <div className="mb-4 border rounded-lg p-4 flex items-center">
        {name ? (
            <form onSubmit={handleSubmit(handleUpdateName)} className="flex items-center w-full">
                {/* New name input */}
                <Input
                    type="text"
                    placeholder="New Name"
                    className="border rounded px-2 py-1 flex-grow"
                    defaultValue={userInfo.name}
                    {...register("newName", { required: true })}
                />

                {/* Save button */}
                <Button
                    type="submit"
                    className="bg-green-500 text-white rounded px-4 py-2 ml-2"
                >
                    Save
                </Button>
            </form>
        ) : (
            <>
                {/* Display user's name */}
                <p className="text-lg flex-grow">
                    <span className="font-semibold text-xl font-serif">Name:  </span> <span className='font-bold text-2xl font-serif ml-3 text-green-700'>{userInfo.name} </span>
                </p>

                {/* Edit button */}
                <button
                    className="ml-auto bg-blue-500 text-white rounded-full p-2 flex items-center"
                    onClick={() => setname(true)}
                
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </>
        )}
    </div>

    {/* Password section */}
    <div className="mb-4 border rounded-lg p-4 flex items-center">
        <p className="text-lg flex-grow">
            <span className="font-semibold text-xl font-serif">Password:</span> 
            {/* Display hidden password */}
            {isEditingPassword ? (
                <form onSubmit={handleSubmit(handlePasswordUpdate)} className="flex items-center w-full">

                    <Input
                        type="password"
                        placeholder="Current Password"
                        className="border rounded px-2 py-1 flex-grow"
                        {...register("password", { required: true })}
                    />

                    {/* New password input */}
                    <Input
                        type="password"
                        placeholder="New Password"
                        className="border rounded px-2 py-1 flex-grow"
                        {...register("newPassword", { required: true })}
                    />

                    {/* Save button */}
                    <Button
                        type="submit"
                        className="bg-green-500 text-white rounded px-4 py-2 ml-2"
                    >
                        Save
                    </Button>
                </form>
            ) : (
                <span className="ml-2">********</span>
            )}
        </p>

        {/* Edit button */}
        <Button
            className="ml-auto bg-blue-500 text-white rounded-full p-2 flex items-center"
            onClick={() => setIsEditingPassword(!isEditingPassword)}
        >
            {isEditingPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            )}
        </Button>
    </div>
</div>

  )
}

export default MyProfile