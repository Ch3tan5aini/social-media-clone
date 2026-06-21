import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import Messages from "./pages/Messages";
import Discover from "./pages/Discover";
import Connections from "./pages/Connections";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import { useUser } from "@clerk/react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={!isSignedIn ? <LoginPage /> : <Layout />}>
          <Route index element={<Feed />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/messages/:userId" element={<Messages />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
