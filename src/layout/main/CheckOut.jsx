
import { useEffect, useState } from "react";
import useAxios from "../../Axios/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import HelmetAdd from "../shear/HelmetAdd";


const CheckOut = () => {

    const [buyData , setBuyData] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);
    const [amountWithDelivery , setAmountWithDelivery] = useState(0);
    const [deliveryCharge , setDeliveryChaerg] = useState(100);
    const navigate = useNavigate();
    

    useEffect(()=>{
      
        const data = window.localStorage.getItem('buy_now');
        // console.log(data);
        let newData = [];

    // Check if there's existing data
    if (data) {

      newData = JSON.parse(data);
    //   console.log(newData);
      setBuyData(newData)
    
    }
        


    },[])



    useEffect(()=>{

        let data = buyData.reduce((acc, curr) => acc + (curr.product_price || 0), 0);
        setTotalAmount(data);
        // const serviceData = buyData.reduce((acc, curr)=> acc + (parseInt(curr.serviceFee) || 0), 0);
        // // console.log(serviceData);
        // setTodayService(serviceData);
        // const sellData = data - serviceData;
        // setTodaySell(sellData)
        setAmountWithDelivery(data+deliveryCharge);
    
      },[buyData])


      const selectDelivery = (e)=>{
        e.preventDefault();
        const aria = e.target.value;
        // console.log(aria);

        if (aria == '2') {
            setDeliveryChaerg(140)
            setAmountWithDelivery(totalAmount+140)
        }else{
            setDeliveryChaerg(100)
            setAmountWithDelivery(totalAmount+100)
        }





      }

      const confirm = async (e)=>{
        e.preventDefault();
        const customerName = e.target.customerName.value;
        const customerNumber = e.target.customerNumber.value;
        const customerAddress = e.target.customerAddress.value;
        const customerPaymentNumber = e.target.customerPaymentNumber.value;

        const data = {

          customer_name: customerName,
          customer_number: customerNumber,
          customer_address: customerAddress,
          customer_payment_number: customerPaymentNumber,
          delivery_charge: deliveryCharge,
          total_amount: amountWithDelivery,
          customer_product: buyData
          

        }

       

        try {
          await useAxios.post('/api/orders', data);
          toast.success('Order saved successfully!');
          window.localStorage.clear();
          navigate('/');

      } catch (error) {
          console.error('Error saving order:', error);
          toast.error('Error saving order. Please try again later.');
      }


      }




    return (
        <div>
          <HelmetAdd
          pageTitle={'Payment || Dora Collection'}
          pageDescription={'Dora Collection presents a captivating blend of contemporary fashion and timeless elegance. Explore our curated selection of trendsetting clothing, chic accessories, and stylish essentials designed to elevate your wardrobe. From sophisticated dresses to versatile separates, each piece embodies quality craftsmanship and on-trend flair. Discover your signature style with Dora Collection  where fashion meets individuality.'}
          ></HelmetAdd>
            <div className="bg-gray-100 py-5">
    <div className="mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-8/12">
                <div className="bg-white rounded-lg max-h-96 overflow-auto shadow-md p-6 mb-4">
                    <table className="overflow-scroll max-h-96">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                {/* <th className="text-left font-semibold">Total</th> */}
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                           {
                            buyData.map(res=>  <tr key={res.id} className="">
                                <td className="">
                                    <div className="flex items-center">
                                        <img className="h-16 w-16 mr-4" src={res.product_img} alt="Product image"/>
                                        <span className="font-semibold">{res.product_title}</span>
                                    </div>
                                </td>
                                <td className="py-4">৳ {res.product_price}</td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                       
                                        <span className="text-center w-8">1</span>
                                        
                                    </div>
                                </td>
                                {/* <td className="py-4">৳ 19.99</td> */}
                            </tr>)
                           }
                           
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:w-6/12">
                <div className="bg-white rounded-lg shadow-md p-6 font-bold">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>৳ {totalAmount}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <select name="aria" id="aria" onChange={selectDelivery} className="border-2 p-1 w-full text-xs">
                            <option value="1">ঢাকার ভিতরে</option>
                            <option value="2">ঢাকার বাইরে</option>
                        </select>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Delivery Fee</span>
                        <span>{deliveryCharge}</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">৳ {amountWithDelivery}</span>
                    </div>

                    <a href="#payForm" type="button" className="bg-blue-500 text-center text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</a>
                </div>
            </div>
        </div>
    </div>



    <div id="payForm">
    <div className="p-10 max-w-2xl mx-auto">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" >
        <header className="space-y-4">        
            <p className="bg-blue-500 p-3 text-center text-white font-medium">
            অর্ডার কনফার্ম করতে ২০০ টাকা অগ্রিম পেমেন্ট করতে সেন্ডমানি করুন
            </p>
           <div className="w-11/12 mx-auto space-y-2">
           <h1 className="text-lg font-medium text-white text-center bg-pink-500 p-2 rounded-md">বিকাশ-পারসোনাল  01876004933</h1>
          <h1 className="text-lg font-medium text-white text-center bg-orange-500 p-2 rounded-md">নগদ-পারসোনাল 01611521368</h1>
          <h1 className="text-lg font-medium text-white text-center bg-purple-600 p-2 rounded-md">রকেট-পারসোনাল 01876004933</h1>
           </div>

          <p className="bg-green-500 p-3 text-center text-white text-lg font-medium">
          সেন্ডমানি করে আপনার বিকাশ/নগদ/রকেট নাম্বারটি দিতে ভুলবেন না
            </p>
            <p className="bg-blue-500 p-3 text-center text-white font-medium">
            যেকোনো প্রয়োজনে কল করুন
            </p>
        </header>
       <form action="" onSubmit={confirm}>
       <main className="mt-4 p-4 ">
          <div className=" space-y-4">
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-red-200 text-gray-700 focus:ring focus:outline-none"
                placeholder="Cash On Delivery" readOnly
              />
            </div>
            <div className="my-3">
                <label htmlFor="">আপনার নাম</label>
              <input
                type="text"
                name="customerName"
                id="customerName"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="আপনার নাম" required
              />
            </div>
            <div className="my-3">
                <label htmlFor="">মোবাইল নাম্বার</label>
              <input
                type="number"
                name="customerNumber"
                id="customerNumber"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="মোবাইল নাম্বার" required
              />
            </div>
            <div className="my-3">
                <label htmlFor="">ডেলিভারি সম্পুর্ণ ঠিকানা</label>
              <input
                type="text"
                name="customerAddress"
                id="customerAddress"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="ডেলিভারি সম্পুর্ণ ঠিকানা" required
              />
            </div>
            <div className="my-3 border-t-0">
                <label htmlFor="">যে নাম্বার এর মাধ্যমে অগ্রিম পেমেন্ট করেছেন</label>
              <input
                type="number"
                name="customerPaymentNumber"
                id="customerPaymentNumber"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="যে নাম্বার এর মাধ্যমে অগ্রিম পেমেন্ট করেছেন"
              />
            </div>
           
            
          </div>
        </main>
        <footer className="mt-6 p-4">
          <button type="submit"
            className="submit-button px-4 py-3 rounded-full bg-blue-600 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
           
          >
           অর্ডার
          </button>
        </footer>
       </form>
       
      </div>
    </div>
    </div>



</div>
        </div>
    );
};

export default CheckOut;