import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";

import AddContactsPage from "../Pages/AddContactsPage/AddContactsPage";
import AllContactsPage from "../Pages/AllContactsPage/AllContactsPage";

const router = createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    children : [
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/addContacts',
            element:<AddContactsPage></AddContactsPage>
        },
        {
            path:'/allContacts',
            element:<AllContactsPage></AllContactsPage>
        }
    ]
}])
export default router