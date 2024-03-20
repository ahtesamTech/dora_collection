import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxios from "../../Axios/useAxios";

import { useState } from "react";
import useTodayDate from "../shear/useTodayDate";
import toast from "react-hot-toast";

const AddProduct = () => {

    const { register, handleSubmit, setValue  } = useForm();

    const tdate = useTodayDate();

    const onSubmit = async (data) => {
      

    const newData = {

        title: data.title,
        description: data.description,
        price: data.price,
        discountPercentage: data.discountPercentage,
        rating: data.rating,
        stock: data.stock,
        brand: data.brand,
        category: data.category,
        thumbnail: data.thumbnail,
        images: [ data.image1, data.image2, data.image3, data.image4 ],
        video: data.video
    }


    console.log(newData);

    try {
        

         useAxios.post('api/product/add-products', newData).then(res =>{

            // toast.promise(res, res.data.message);

            if (res.data.success == true) {
          
                toast.success(res.data.message);
    
             } else {
                 // Error handling
                 console.error('Failed to add product:', res.data);
             }

         });
    
       
    } catch (error) {
        console.error('Error submitting product data:', error);
        
    }


    }



  


    return (
        <div>
         
         <section className=" py-1 bg-blueGray-50">
<div className="w-full lg:w-8/12 px-4 mx-auto mt-6 ">
  <div className="relative flex flex-col min-w-0 break-words bg-slate-200 w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div className="rounded-t bg-slate-400 mb-0 px-6 py-6">
      <div className="text-center flex justify-between">
        <h6 className="text-blueGray-700 text-xl font-bold">
         Add Product
        </h6>
        <Link to={'dashboard'}><button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
          Back
        </button></Link>
      </div>
    </div>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

        
      <form onSubmit={handleSubmit(onSubmit)}>

        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Product Information
        </h6>
        <div className="flex flex-wrap">
         
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Product Name
              </label>
              <input {...register('title')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="example" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Product Description
              </label>
              <textarea {...register('description')} type="text" className="border-0 h-40 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="example" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
               Sell Price
              </label>
              <input {...register('price')} type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required placeholder="oo oo"/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                discount Price
              </label>
              <input {...register('discountPercentage')} type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="00 00"/>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
         
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                rating
              </label>
              <input {...register('rating')} type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="0000"/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                Item Category
              </label>
              <input {...register('category')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="0000"/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
              brand
              </label>
              <input {...register('brand')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="ZUN" required/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
              Stock
              </label>
              <input {...register('stock')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="ZUN" required/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
               image Thumbnail URL
              </label>
              <input {...register('thumbnail')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required />
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
               Video URL
              </label>
              <input {...register('video')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
               image 1
              </label>
              <input {...register('image1')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
               image 2
              </label>
              <input {...register('image2')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
               image 3
              </label>
              <input {...register('image3')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required/>
            </div>
          </div>
          <div className="w-1/2 lg:w-3/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
               image 4
              </label>
              <input {...register('image4')} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" required/>
            </div>
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-blueGray-300" />

        
       <button type="submit" className="bg-green-400 w-full  hover:bg-green-900 py-2 rounded-md text-yellow-100 font-bold text-2xl">Add</button>
      </form>
    </div>
  </div>
 
</div>
</section>

        </div>
    );
};

export default AddProduct;