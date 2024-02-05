import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "../components/login/page";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { increment, decrement, incrementByValue, reset } from "@/state/counter/counterSlice";
import { firstName, lastName } from "@/state/text/textSlice";
import UserProfile from "../components/userprofile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const count = useSelector((state: RootState)=> state.counter);
  const name = useSelector((state: RootState)=> state.text.value)
  const profile = useSelector((state : RootState) => state.userProofile );
  const dispatch= useDispatch();

  // console.log(profile," Values in Main .......")


  return (
    <div className="h-screen p-10 ">
      <div>
        <h1>User Details </h1>
        <div className="p-2">
          <p className="shadow-md border border-gray-200 bg-slate-500 text-black text-lg" >{profile.name}</p>
          <p className="shadow-md border border-gray-200 bg-slate-500 text-black text-lg" >{profile.phone}</p>
          <p className="shadow-md border border-gray-200 bg-slate-500 text-black text-lg" >{profile.email}</p>
          <p className="shadow-md border border-gray-200 bg-slate-500 text-black text-lg" >{profile.city}</p>
          <p className="shadow-md border border-gray-200 bg-slate-500 text-black text-lg" >{profile.education}</p>
          <p className="shadow-md border border-gray-200 bg-slate-500 text-black text-lg" >{profile.position}</p>
        </div>
      </div>
      <UserProfile />

    



      <h1>Counter : {count.value} : Times Clicked : {count.clicked}</h1>
      <h1>Name : {name}</h1>
      <button className="border  border-3 mx-4 bg-green-300 p-10" onClick={()=> dispatch(increment())}>Increment</button>
      <button className="border  border-3 mx-4 bg-red-300 p-10" onClick={()=> dispatch(decrement())}>Decrement</button>
      <button className="border  border-3 mx-4 bg-green-500 p-10" onClick={()=> dispatch(incrementByValue(10))}>Increment By 10</button>
      <button className="border  border-3 mx-4 bg-red-500 p-10" onClick={()=> dispatch(reset())}>Reset</button>
      <br />
      <button className="border  border-3 mx-4 bg-green-500 p-10" onClick={()=> dispatch(firstName())}>First Name</button>
      <button className="border  border-3 mx-4 bg-green-500 p-10" onClick={()=> dispatch(lastName())}>Last Name</button>

      {/* <Login /> */}
    </div>
  );
}
