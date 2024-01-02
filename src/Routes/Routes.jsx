import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";

import AddContactsPage from "../Pages/AddContactsPage/AddContactsPage";

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
        }
    ]
}])
export default router