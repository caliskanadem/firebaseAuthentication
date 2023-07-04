import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AuthLayout from "../layout/AuthLayout";
import Layout from "../layout/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
