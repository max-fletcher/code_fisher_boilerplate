import Home from "./components/home";
import About from "./components/about";
import Login from "./components/login";
import Register from "./components/register";
import Logout from "./components/logout";
import NotFound from "./components/notfound";

export default{
   mode: 'history',

   routes: [
      {
         path: '*',
         title: "Not Found",
         component: NotFound,
         meta: { title: '404 Not Found' }
      },
      {
         path: '/',
         component: Home,
         meta: { title: 'Home' }
      },
      {
         path: '/about',
         component: About,
         meta: { title: 'About Us' }
      },
      {
         path: '/login',
         component: Login,
         meta: { title: 'Login' }
      },
      {
         path: '/register',
         component: Register,
         meta: { title: 'Register' }
      },
      {
         path: '/logout',
         component: Logout,
         meta: { title: 'Logout' }
      },
   ]
}