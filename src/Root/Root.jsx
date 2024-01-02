import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    const location = useLocation()
    return (
        <div>
            <div className={`${location?.pathname.includes("edit") || location?.pathname.includes("add") || location?.pathname.includes("details") ? "hidden" : "block sticky top-0 z-50"}`}>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;