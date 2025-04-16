import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

import Layout from "./components/Layout";
import ProductListPage from "./pages/products/list";
import ProductAddPage from "./pages/products/add";
import ProductEditPage from "./pages/products/edit";
import { Signup } from "./provider/authProvider";
import Ssignup from "./pages/auth/signup";
import SSignin from "./pages/auth/Signin";






function App(){
    return <>
    <Routes>

        <Route path="" element={<Layout/>}>
       <Route index element={<HomePage/>}/>
       <Route path="todos" element={<ProductListPage/>}/>
     <Route path="todos/add" element={<ProductAddPage/>}/>
       <Route path="todos/edit/:id" element={<ProductEditPage/>}/>
       <Route path="signup" element={<Ssignup/>}/>
       <Route path="signin" element={<SSignin/>}/>
       
       
       


       </Route>
    </Routes>
    </>
}
export default App

