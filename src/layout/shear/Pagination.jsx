


const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination flex w-full justify-center border-t-2 py-3 gap-4 text-white font-semibold'>
                <li className="page-item bg-blue-600 p-1 cursor-pointer rounded-md hover:bg-blue-800">
                    <p className="page-link" 
                        onClick={goToPrevPage} 
                        to={goToPrevPage}>
                        
                        Previous
                    </p>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} onClick={() => setCurrentPage(pgNumber)}
                        className= {`page-item bg-blue-600 py-1 cursor-pointer px-3 rounded-md hover:bg-blue-800 ${currentPage == pgNumber ? 'active bg-transparent border-2 text-black border-blue-600' : ''} `} >

                        <p   
                            className='page-link' 
                            >
                            
                            {pgNumber}
                        </p>
                    </li>
                ))}
                <li className="page-item bg-blue-600 py-1 px-2 cursor-pointer rounded-md hover:bg-blue-800">
                    <p className="page-link" 
                        onClick={goToNextPage}
                        to={goToNextPage}>
                        
                        Next
                    </p>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination