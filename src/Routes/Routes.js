import { createBrowserRouter } from "react-router-dom";
import AllPost from "../Components/AllPost/AllPost";
import DesktopLayout from "../Layout/DesktopLayout/DesktopLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DesktopLayout></DesktopLayout>,
        children: [
            {
                path: '/',
                element: <AllPost></AllPost>
            }
        ]
    }
])