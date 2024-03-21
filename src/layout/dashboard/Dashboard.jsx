import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTodayDate from "../shear/useTodayDate";
import useAxios from "../../Axios/useAxios";



const DashboardUI = () => {
    const {Dates, Month, Year} = useTodayDate();
    const [data, setOrderData] = useState([]);
    const [todayInvoiceData, setTodayInvoiceData] = useState([]);
    const [sellProducs, setSellProducts] = useState([]);
    const [monthlySellProducsCost, setMonthSellProductsCost] = useState([]);
  const [monthlyTotalSellAmount, setMonthlyTotalSellAmount] = useState(0);
  const [monthlyTotalAmount, setMonthlyTotalAmount] = useState(0);
  const [monthlyTotalServiceAmount, setMonthlyTotalServiceAmount] = useState(0);
    const [todaySellService, setTodaySellService] = useState(0);
    const [todaySell, setTodaySell] = useState(0);
    const [todayService, setTodayService] = useState(0);
  const navigate = useNavigate();
 
////////////////////////////////////////////////////////////

useEffect(()=>{
    useAxios.get('/api/view-order/orders')
    .then(res =>{
       setOrderData(res.data.orders);
       const billData = res.data.orders;
       console.log(billData);

       

    });
  }, [Dates]);



  /////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////



  /////////////////////////////////////////////////////////////////////


 





////////////////////////////////////////////////////////////





    return (
        <div>
             <main className=" w-full">
        <div className="grid mt-4 pb-10 px-8 mx-4 rounded-3xl shadow-xl bg-gray-100 ">

            <div className="grid grid-cols-12 gap-6">
                <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                    <div className="col-span-12 mt-8">
                        <div className="flex justify-between">
                            

                            <div className=" flex flex-col justify-center text-center rounded-sm  lg:text-left"></div>
        <h2 className="text-4xl font-medium truncate">Dashboard</h2>
                        </div>
                        
                        
                        <div className="grid grid-cols-12 gap-6 mt-5">


                        <div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <div
                                            className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">{Dates}</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{data.length}</div>

                                            <div className="mt-1 text-2xl text-gray-600">Panding Order</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                             <div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <div
                                            className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">00%</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{todaySell}</div>

                                            <div className="mt-1 text-base text-gray-600">Today Sales</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                             <div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <div
                                            className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">00%</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{todayService}</div>

                                            <div className="mt-1 text-base text-gray-600">Today Service</div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                                >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <div
                                            className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                            <span className="flex items-center">30%</span>
                                        </div>
                                    </div>
                                    <div className="ml-2 w-full flex-1">
                                        <div>
                                            <div className="mt-3 text-3xl font-bold leading-8">{sellProducs}</div>

                                            <div className="mt-1 text-base text-gray-600">Today Cost By Product</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                           
                        </div>
                    </div>


        
                </div>
            </div>
        </div>
    </main>
        </div>
    );
};

export default DashboardUI;