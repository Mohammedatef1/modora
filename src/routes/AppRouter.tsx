import AboutUs from '@pages/AboutUs'
import Categories from '@pages/Categories'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from '@layouts/MainLayout'
import Home from '@pages/Home'
import Products from '@pages/Products'
import Error from '@pages/Error'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Mainlayout/>,
      errorElement: <Error/>,
      children: [
          {
              index: true,
              element: <Home/>
          },
          {
              path: "categories",
              element: <Categories/>
          },
          {
              path: "products/:prefix",
              element: <Products/>
          },
          {
              path: "about-us",
              element: <AboutUs/>
          }
      ]
  }
])

const AppRouter = () => {
  return (  <RouterProvider router={router}></RouterProvider> );
}
 
export default AppRouter;