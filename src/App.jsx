import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Homepage from "./Components/Homepage.jsx";
import MovieDets from "./Components/MovieDets.jsx";
import SearchPage from "./Components/SearchPage.jsx";
import Entry from "./Components/Entry.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Default from "./Components/Default.jsx";
import Bookmarks from "./Components/Bookmarks.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Default />}>
      <Route element={<Entry />}>
        <Route index element={<Login />} />

        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/home" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movie/:id" element={<MovieDets />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
