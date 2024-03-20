import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom';
import AdminProvider from './layout/dashboard/provider/AdminProvider';
import DashNav from './layout/dashboard/DashNav';

const Admin = () => {
    return (
        <div>
                <AdminProvider>
                    <DashNav></DashNav>
                <Toaster></Toaster>
                <Outlet></Outlet>
                </AdminProvider>
        </div>
    );
};

export default Admin;