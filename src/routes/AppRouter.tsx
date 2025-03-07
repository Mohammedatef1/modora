import AboutUs from '@pages/AboutUs'
import Categories from '@pages/Categories'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from '@layouts/MainLayout'
import Home from '@pages/Home'
import Products from '@pages/Products'
import Error from '@pages/Error'
import Cart from '@pages/Cart'

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
              path: "categories/products/:prefix",
              element: <Products/>,
              loader: ( { params } )=> {
                if (typeof params.prefix !== "string" || !(/^[A-Za-z]+$/).test(params.prefix)){
                    throw new Response("Bad Request", {
                        statusText: "Sorry, This category not found",
                        status: 400
                    })
                }
                return true
              }
          },
          {
              path: "about-us",
              element: <AboutUs/>
          },
          {
            path: 'cart',
            element: <Cart/>
          }
      ]
  }
])

const AppRouter = () => {
  return (  <RouterProvider router={router}></RouterProvider> );
}
 
export default AppRouter;