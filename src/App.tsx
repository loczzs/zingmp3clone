import React from "react";
import Mainlayout from "./layout/Mainlayout";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Album =lazy(()=>import( "./component/Album"))

const Home = lazy(() => import("./Home/Home"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="album/:title/:id" element={<Album />} />
          <Route path="playlist/:title/:id" element={<Album />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
