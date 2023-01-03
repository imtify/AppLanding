import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Helper/Loader";
import AppLanding from "./components/AppLanding";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {loading && (
        <div className={`imti-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <div className={`imti-visible ${loading === false ? "active" : ""}`}>
        <Routes>
          <Route path="/" element={<AppLanding />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
