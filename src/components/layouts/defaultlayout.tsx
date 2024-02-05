
'use client'
import React, { useContext } from "react";
import {UserContext} from "@/components/context/usercontext"
import "tailwindcss/tailwind.css"; 
export default function AuthProvider({
  children,
}:{children: React.ReactNode} ) {
  const {state:{user}} = useContext(UserContext);
    console.log(user,"User context value=========================>>>>>>>>>>>>>>>>>>");
    

    return (
     <div className='border-2 border-black'>
    { 
      user && (user.username === 'admin') ?  <div><p className="bg-gray-900 text-white">this is render after user</p></div> : 
      <div>
        <p>did not reciedd any admin</p>
      </div>
    }
    
      Defaultlayour
      {children}
    </div>
    );
}



