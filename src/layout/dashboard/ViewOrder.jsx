import React, { useEffect, useState } from 'react';
import useAxios from '../../Axios/useAxios';
import toast from 'react-hot-toast';

const ViewOrder = () => {
    const [order, setOrder] = useState([]);
    const [orderStatusCa, setOrderStatusCa] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10); // Number of orders to display per page

    useEffect(() => {
        useAxios.get('/api/view-order/orders')
            .then(res => {
                setOrder(res.data.orders);
            });
            
            toast.success(orderStatusCa);

    }, [orderStatusCa]);

    // Pagination logic
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = order.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = pageNumber => setCurrentPage(pageNumber);




    const orderStatus = (e, orderId) => {
        e.preventDefault();
        const selectedStatus = e.target.value;
    
        // Make the API call to update the order status
        useAxios.put('/api/orders/update-order-status', { orderId, status: selectedStatus })
            .then(response => {
                // Handle success, maybe update the UI or show a success message
                console.log('Order status updated successfully:', response.data);
                setOrderStatusCa(response.data.message);
            })
            .catch(error => {
                // Handle error, maybe show an error message
                console.error('Error updating order status:', error);
            });
    }





    return (
        <div>
            <div className="p-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-3xl font-semibold text-black">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <colgroup>
                            <col className=''/>
                            <col className='w-96'/>
                            <col className='w-96'/>
                            <col className='w-96'/>
                            <col className='w-96'/>
                            <col className=''/>
                            <col className=''/>
                            <col className='w-96'/>
                            <col className=''/>
                            <col className="w-36" />
                        </colgroup>
                        <thead className="bg-gray-600">
                            <tr className="text-left">
                                <th className="p-3">Serial</th>
                                <th className="p-3">Customer Name</th>
                                <th className="p-3">Customer Number</th>
                                <th className="p-3">Customer Address</th>
                                <th className="p-3">Order Products</th>
                                <th className="p-3"> Products Price</th>
                                <th className="p-3">Dalivery Fee</th>
                                <th className="p-3">Customer Pay Number</th>
                                <th className="p-3 text-right">Amount</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.map((res, i) => (
                                <tr key={i} className="border-b border-opacity-20 border-gray-900 bg-indigo-900">
                                    <td className="p-2 bg-lime-200 text-black font-bold w-0">
                                        <p>{i+1}</p>
                                    </td>
                                    <td className="p-1">
                                        <p>{res.customer_name}</p>
                                    </td>
                                    <td className="p-1">
                                        <p>{res.customer_number} </p>
                                    </td>
                                    <td className="p-1">
                                        <p className="">{res.customer_address}</p>
                                    </td>
                                    
                                    <td className="bg-orange-500 text-center font-bold">
                                        <ol>
                                            {
                                                res.orders_product.map((p,i)=> <li className='' key={i}> {p.product_id}: {p.product_title}</li>)
                                            }
                                        </ol>
                                    </td>
                                    <td className="text-center">
                                    <ol>
                                            {
                                                res.orders_product.map((p,i)=> <li className='' key={i}> {p.product_id}: {p.product_price}</li>)
                                            }
                                        </ol>
                                    </td>
                                    <td className="p-1 text-center">
                                        <p>{res.delivery_charge}</p>
                                    </td>
                                    <td className="p-1 text-right bg-blue-700">
                                        <p>{res.customer_payment_number}</p>
                                    </td>
                                    <td className="p-1 text-center">
                                        <p>${res.total_amount}</p>
                                    </td>
                                    <td className="p-1 text-right">
                                     
                                            <select onChange={(e) => orderStatus(e, res.order_id)} className={`px-3 py-1 text-white font-semibold rounded-md ${ 
                                                res.status == 1 ? 'bg-violet-600' :
                                                res.status == 2 ? 'bg-green-600' :
                                                res.status == 3 ? 'bg-red-600' :
                                                 'bg-orange-400' } text-gray-900`} value={res.status}>
                                                <option value="1">Panding</option>
                                                <option value="2">Confirm</option>
                                                <option value="3">Cancel</option>
                                                <option value="4">Dalivery</option>
                                            </select>
                                       
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <ul className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(order.length / ordersPerPage) }, (_, i) => (
                        <li key={i} className="mx-1">
                            <button
                                onClick={() => paginate(i + 1)}
                                className={`px-3 py-1 rounded-md ${
                                    currentPage === i + 1 ? 'bg-gray-900 text-white' : 'bg-gray-700 text-gray-300'
                                }`}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ViewOrder;
