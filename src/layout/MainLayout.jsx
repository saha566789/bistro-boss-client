import { Outlet } from "react-router-dom";
import Footer from "../componets/Pages/shared/Footer/Footer";
import Navbar from "../componets/Pages/shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;