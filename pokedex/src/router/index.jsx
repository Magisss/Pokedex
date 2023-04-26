import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailView from "../views/DetailView";
import HomeView from "../views/HomeView";


const router = createBrowserRouter([
    {
        path: "/",
        element:
            <div>
                <Navbar />
                <Outlet />
            </div>,
        children: [
            {
                path: "",
                element: <HomeView />,
            },
            {
                path: "details/:name",
                element: <DetailView />,
            },
        ]
    },
]);

export default router