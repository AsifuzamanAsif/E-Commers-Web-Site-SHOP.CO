import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Singup from "./Pages/Singup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route path="/" element={<Singup />}></Route>
       <Route path="/Login"element={<Login />}></Route>
       <Route path="/Home"element={<Home />}></Route>
     </Route>
    )
  );
  return <RouterProvider router={router}/> 
};

export default App;
