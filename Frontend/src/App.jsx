import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./routes/Layout"
import ErrorPage from "./routes/ErrorPage"
import Home from "./routes/Home"
import Cart from "./routes/Cart"
import Favorite from "./routes/Favorite"
import Shop from "./routes/Shop"
import Product from "./routes/Product"
import Login from "./routes/Login"
import Register from "./routes/Register"
import PaymentDone from "./routes/PaymentDone"
import Dashbord from "./routes/admin/Dashbord"
import AddProduct from "./routes/admin/AddProduct"
import Purchases from "./routes/admin/Purchases"
import DashboardLayout from "./routes/admin/DashboardLayout"
import { isAdmin } from "./utils/hooks"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "shop",
          element: <Shop />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "favorite",
          element: <Favorite />
        },
        {
          path: "product/:id",
          element: <Product />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "payment",
          element: <PaymentDone />,
        },

        {
          path: "dashboard",
          loader: isAdmin,
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <Dashbord />
            },
            {
              path: "add-product",
              element: <AddProduct />
            },

            {
              path: "purchases",
              element: <Purchases />
            },
          ]

        },
      ]

    },

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App