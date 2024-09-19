import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<LoginPage />} path="/login"></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
