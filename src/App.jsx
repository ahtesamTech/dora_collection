import { FaFacebookMessenger } from "react-icons/fa";
import { Toaster } from 'react-hot-toast'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './layout/shear/Header'
import Footer from "./layout/shear/Footer";

function App() {


  return (
    <>
    <Toaster></Toaster>
    <Header></Header>
     <Outlet></Outlet>
<Footer></Footer>
<button  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fixed bottom-10 right-5"> <FaFacebookMessenger className="text-3xl" /> </button>


    </>
  )
}

export default App
