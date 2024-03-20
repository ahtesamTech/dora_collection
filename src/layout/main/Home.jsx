import { useEffect, useState } from "react";
import ProductCard from "../../utility/ProductCard";
import Pagination from "../shear/Pagination";
import useAxios from "../../Axios/useAxios";
import toast from "react-hot-toast";
import HelmetAdd from "../shear/HelmetAdd";


const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching data

        useAxios.get('/api/product')
        .then(res=>{
            setData(res.data.products);
            setLoading(false);

        }).catch(()=>{
            setLoading(false); // Set loading to false if there is an error
            toast.error('There was an error while retrieving the data');
        })

    }, []);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage);

    return (
        
        <div className="max-w-7xl mx-auto">
           <HelmetAdd pageTitle={'Home || Dora Collection'} pageDescription={'Dora Collection presents a captivating blend of contemporary fashion and timeless elegance. Explore our curated selection of trendsetting clothing, chic accessories, and stylish essentials designed to elevate your wardrobe. From sophisticated dresses to versatile separates, each piece embodies quality craftsmanship and on-trend flair. Discover your signature style with Dora Collection where fashion meets individuality.'}></HelmetAdd>

           
            <h1 className="md:text-2xl text-center my-5 text-lg font-bold  md:ms-16 m-2">Our Best Product</h1>

            {loading ? (
                <div className="flex justify-center min-h-screen items-center ">
                 <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">

                 <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
             </div>
             </div>
            ) : (
                <>
                    <Records data={currentRecords} />
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
};

export default Home;

function Records({ data }) {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 place-items-center grid-cols-1 place-content-center mx-auto">
            {data.map(res => (
                <ProductCard key={res._id} data={res}></ProductCard>
            ))}
        </div>
    );
}
