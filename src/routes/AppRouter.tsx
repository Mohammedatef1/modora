import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from "@pages/Error"
import Register from '@pages/Register'
import Login from '@pages/Login'
import ProtectedRoute from '@components/common/ProtectedRoute'
const ProfileLayout = lazy(() => import("@layouts/ProfileLayout"))
const Profile = lazy(() => import("@pages/Profile"))
const Orders = lazy(()=> import("@pages/Orders"))
const Categories = lazy(() => import("@pages/Categories"))
const AboutUs = lazy(() => import("@pages/AboutUs"))
const MainLayout = lazy(() => import("@layouts/MainLayout"))
const Home = lazy(() => import("@pages/Home"))
const Products = lazy(() => import("@pages/Products"))
const Cart = lazy(() => import( "@pages/Cart"))
const Wishlist = lazy(() => import("@pages/Wishlist"))

const router = createBrowserRouter([
  {
      path: "/",
      element: 
        (<Suspense fallback={<p>Loading please wait...</p>}>
          <MainLayout/>
        </Suspense>),
      errorElement: <Error/>,
      children: [
          {
              index: true,
              element: 
                (<Suspense fallback={<p>Loading please wait...</p>}>
                  <Home/>
                </Suspense>)
          },
          {
              path: "categories",
              element: 
                (<Suspense fallback={<p>Loading please wait...</p>}>
                  <Categories/>
                </Suspense>)
          },
          {
              path: "categories/products/:prefix",
              element: 
                (<Suspense fallback={<p>Loading please wait...</p>}>
                  <Products/>
                </Suspense>),
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
              element: 
                (<Suspense fallback={<p>Loading please wait...</p>}>
                  <AboutUs/>
                </Suspense>)
          },
          {
            path: 'cart',
            element:  
              (<Suspense fallback={<p>Loading please wait...</p>}>
                <Cart/>
              </Suspense>)
          },
          {
            path: 'wishlist',
            element:  
              (<Suspense fallback={<p>Loading please wait...</p>}>
                <ProtectedRoute><Wishlist/></ProtectedRoute>
              </Suspense>)
          },
          {
            path: 'register',
            element:  
              (<Suspense fallback={<p>Loading please wait...</p>}>
                <Register/>
              </Suspense>)
          },
          {
            path: 'login',
            element:  
              (<Suspense fallback={<p>Loading please wait...</p>}>
                <Login/>
              </Suspense>)
          },
          {
            path: "profile",
            element: 
            (<Suspense fallback={<p>Loading please wait...</p>}>
              <ProtectedRoute>
                <ProfileLayout/>
              </ProtectedRoute>
            </Suspense>),
            children: [
              {
                index: true,
                element: 
                (<Suspense fallback={<p>Loading please wait...</p>}>
                  <Profile/>
                </Suspense>)
              },
              {
                path: "orders",
                element: 
                (<Suspense fallback={<p>Loading please wait...</p>}>
                  <Orders/>
                </Suspense>)
              }
            ]
          }
      ]
  }
])

const AppRouter = () => {
  return (  <RouterProvider router={router}></RouterProvider> );
}
 
export default AppRouter;