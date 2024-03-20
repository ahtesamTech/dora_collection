import { useContext } from "react";
import { AdminAuth } from "./provider/AdminProvider";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const AdminLogin = () => {


    const navigate = useNavigate();

    const userName = 'ahtesamAdminLog';
const enteredPassword = '143216';



    const adminlog = (e)=>{

        e.preventDefault();
        const form = e.target;
        const user = form.username.value;
        const password = form.pass.value;


        if (userName === user && password == enteredPassword) {
        
            localStorage.setItem('admin', 'true'); // Save isAdmin status in localStorage
            navigate('/admin/dashboard');
        } else {
            toast.error('You are not an admin');
        }
        


    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            
            
        
         <div className=" p-5  bg-orange-500 rounded-md w-1/2 h-1/2  ">
         <form action="" onSubmit={adminlog} className="flex flex-col justify-center gap-2">
         <label htmlFor="">User Name </label>
                <input type="text" name="username" id="username" className="border-2 text-xl" />
                <label htmlFor="">Password </label>
                <input type="password" name="pass" id="pass" className="border-2 text-xl" />
                <button className="bg-green-500 text-white p-1" type="submit">Log in </button>
                </form>

            </div>
        
        </div>
    );
};

export default AdminLogin;