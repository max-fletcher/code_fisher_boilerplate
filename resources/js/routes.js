import Home from "./components/home";
import About from "./components/about";

export default{
   mode: 'history',

   routes: [
      {
         path: '/',
         component: Home
      },
      {
         path: '/about',
         component: About
      },
   ]
}