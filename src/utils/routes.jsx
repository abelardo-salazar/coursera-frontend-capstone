import { About } from "../pages/About/About";
import { Booking } from "../pages/Booking/Booking";
import {Homepage} from "../pages/Homepage/Homepage";
import { Login } from "../pages/Login/Login";
import { Menu } from "../pages/Menu/Menu";
import { Orders } from "../pages/Orders/Orders";

export const routes = [
    {
        label: "Home",
        path: "/",
        component: <Homepage />
    },
    {
        label: "About",
        path: "/about",
        component: <About />
    },
    {
        label: "Menu",
        path: "/menu",
        component: <Menu />
    },
    {
        label: "Reservations",
        path: "/reservations",
        component: <Booking />
    },
    {
        label: "Order Online",
        path: "/order-online",
        component: <Orders />
    },
    {
        label: "Login",
        path: "/login",
        component: <Login />
    },
]