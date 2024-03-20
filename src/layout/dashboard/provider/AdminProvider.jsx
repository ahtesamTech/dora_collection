
import { createContext, useEffect, useState } from "react";

export const AdminAuth = createContext(null);

const AdminProvider = ({children}) => {


 const [isAdmin ,setIsAdmin] = useState(false);



      const data = {
        isAdmin,
        setIsAdmin
    }

    return <AdminAuth.Provider value={data}>
        {
            children
        }

    </AdminAuth.Provider>
};

export default AdminProvider;