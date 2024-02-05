import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { setUserProfile } from '@/state/useprofile/userProfileSlice';
import { useFormik } from 'formik';
import { UserProfileEntity } from '@/components/entity/user.profile.entity';
import { Formik, Field, ErrorMessage } from 'formik';


export default function UserProfile() {
    const dispatch = useDispatch()



    const form = useFormik({
        initialValues: new UserProfileEntity(),
        validationSchema : UserProfileEntity.creatUserProfileSchema(),
        onSubmit: async (values:UserProfileEntity) =>{
            dispatch(setUserProfile(values));
            // resetForm();
            console.log(values," VAlues being submitted................................................................")
        }
    })

    
  return (
    <div className='flex justify-center items-center p-6 '>
        <div className='border border-gray-300 bg-white w-2/6 py-6 px-4  rounded-2xl shadow-2xl '>
            <form onSubmit={form.handleSubmit} >
                <input type='text' id='name' name='name'  onChange={form.handleChange} value={form.values.name} placeholder='name' className='border border-gray-400 text-gray-700 mb-4 rounded-sm w-full p-2'/>
          
          
                <input type='number' id='phone' name='phone' onChange={form.handleChange} value={form.values.phone} placeholder='phone' className='border border-gray-400 text-gray-700 mb-4 rounded-sm w-full p-2'/>
                <input type='email'  id='email' name='email' onChange={form.handleChange} value={form.values.email}  placeholder='email@gmail.com' className='border border-gray-400 text-gray-700 mb-4 rounded-sm w-full p-2'/>
                <input type='text'  id='city' name='city' onChange={form.handleChange} value={form.values.city} placeholder='city' className='border border-gray-400 text-gray-700 mb-4 rounded-sm w-full p-2'/>
                <input type='text' id='education' name='education' onChange={form.handleChange} value={form.values.education} placeholder='education' className='border border-gray-400 text-gray-700 mb-4 rounded-sm w-full p-2'/>
                <input type='text' id='position' name='position' onChange={form.handleChange} value={form.values.position} placeholder='position' className='border border-gray-400 text-gray-700 mb-4 rounded-sm w-full p-2'/>
                <button type='submit' className='border border-gray-400 text-white p-4 bg-blue-700 rounded-lg hover:shadow-xl'>Set User Profile</button>
            </form>
        </div>
    </div>
  )
}
