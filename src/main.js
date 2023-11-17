import home from './temples/home.js';
import loginPage from './temples/loginPage.js';
import error from './temples/error.js';
import wall from './temples/wall.js';
import registerPage from './temples/registerPage.js';

const routes = [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/loginPage', component: loginPage },
    { path: '/error', component: error },
    {path: '/wall', component: wall},
    {path: '/registerPage', component: registerPage}
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


