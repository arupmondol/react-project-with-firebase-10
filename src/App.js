
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Route/Routes';
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import Main from './components/Layout/Main';
import Faq from './components/Faq/Faq';


function App() {
const router = createBrowserRouter([
  {
   path:'/',
   element: <Main></Main>,
   children: [
     {
       path:'/home',
       element:<Home></Home>
     },
     {
       path:'/courses',
       loader: () =>fetch('https://assingment10-auth-server.vercel.app/product-categories'),
       element: <Courses></Courses>
     },
     {
       path:'/blog',
       element:<Blog></Blog>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
       path:'/register',
       element:<Register></Register>
     },
     {
      path:'/faq',
      element:<Faq></Faq>
     }
   ]
  }
])
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
