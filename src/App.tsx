import React from "react";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Routes from "./routes/Routes";

function App() {
  return (
    <Provider store={appStore}>
      <Toaster />
      <Routes />
    </Provider>
  );
}

export default App;
