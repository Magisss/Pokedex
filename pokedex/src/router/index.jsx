import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailView from "../views/DetailView";
import HomeView from "../views/HomeView";
import About from "../components/About";
import BaseStats from "../components/BaseStats";
import Moves from "../components/Moves";


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
                element:
                    <div>
                        <DetailView />
                        <Outlet />
                    </div>,
                children: [
                    {
                        path: "about",
                        element: <About />
                    },
                    {
                        path: "baseStats",
                        element: <BaseStats />
                    },
                    {
                        path: "moves",
                        element: <Moves />
                    }
                ]
            },
        ],
    },
]);

export default router