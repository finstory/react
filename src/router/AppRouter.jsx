import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { NavBar } from "../components/Global/NavBar";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};
