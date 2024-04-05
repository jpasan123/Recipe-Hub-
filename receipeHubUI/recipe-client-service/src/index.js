import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './pages/RegisterChef.jsx';
import AddRecipe from './pages/AddRecipe.jsx';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipe from './pages/Recipe';
import About from './pages/About';
import LoginChef from './pages/LoginChef';
import RecipeDetails from './components/RecipeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/recipes",
    element: <Recipe/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
    {
    path: "/register",
    element: <Register/>,
  },
  {
  path: "/login",
  element: <LoginChef/>,
},{
  path: "/add-recipe",
  element: <AddRecipe/>,
},
{
  path: "/recipe-details/:id",
  element: <RecipeDetails/>,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
