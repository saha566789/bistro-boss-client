import { Outlet, useLocation } from "react-router-dom";
import Footer from "../componets/Pages/shared/Footer/Footer";
import Navbar from "../componets/Pages/shared/Navbar/Navbar";


const MainLayout = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
           {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default MainLayout;