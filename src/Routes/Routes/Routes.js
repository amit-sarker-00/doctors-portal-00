import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import DisplayError from "../../Pages/Home/Home/Shared/DisplayError/DisplayError";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      {
        path: "/dashboard",
        errorElement: <DisplayError></DisplayError>,
        element: (
          <PrivateRouter>
            <DashboardLayout></DashboardLayout>
          </PrivateRouter>
        ),
        children: [
          { path: "/dashboard", element: <MyAppointment></MyAppointment> },
          {
            path: "/dashboard/allusers",
            element: (
              <AdminRoutes>
                <AllUsers></AllUsers>{" "}
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboard/adddoctor",
            element: (
              <AdminRoutes>
                <AddDoctor></AddDoctor>{" "}
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboard/managedoctors",
            element: (
              <AdminRoutes>
                <ManageDoctors></ManageDoctors>{" "}
              </AdminRoutes>
            ),
          },
          {
            path: "/dashboard/payment/:id",
            element: (
              <AdminRoutes>
                <Payment></Payment>{" "}
              </AdminRoutes>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/bookings/${params.id}`),
          },
        ],
      },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/appointment", element: <Appointment></Appointment> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
