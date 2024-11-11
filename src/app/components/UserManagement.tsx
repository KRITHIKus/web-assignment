"use client"
import { useState,useEffect } from "react";
import fetchData from "@/app/utils/fetchData";
export default function ContentModeration(){

interface User {
    id: number;
    name: string;
    activity: string
}
   const [users, setusers]=useState<User[]>([]);
   const [loading,setloading]=useState(true);
   const[error,setError]=useState(null);
   useEffect(()=>{
    fetchData("/users")
    .then((data)=>{
        setusers(data);
        setloading(false);
    })
    .catch((error)=>{
        setError(error.message);
        setloading(false)
    })
   },[])

if (loading) return
<p>Loading user data...</p>;
if (error) return <p>Error:{error}</p>;

return (
<section>
    <h2 className="text-xl font-semibold">user Management</h2>
    <ul className="list-disc pl-5 space-y-2">
        {users.map((user)=>(
<li key={user.id}>{user.name} - {user.activity}</li>
        
        
        ))}

    </ul>

</section>    

)





}