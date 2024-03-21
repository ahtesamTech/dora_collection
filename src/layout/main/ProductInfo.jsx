import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useNavigate, useParams } from "react-router-dom";
import HelmetAdd from "../shear/HelmetAdd";
import useAxios from "../../Axios/useAxios";

const Hero = () => {
	// declare dispatch function
    const [data, setData] = useState([]);
    const [imag, setImag] = useState([]);
    const [loading, setLoading] = useState(true);
	

    const getData = useParams();
 
    useEffect(() => {
        setLoading(true); // Set loading to true when fetching data
        
        useAxios.get(`/api/product/${getData.id}`)
        .then(res=>{

          setData(res.data[0]);
          setImag(res.data[0].images)
          setLoading(false)
        }) .catch(() => {
          setLoading(false); // Set loading to false if there is an error
          toast.error('There was an error while retrieving the data');
      });
        
        
    }, [getData]);

    const navigate = useNavigate();

console.log(data.video);


    const buyNow = ()=>{
  
  
  const buyData = {
    product_id : data.id,
    product_title : data.title,
    product_price: data.price,
    product_img : data.thumbnail
  
  }
     // Check if there's already data in localStorage
      // Retrieve existing data from localStorage
      const existingData = localStorage.getItem('buy_now');
      let newData = [];
  
      // Check if there's existing data
      if (existingData) {
        newData = JSON.parse(existingData);
        
        // Check if the product already exists in the data
        const isDuplicate = newData.some(item =>  item.product_id === buyData.product_id );
  
        // If it's a duplicate, don't add it again
        if (isDuplicate) {
          toast.error('This product is already in your cart.');
          navigate('/check-out')
          return;
        }
  
      }
  
      // Append new product data to existing or create new array
      newData.push(buyData);
  
      localStorage.setItem('buy_now', JSON.stringify(newData));
      toast.success('Product added to cart.');
      navigate('/check-out')
  
    }
  
    const addCart = ()=>{
  
  
  const buyData = {
    product_id : data.id,
    product_title : data.title,
    product_price: data.price,
    product_img : data.thumbnail
  
  }
     // Check if there's already data in localStorage
      // Retrieve existing data from localStorage
      const existingData = localStorage.getItem('buy_now');
      let newData = [];
  
      // Check if there's existing data
      if (existingData) {
        newData = JSON.parse(existingData);
        
        // Check if the product already exists in the data
        const isDuplicate = newData.some(item =>  item.product_id === buyData.product_id );
  
        // If it's a duplicate, don't add it again
        if (isDuplicate) {
          toast.error('This product is already in your cart.');
        //   navigate('/check-out')
          return;
        }
  
      }
  
      // Append new product data to existing or create new array
      newData.push(buyData);
  
      localStorage.setItem('buy_now', JSON.stringify(newData));
      toast.success('Product added to cart.');
    //   navigate('/check-out')
  
    }
  
	
	// desktop image modal
	

	return (
		<main className="bg-slate-300 p-5 lg:p-10 space-y-4">

      {
        <HelmetAdd
        pageTitle={getData.productTitle+ " || "+ data.description}
        pageDescription={data.description}
        ></HelmetAdd>
      }
			{
                loading ? (
                    <div className="flex justify-center items-center h-screen">
                     <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
    
                     <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
                 </div>
                 </div>
                )  : <>
                
                <div className="  flex items-center  overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={data.thumbnail} className="w-full relative rounded-xl z-10" alt=""/>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 ">
                <div className="mb-5">
                    <h1 className="font-bold uppercase text-2xl mb-5">{data.title}</h1>
                    <h1 className="uppercase text-xl mb-5">Brand: {data.brand}</h1>
                    <p className="text-sm">{data.description}</p>
                </div>
                <div className="space-y-8" >
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">TK</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{data.price}</span>
                        <span className="text-xl leading-none text-red-500 align-baseline"> In Stock {data.stock}</span>
                       
                    </div>
                    <div>
                    <ul className="space-y-3 text-lg">
                        
                       <li className="icon-with-text__item flex items-center gap-2"><svg className="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 5.2393L8.5149 3.77392C6.79996 2.08174 4.01945 2.08174 2.30451 3.77392C0.589562 5.4661 0.589563 8.2097 2.30451 9.90188L10 17.4952L17.6955 9.90188C19.4104 8.2097 19.4104 5.4661 17.6955 3.77392C15.9805 2.08174 13.2 2.08174 11.4851 3.77392L10 5.2393ZM10.765 3.06343C12.8777 0.978857 16.3029 0.978856 18.4155 3.06343C20.5282 5.148 20.5282 8.52779 18.4155 10.6124L10.72 18.2057C10.3224 18.5981 9.67763 18.5981 9.27996 18.2057L1.58446 10.6124C-0.528154 8.52779 -0.528154 5.14801 1.58446 3.06343C3.69708 0.978859 7.12233 0.978858 9.23495 3.06343L10 3.81832L10.765 3.06343Z" fillRule="evenodd"></path></svg><span className="h4 inline-richtext">স্টক শেষ হওয়ার আগেই অর্ডার করুন!&nbsp;</span>
    </li>
    <li className="icon-with-text__item flex items-center gap-2"><svg className="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M18.5 1.5H1.5L1.5 18.5H18.5V1.5ZM1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5V18.5C0.5 19.0523 0.947715 19.5 1.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V1.5C19.5 0.947715 19.0523 0.5 18.5 0.5H1.5Z" fillRule="evenodd"></path>
      <path d="M14.9975 6.09084C15.201 6.27746 15.2147 6.59375 15.0281 6.79728L8.91631 13.4627C8.82231 13.5652 8.68987 13.6239 8.55079 13.6247C8.41172 13.6256 8.27857 13.5684 8.18335 13.4671L4.99513 10.0731C4.80606 9.87179 4.81596 9.55536 5.01723 9.3663C5.21849 9.17723 5.53492 9.18713 5.72399 9.3884L8.54335 12.3897L14.291 6.12145C14.4776 5.91791 14.7939 5.90421 14.9975 6.09084Z"></path></svg><span className="h4 inline-richtext">প্রোডাক্ট হাতে পেয়ে মূল্য পরিশোধ করুন!</span>
    </li>
    <li className="icon-with-text__item flex items-center gap-2"><svg className="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M18.7014 11.3962C18.7014 16.075 14.9085 19.8679 10.2297 19.8679C5.55095 19.8679 1.75806 16.075 1.75806 11.3962C1.75806 6.71746 5.55095 2.92457 10.2297 2.92457C14.9085 2.92457 18.7014 6.71746 18.7014 11.3962ZM10.2297 18.8679C14.3562 18.8679 17.7014 15.5227 17.7014 11.3962C17.7014 7.26974 14.3562 3.92457 10.2297 3.92457C6.10323 3.92457 2.75806 7.26974 2.75806 11.3962C2.75806 15.5227 6.10323 18.8679 10.2297 18.8679Z"></path>
      <path d="M10.7203 1.7782H9.7392C9.18691 1.7782 8.7392 2.22591 8.7392 2.7782V2.92456H11.7203V2.7782C11.7203 2.22591 11.2726 1.7782 10.7203 1.7782ZM9.7392 0.778198C8.63463 0.778198 7.7392 1.67363 7.7392 2.7782V3.92456H12.7203V2.7782C12.7203 1.67363 11.8249 0.778198 10.7203 0.778198H9.7392Z" fillRule="evenodd"></path>
      <path d="M8.98448 11.3963C8.98448 10.7086 9.54201 10.1511 10.2298 10.1511C10.9175 10.1511 11.475 10.7086 11.475 11.3963C11.475 12.0841 10.9175 12.6416 10.2298 12.6416C9.54201 12.6416 8.98448 12.0841 8.98448 11.3963Z"></path>
      <path d="M9.72974 11.3962C9.72974 11.1201 9.95359 10.8962 10.2297 10.8962H15.2108C15.487 10.8962 15.7108 11.1201 15.7108 11.3962C15.7108 11.6724 15.487 11.8962 15.2108 11.8962H10.2297C9.95359 11.8962 9.72974 11.6724 9.72974 11.3962Z"></path>
      <path d="M10.2297 5.91517C10.5059 5.91517 10.7297 6.13902 10.7297 6.41517V8.90572C10.7297 9.18186 10.5059 9.40572 10.2297 9.40572C9.95359 9.40572 9.72974 9.18186 9.72974 8.90572V6.41517C9.72974 6.13902 9.95359 5.91517 10.2297 5.91517Z"></path>
      <path d="M13.9544 7.30685C14.1497 7.50211 14.1497 7.8187 13.9544 8.01396L12.1934 9.77505C11.9981 9.97031 11.6815 9.97031 11.4862 9.77505C11.291 9.57978 11.291 9.2632 11.4862 9.06794L13.2473 7.30685C13.4426 7.11159 13.7592 7.11159 13.9544 7.30685Z"></path></svg><span className="h4 inline-richtext">৭২ ঘন্টার মধ্যে সারা বাংলাদেশ এ&nbsp;হোম  ডেলিভারি.</span>
    </li></ul>
                    </div>
                    <div className="inline-block align-bottom space-x-2">
                        <button onClick={buyNow} className="bg-green-600 opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>

                        <button onClick={addCart} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>




    
            </div>

<div className="w-full flex flex-col gap-5 justify-center rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <h1 className="text-center text-2xl font-bold">More Image And Video</h1>


<div>
      
</div>

{

  data.video == null ? <></> : <iframe className="w-full h-96" src={data.video} title="YouTube video player" frameBorder="0" allow=" autoplay  encrypted-media gyroscope " allowFullScreen></iframe>
}


        {
            imag.map((res,i)=> <img key={i} src={res} alt="image" className="w-9/12 mx-auto" />)
        }

    </div>
                </>
            }
		</main>
	);
};

export default Hero;