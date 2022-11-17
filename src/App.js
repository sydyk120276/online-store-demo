import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Pages/Main/Main";

function App() {
  const dispatch = useDispatch()
  const likes = useSelector(state => state.likes.likes)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
