import { useContext } from "react";
import { AdminAuth } from "./provider/AdminProvider";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../../Axios/useAxios";



const AdminLogin = () => {


    const navigate = useNavigate();

    const userName = 'ahtesamAdminLog';
const enteredPassword = '143216';



    const adminlog =async (e)=>{

        e.preventDefault();
        const form = e.target;
        const user = form.username.value;
        const password = form.pass.value;


        try {
            const response = await useAxios.post('/api/auth/login', { user, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            toast.success('Login Ok Bro');
            navigate('/admin/dashboard')
            // Redirect to dashboard or perform any other action upon successful login
          } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (display error message, etc.)
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