import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-slate-100">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Address: Trimohoni , Khilgone, Dhaka-1219 |
        </h5>
        <div className="mt-6 lg:mb-0 mb-6 flex">
          <a className="bg-white flex text-blue-600 text-3xl  shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
            <FaFacebook></FaFacebook> </a>
          <a className="bg-white flex text-green-600 text-3xl  shadow-lg  h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
           <FaWhatsapp></FaWhatsapp> </a>
           
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/privacy-policy">Privacy Policy</a>
              </li>
            
            </ul>
          </div>
         
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span> Dora Collection
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;