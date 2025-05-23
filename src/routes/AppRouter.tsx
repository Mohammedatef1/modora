import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from "@pages/Error"
import Register from '@pages/Register'
import Login from '@pages/Login'
import ProtectedRoute from '@components/common/ProtectedRoute'
import Loader from '@components/feedback/Loader'
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
        (<Suspense fallback={<div className='h-screen flex items-center justify-center'><Loader /></div>}>
          <MainLayout/>
        </Suspense>),
      errorElement: <Error/>,
      children: [
          {
              index: true,
              element: 
                (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                  <Home/>
                </Suspense>)
          },
          {
              path: "categories",
              element: 
                (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                  <Categories/>
                </Suspense>)
          },
          {
              path: "categories/products/:prefix",
              element: 
                (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
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
                (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                  <AboutUs/>
                </Suspense>)
          },
          {
            path: 'cart',
            element:  
              (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                <Cart/>
              </Suspense>)
          },
          {
            path: 'wishlist',
            element:  
              (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                <ProtectedRoute><Wishlist/></ProtectedRoute>
              </Suspense>)
          },
          {
            path: 'register',
            element:  
              (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                <Register/>
              </Suspense>)
          },
          {
            path: 'login',
            element:  
              (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                <Login/>
              </Suspense>)
          },
          {
            path: "profile",
            element: 
            (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
              <ProtectedRoute>
                <ProfileLayout/>
              </ProtectedRoute>
            </Suspense>),
            children: [
              {
                index: true,
                element: 
                (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
                  <Profile/>
                </Suspense>)
              },
              {
                path: "orders",
                element: 
                (<Suspense fallback={<div className='loader-wrapper'><Loader /></div>}>
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