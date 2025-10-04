import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import Login from "./pages/auth/login/Login.jsx";
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx";
import Sidebar from "./components/common/SideBar.jsx";
import RightPanel from "./components/common/RightPanel.jsx";
import NotificationPage from "./pages/notification/NotificationPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";

const App = () => {
  const {
    data: authUser,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if(data.error){return null }
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        console.log("Auth user is : ", data);
        return data;
      } catch (error) {
        throw error;
      }
    },
    retry: false,
  });
  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <LoadingSpinner size="lg"></LoadingSpinner>
      </div>
    );
  }
  return (
    <div className="flex max-w-6xl mx-auto">
      {authUser&&<Sidebar />}
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to={"/"} />}
        ></Route>
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        ></Route>
        <Route
          path="/notifications"
          element={authUser ? <NotificationPage /> : <Navigate to={"/login"} />}
        ></Route>
        <Route
          path="/profile/:username"
          element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
        ></Route>
      </Routes>
      {authUser&&<RightPanel />}
      <Toaster></Toaster>
    </div>
  );
};

export default App;
