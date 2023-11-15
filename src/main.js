import home from './temples/home.js';
import login from './temples/login.js';
import error from './temples/error.js';
import wall from './temples/wall.js';
import register from './temples/register.js';

const routes = [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/login', component: login },
    { path: '/error', component: error },
    {path: '/wall', component: wall},
    {path: '/register', component: register}
  ];// slash=asociar una ruta

  const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
    const route = routes.find((routeFound) => routeFound.path === hash);
    if (route && route.component) {
        window.history.pushState(
          {},
          route.path,
          window.location.origin + route.path,
        );
        if (root.firstChild) {
            root.removeChild(root.firstChild);
          }
          root.appendChild(route.component((navigateTo)));
       }else{
        navigateTo('/error');
      }
    
   }
   document.addEventListener('DOMContentLoaded', () => {
    navigateTo(window.location.pathname || defaultRoute);
   });
 
   window.onpopstate = () => {
    navigateTo(window.location.pathname);
  };
  
  navigateTo(window.location.pathname || defaultRoute);
