import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16 ">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-3">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;