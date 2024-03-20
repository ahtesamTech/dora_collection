
import toast from "react-hot-toast";
import {  NavLink, useNavigate } from "react-router-dom";


const ProductCard = ({data}) => {

  const navigate = useNavigate();


  const buyNow = (productData)=>{


const buyData = {
  product_id : productData.id,
  product_title : productData.title,
  product_price: productData.price,
  product_img : productData.thumbnail

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




  const addCart = (productData)=>{


const buyData = {
  product_id : productData.id,
  product_title : productData.title,
  product_price: productData.price,
  product_img : productData.thumbnail

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
        return;
      }

    }

    // Append new product data to existing or create new array
    newData.push(buyData);

    localStorage.setItem('buy_now', JSON.stringify(newData));
    toast.success('Product added to cart.');
    // navigate('/check-out')

  }




    return (
        <div>
          
<div className= "min-w-80 w-11/12 transform cursor-pointer hover:scale-105 transition duration-300">
  <div className=" w-full p-5 ">
    <div className="card flex gap-3 flex-col justify-center p-6 bg-white hover:bg-slate-100 rounded-lg shadow-2xl">

    <NavLink to={`/detail/${data.id}/${data.title}`}>
    <div className="prod-img">
        <img src={data.thumbnail}
             className="max-h-36 w-full object-cover object-center" />
      </div>

      <div className="prod-title border-t-2 border-slate-400">
        <p className="text-xl uppercase text-gray-900 font-bold">{data.title}</p>
        <p className="font-bold text-green-500 text-2xl">{data.price} .TK</p>
      </div>
    </NavLink>
     
     
        
        <div className="flex mt-3 justify-center items-baseline gap-2 text-gray-900 border-t-2 pt-3">
         
          <button onClick={()=>addCart(data)}
                  className="px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
            to cart</button>
          <button onClick={()=>buyNow(data)}
                  className="px-4 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-green-800 hover:text-white border-2 border-green-900 focus:outline-none">
            Buy Now</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;