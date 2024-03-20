import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import logo1 from '/logo1.jpeg'
import { NavLink } from "react-router-dom";

const DashNav = () => {

    const [cartData, setCartData] = useState([])

   useEffect(()=>{
    const existingData = localStorage.getItem('buy_now');
    let newData = JSON.parse(existingData);
    setCartData(newData)
    
   },[])

   // Logout function
const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the login page or perform other actions
  };
  

    return (
        <div>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 shadow-lg">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <NavLink to="dashboard" className="flex items-center">
            <img src={logo1} className="h-6 mr-3 sm:h-9" alt="Landwind Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dora Collection</span>
        </NavLink>
        <div className="flex items-center gap-2 lg:order-2">

        <li className="p-2 bg-purple-600 rounded-md text-white lg:ml-4 relative inline-block">
          <NavLink className="" to="add-product">
           Add Product
            </NavLink>
        </li>

        <li className="p-2 bg-orange-600 rounded-md text-white lg:ml-4 relative inline-block">
          <NavLink className="" to="view-order">
           view order
            </NavLink>
        </li>
        <li className="p-2 bg-lime-600 rounded-md text-white lg:ml-4 relative inline-block">
          <button className="btn" onClick={handleLogout}>
           LogOut
            </button>
        </li>

            {/* <a href="https://themesberg.com/product/tailwind-css/landing-page"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Track Order</a> */}
           
        </div>
    </div>
              </nav>

{/* <div className="bg-blue-600 text-white py-3">
    <div className="flex flex-wrap justify-between items-center text-lg px-5 border-b-2 pb-1">
    <p>যেকোনো প্রয়োজনে যোগাযোগ করুন</p>
  <div className="flex items-center gap-4">
  <p className="flex items-center gap-1"> <MdAddCall/>   018902839234898</p>
    <FaWhatsapp className="bg-green-600 rounded-full text-4xl p-2" />
  </div>
    </div>
    <Marquee autoFill={false} play={true} pauseOnHover={true} className="text-xl mt-2 font-bold" >
    অর্ডার কনফার্ম করতে ২০০৳ টাকা অগ্রিম দিতে হবে
    </Marquee>
</div> */}
        </div>
    );
};

export default DashNav;  
