import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import OutfitGenerator from "./pages/OutfitGenerator/OutfitGenerator";
import Trends from "./pages/Trends/Trends";
import Cart from "./pages/Cart/Cart";
import Root from "./pages/Root/Root";
import PurchaseHistory from "./pages/PurchaseHistory/PurchaseHistory";
import Favorites from "./pages/Favorites/Favorites";
import About from "./pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/outfit-generator",
                element: <OutfitGenerator />,
            },
            {
                path: "/fashion-trends",
                element: <Trends />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/purchase-history",
                element: <PurchaseHistory />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
