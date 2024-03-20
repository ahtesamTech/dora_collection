import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import logo1 from '/logo1.jpeg'

const Header = () => {

    const [cartData, setCartData] = useState([])

   useEffect(()=>{
    const existingData = localStorage.getItem('buy_now');
    let newData = JSON.parse(existingData);
    setCartData(newData)
    
   },[])

    return (
        <div>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 shadow-lg">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/" className="flex items-center">
            <img src={logo1} className="h-6 mr-3 sm:h-9" alt="Landwind Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dora Collection</span>
        </a>
        <div className="flex items-center gap-2 lg:order-2">

        <li className="ml-2 bg-purple-600 rounded-md text-white lg:ml-4 relative inline-block">
          <a className="" href="/check-out">
            <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">{cartData != null ? cartData.length : 0}</div>
            <svg className="h-9 lg:h-10 p-2 text-white" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>
          </a>
        </li>

            {/* <a href="https://themesberg.com/product/tailwind-css/landing-page"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Track Order</a> */}
           
        </div>
    </div>
              </nav>

<div className="bg-blue-600 text-white py-3">
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
</div>
        </div>
    );
};

export default Header;  
