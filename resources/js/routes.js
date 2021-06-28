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
         name: 'NotFound',
         meta: { title: '404 Not Found' }
      },
      {
         path: '/',
         component: Home,
         name: 'Home',
         meta: { title: 'Home' }
      },
      {
         path: '/about',
         component: About,
         name: 'About',
         meta: { title: 'About Us' }
      },
      {
         path: '/login',
         component: Login,
         name: 'Login',
         meta: { title: 'Login' }
      },
      {
         path: '/register',
         component: Register,
         name: 'Register',
         meta: { title: 'Register' }
      },
      {
         path: '/logout',
         component: Logout,
         name: 'Logout',
         meta: { title: 'Logout' }
      },
   ]
}