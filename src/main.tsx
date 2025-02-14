import { createRoot } from 'react-dom/client'
import '@styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Categories from '@pages/Categories.tsx'
import AboutUs from '@pages/AboutUs.tsx'
// import Home from '@pages/Home.tsx'
import Mainlayout from '@layouts/MainLayout.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>
    },{
        path: 'categories:category',
        element: <Categories/>
    },
    {
        path:"about-us",
        element: <AboutUs/>
    }
])


createRoot(document.getElementById('root')!).render(
   <RouterProvider router={router}></RouterProvider>,
)
